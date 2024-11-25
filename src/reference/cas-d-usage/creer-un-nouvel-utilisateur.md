# Créer un nouvel utilisateur

## Prérequis

Avant toute tentative de création d’utilisateur, assurez-vous de disposer de la clé de chiffrement permettant de créer
les mots de passe. Elle est différente de la clé d’identification à l’API, et vous a été fournie au même moment lors de
la création de vos accès à l’API.

Il s’agit d’une clé publique RSA qui se présente sous la forme suivante :

::: code-group

```PKCS#8 [Clé publique]
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+ExxkBvtmbqww5IeGbr0TSrTh
wLyOb2zh4i1K3qSCIUNsl01rYqB35biQIE5VnFTGGPckZ2YegNsTAGHOteo9FegM
K3SoISoU05eSQGO6M4Z/mMAzn9azIfurVtyoPnNVaHIfHh85HEB9pFymiXEiQUS8
9StIFi9+l66IdHTRRwIDAQAB
-----END PUBLIC KEY-----

```

:::

La clé de chiffrement est lié à un compte et une instance spécifique de l’API, il faudra donc utiliser la clé appropriée
à l’environnement utilisé.

## Choix de l’identifiant

Généralement, l’identifiant choisi correspond à une stratégie globale fixée par la DSI de votre école (notamment dans
le cadre de la mise en place de l’authentification unique, aussi appelée SSO). Il peut s’agir d’une suite de caractères
arbitraires, un e-mail ou toute autre chaîne de caractère en fonction de vos règles métier.

Cet identifiant doit être unique. Un doublon dans la base engendrerait des comportements imprévisibles lors de la
récupération des utilisateurs.

## Chiffrement du mot de passe

Avant de pouvoir créer l’utilisateur, il vous faut au préalable créer le mot de passe associé selon la méthodologie de
votre choix. Il vous faut ensuite chiffrer ce mot de passe en utilisant la clé publique. Veillez à utiliser le type
de padding OAEP.

Voici comment le faire dans différents langages :

::: code-group

```C#
using System;
using System.Security.Cryptography;
using System.Text;

class Program
{
    static void Main()
    {
        string data = "My_p@ssw0rd";
        string publicKeyPem = System.IO.File.ReadAllText("public.pem");

        using (RSA rsa = RSA.Create())
        {
            rsa.ImportFromPem(publicKeyPem);
            byte[] encryptedData = rsa.Encrypt(Encoding.UTF8.GetBytes(data), RSAEncryptionPadding.OaepSHA256);

            Console.WriteLine(Convert.ToBase64String(encryptedData));
        }
    }
}
```

```Go
package main

import (
	"crypto/rand"
	"crypto/rsa"
	"crypto/sha256"
	"encoding/base64"
	"fmt"
	"os"
	"io/ioutil"
)

func main() {
	data := []byte("My_p@ssw0rd")

	// Read the public key
	publicKeyBytes, err := ioutil.ReadFile("public.pem")
	if err != nil {
		fmt.Println("Error reading public key:", err)
		return
	}

	// Parse the PEM key
	block, _ := pem.Decode(publicKeyBytes)
	if block == nil || block.Type != "PUBLIC KEY" {
		fmt.Println("Failed to decode PEM block containing public key")
		return
	}

	publicKey, err := x509.ParsePKIXPublicKey(block.Bytes)
	if err != nil {
		fmt.Println("Error parsing public key:", err)
		return
	}

	// Encrypt with OAEP
	encryptedData, err := rsa.EncryptOAEP(sha256.New(), rand.Reader, publicKey.(*rsa.PublicKey), data, nil)
	if err != nil {
		fmt.Println("Encryption failed:", err)
		return
	}

	fmt.Println(base64.StdEncoding.EncodeToString(encryptedData))
}
```

```JavaScript
const crypto = require('crypto');
const fs = require('fs');

const data = "My_p@ssw0rd";
const publicKey = fs.readFileSync('public.pem', 'utf8');

// Encrypt with OAEP
const encryptedData = crypto.publicEncrypt(
    {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
    },
    Buffer.from(data)
);

console.log(encryptedData.toString('base64'));
```

```PHP
<?php
$data = "My_p@ssw0rd";
$publicKey = file_get_contents("public.pem");

// Encrypt with OAEP
openssl_public_encrypt($data, $encryptedData, $publicKey, OPENSSL_PKCS1_OAEP_PADDING);

echo base64_encode($encryptedData);
```

```Python
from cryptography.hazmat.primitives.asymmetric import padding
from cryptography.hazmat.primitives.hashes import SHA256
from cryptography.hazmat.primitives.asymmetric import rsa
from cryptography.hazmat.primitives.serialization import load_pem_public_key

# Load public key
with open("public.pem", "rb") as key_file:
    public_key = load_pem_public_key(key_file.read())

# Encrypt with OAEP
data = b"My_p@ssw0rd"
encrypted_data = public_key.encrypt(
    data,
    padding.OAEP(
        mgf=padding.MGF1(algorithm=SHA256()),
        algorithm=SHA256(),
        label=None
    )
)

print(encrypted_data.hex())
```

:::

## Création de l’utilisateur

[Comment créer un utilisateur][creer-un-utilisateur]

[creer-un-email]: /reference/ressources/core/e-mail#creation-d-un-e-mail
[creer-un-utilisateur]: /reference/ressources/core/utilisateur#creation-d-un-utilisateur
