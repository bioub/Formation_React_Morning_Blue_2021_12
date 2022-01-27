# Exercice CRUD

## Afficher un contact

- dans users/api ajouter une requete avec fetch vers le serveur
en pensant au token
- dans users/UserShow émettre au parent comme dans UserList avec 
onMount (lui passer l'id en paramètre)
- créer une async action dans users/actions.js
- traiter cette action dans users/reducers.js
- écrire un sélecteur qui retourne le bon user du store
- appeler ce sélecteur et l'action creator depuis un container
