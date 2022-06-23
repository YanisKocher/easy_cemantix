# Easy Cemantix

Ce petit projet a pour but de trouver facilement le mot du jour dans [Cemantix](https://cemantix.herokuapp.com/). Le but n'est pas de tricher mais simplement de réussir via un script à trouver le mot du jour.

## Installation

**Etape 1** : installer les packages npm.
```bash
npm i
```

**Etape 2** : lancer la commande
```bash
node index
```

## Fonctionnement
Une fois le script lancé, celui-ci va piocher dans une base de mot et les utiliser un par un.
Voici la signification du code couleur :
- ![#00FF00](https://via.placeholder.com/15/00FF00/00FF00.png) `Le mot du jour est ...`
- ![#FFFF00](https://via.placeholder.com/15/FFFF00/FFFF00.png) `Le mot ... fait parti du top 10.`
- ![#FF0000](https://via.placeholder.com/15/FF0000/FF0000.png) `Une erreur est survenue.`
