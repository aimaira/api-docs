# Créer un nouveau dossier de candidature

Si vous souhaitez importer les candidats et leur dossier de candidature depuis un outil externe à AIMAIRA qui ne dispose
pas d’une intégration native, vous pouvez utiliser l’API mise à votre disposition pour effectuer cet import.

## Création de l’adresse e-mail

Dans **Manage**, seuls les candidats dont l’adresse e-mail a été renseignée s’affichent dans le menu 
**Admission / Candidat**. Il est donc nécessaire de créer une nouvelle adresse e-mail avant de créer le candidat à qui 
cette adresse appartient. Une fois l’e-mail créé, pensez à enregistrer l’id. Vous ne pourrez pas le retrouver via l’API.

[Comment créer une adresse e-mail][creer-un-email]

## Création du Candidat

Une fois l’adresse e-mail créée, vous pouvez créer un candidat.

[Comment créer un candidat][creer-un-candidat]

## Création ou récupération d’une voie d’admission

Avant de pouvoir créer un dossier de candidature, il est nécessaire de disposer d’un `SessionRecrutementId` qui
correspond à l’id d’une voie d’admission.

Pour ce faire, vous avez deux possibilités :

- Créer une voie d’admission
- Lister les voies d’admission afin de récupérer l’id de la voie d’admission souhaitée

Si vous souhaitez créer une voie d’admission, il vous faudra disposer d’un `ProgrammeId` et d’un `PeriodeRentreeId` qui
correspond à l’id d’une période.

[Comment créer une voie d’admission][creer-une-voie-d-admission]  
[Comment lister les voies d’admission][lister-les-voies-d-admission]  
[Comment lister les programmes][lister-les-programmes]  
[Comment lister les périodes][lister-les-periodes]

## Création ou récupération d’un état de candidature

Afin de créer le dossier de candidature dans le bon état de candidature (en fonction du flux de travail configuré), il 
est nécessaire de disposer d’un `EtatCandidatureId`.

[Comment lister les états de candidature][lister-les-etats-de-candidature]

## Créer un dossier de candidature

Une fois toutes les étapes préalables accomplies, vous pouvez créer le dossier de candidature. Une fois le dossier de
candidature créé via l’API, vous pouvez vous le lister depuis l’API ou depuis **Manage**.

[Comment créer un dossier de candidature][creer-un-dossier]  
[Comment lister les dossiers de candidature][lister-les-dossiers]

[creer-un-candidat]: /reference/ressources/admission/candidat#creation-d-un-candidat
[creer-un-email]: /reference/ressources/core/e-mail#creation-d-un-e-mail
[creer-une-voie-d-admission]: /reference/ressources/admission/voie-d-admission#creer-une-voie-d-admission
[lister-les-voies-d-admission]: /reference/ressources/admission/voie-d-admission#lister-les-voies-d-admission
[lister-les-programmes]: /reference/ressources/core/programme#lister-les-programmes
[lister-les-periodes]: /reference/ressources/core/periode#lister-les-periodes
[lister-les-etats-de-candidature]: /reference/ressources/admission/etat-de-candidature#lister-les-etats-de-candidature
[creer-un-dossier]: /reference/ressources/admission/dossier#creer-un-dossier
[lister-les-dossiers]: /reference/ressources/admission/dossier#lister-les-dossiers