# Correspondance des noms d’entités hérités

Le tableau ci-dessous liste les noms des entités tels qu’exposés par l’API et leurs correspondances avec les noms 
hérités que l’on retrouve par exemple lors de la récupération du message envoyé par un webhook.

| Univers   | Nom de l’entité  | Point de terminaison dans l’API | Nom hérité                        |
|-----------|------------------|---------------------------------|-----------------------------------|
| Admission | Candidat         | /Candidat                       | recrutement.T_CANDIDAT            |
| Admission | Dossier          | /Dossier                        | recrutement.T_DOSSIER             |
| Admission | Voie d’admission | /SessionRecrutement             | recrutement.T_SESSION_RECRUTEMENT |
