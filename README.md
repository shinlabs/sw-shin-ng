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

- Ajout d'un loading spinner
- Les détails de véhicules et personnages OK
- Bouton "accueil" dans la toolbar
- Cas "aucune ressource" ou "ressources multiples" pris en charge
- Pagination avec la bonne requête GET
- Liens entre personnages et véhicules ok
- Affichage des détails d'un vehicule presque ok
- Affichage des détails d'un personnage (utilisation mat-grid)
- Affichage de tous les personnages (utilisation mat-table / mat-paginator)
- Création d'une sidenav et de toolbar
- Création des services
- Création des models

## Explication des choix

- Affichage de deux toolbars. J'ai voulu un peu copier une petite capture d'écran que j'ai
vue pour votre outils

- Utilisation des accordéons dans la sidenav : Le cas présent ne s'y prête pas, mais on
pourrait imaginer plusieurs options pour "Personnages" ou "Véhicules", comme "Rechercher 
par id" ou "Rechercher par pilotes" (use case : "Quels sont les véhicules pilotés par Luke
 Skywaler ?", au lieu de devoir aller chercher la fiche de Luke)
 
- Le composant principal "AppComponent" contient les toolbars, la sidenav, et le
MainComponent qui contient le routage des adresses URL, afin que
ces adresses url ne mettent à jour que la partie principale de l'affichage. Je trouve 
que c'est un meilleur choix si l'on souhaite afficher une dashboard.

- Sur les tiles du style "les espèces du personnage" ou "les films du personnage", j'ai
affiché le nombre attendu "#nombre". En effet, j'ai dû mettre un setTimeout, car il fallait
lancer autant de requête GET que d'espèces / films / véhicules. Dans un cas réel, il aurait
fallu créer d'autres endpoints côté back. C'est le seul moyen que j'ai trouvé pour m'adapter
à la limitation du back. Du coup, le #nombre est une sorte de vérification pour voir si
le téléchargement s'est bien passée.
## Ce qu'il reste à faire
- [FAIT] Tester les liens d'affichage des ressources (cas "ressource inexistante",
 cas "ressources multiples lors de l'affichage de détails")
- [FAIT] Changer l'appel get pour avoir tous les personnages / véhicules
- [FAIT] Améliorer la tile principale des détails d'un véhicule
- [FAIT] Ajouter loading page
- Permettre l'accès direct à la page de détails, sans passer par la page liste
- Rajouter la zone de recherche sur la sidenav, avec un filtre sur les types de ressources
(personnage, véhicules, vaisseaux...)


