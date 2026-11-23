// Lecture des exemples cURL de la documentation, pour les rejouer depuis le navigateur.

export interface ParsedCurl {
  method: string
  url: string
  headers: Record<string, string>
  body?: string
}

// Découpe une commande shell : guillemets simples ('\'' compris), guillemets doubles et continuations « \ ».
function tokenize(command: string): string[] {
  const tokens: string[] = []
  let current = ''
  let started = false
  for (let i = 0; i < command.length; i++) {
    const c = command[i]
    if (c === "'") {
      started = true
      const end = command.indexOf("'", i + 1)
      current += command.slice(i + 1, end < 0 ? command.length : end)
      i = end < 0 ? command.length : end
    } else if (c === '"') {
      started = true
      for (i++; i < command.length && command[i] !== '"'; i++) {
        if (command[i] === '\\' && i + 1 < command.length) i++
        current += command[i]
      }
    } else if (c === '\\' && command[i + 1] === '\n') {
      i++
    } else if (c === '\\' && i + 1 < command.length) {
      started = true
      current += command[++i]
    } else if (/\s/.test(c)) {
      if (started) tokens.push(current)
      current = ''
      started = false
    } else {
      started = true
      current += c
    }
  }
  if (started) tokens.push(current)
  return tokens
}

export function parseCurl(command: string): ParsedCurl | null {
  const tokens = tokenize(command.trim())
  if (tokens[0] !== 'curl') return null
  const result: ParsedCurl = { method: '', url: '', headers: {} }
  for (let i = 1; i < tokens.length; i++) {
    const t = tokens[i]
    const value = () => tokens[++i] ?? ''
    if (t === '-X' || t === '--request') result.method = value().toUpperCase()
    else if (t === '-H' || t === '--header') {
      const header = value()
      const colon = header.indexOf(':')
      if (colon > 0) result.headers[header.slice(0, colon).trim()] = header.slice(colon + 1).trim()
    } else if (t === '-d' || t === '--data' || t === '--data-raw' || t === '--data-binary') result.body = value()
    else if (t === '-u' || t === '--user') value() // remplacé par les identifiants configurés
    else if (t.startsWith('-')) continue
    else if (!result.url) result.url = t
  }
  if (!result.url) return null
  result.method ||= result.body !== undefined ? 'POST' : 'GET'
  return result
}

const quote = (text: string) => `'${text.replace(/'/g, `'\\''`)}'`

// La même requête en cURL, pour un terminal (quand le navigateur ne peut pas l'envoyer).
export function toCurl(request: ParsedCurl, user: string, password: string): string {
  const lines = [`curl ${quote(request.url)} \\`]
  if (request.method !== 'GET') lines.push(`  --request ${request.method} \\`)
  for (const [name, value] of Object.entries(request.headers)) lines.push(`  --header ${quote(`${name}: ${value}`)} \\`)
  if (request.body !== undefined) lines.push(`  --data ${quote(request.body)} \\`)
  lines.push(`  -u ${quote(`${user}:${password}`)}`)
  return lines.join('\n')
}
