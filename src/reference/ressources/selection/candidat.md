# Candidat

L’entité `Candidat` représente un individu qui souhaite s’inscrire à un ou plusieurs concours.

## Numéro de Candidat

Le numéro de candidat est un identifiant unique qui doit être fourni lors de la création du `Candidat`.

## Création d’un Candidat

Veillez à utiliser les points d’entrée préfixés par `/selection`

**Exemple :** `/GraphV1/Candidat` devient `/GraphV1/selection/Candidat`

> Bien qu’une attention particulière soit apportée à ce que la façon d’utiliser ces points d’entrée différents soit la
plus proche possible, il subsiste des différences d’usage. Dans ce cas, des encarts comme celui-ci décrivent les
spécificités de **Sélection**.

::: tip Sélection

Lors de la création d’un candidat dans le contexte de **Sélection**, utilisez la propriété `NomUsage` à la place de la
propriété `Nom` et renseignez la propriété `Numero` pour permettre la création.

:::