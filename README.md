# Star Wars Project

Ce projet a été créé pour un entretien d'embauche.
Le cahier des charges était simple.
Utiliser les apis de [SWAPI](https://swapi.co/documentation) et implémenter les fonctionnalités suivantes côté front :
- Pouvoir consulter la liste des personnages de Star Wars
- Pouvoir consulter la liste des véhicules de Star Wars
- Consulter les détails d'un personnage
- Consulter les détails d'un véhicule
- Liens entre les véhicules et les personnages

## Technos

- Angular 6 

## Carnet de bord (ordre anti-chronologique)

- Liens entre personnages et véhicules ok
- Affichage des détails d'un vehicule presque ok
- Affichage des détails d'un personnage (utilisation mat-grid)
- Affichage de tous les personnages (utilisation mat-table / mat-paginator)
- Création d'une sidenav et de toolbar
- Création des models
- Création des services

s
## Explication des choix

- La récupération de tous les personnages ou de tous les véhicules se fait grâce
à autant de requêtes get que de ressources respectives.
Je n'avais pas bien vu qu'il y avait une url pour avoir toutes les ressources en un coup.
Quand j'aurais finis les 4 fonctionnalités attendues, je changerai le code pour utiliser
l'url fourni par swapi

## Ce qu'il reste à faire
- Tester les liens d'affichage des ressources (cas "ressource inexistante",
 cas "ressources multiples lors de l'affichage de détails")
- Changer l'appel get pour avoir tous les personnages / véhicules
- Améliorer la tile principale des détails d'un véhicule


