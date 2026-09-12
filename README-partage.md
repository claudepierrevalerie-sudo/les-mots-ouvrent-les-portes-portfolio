# Portfolio de Valérie — Version locale V2

## Projet

**Les mots ouvrent les portes**  
**Candidate :** Valérie  
**Co-rédaction et co-contrôle des contenus :** Yasmina et Valérie  
**Périmètre :** Modules 1 à 4  
**Statut :** version locale de travail, à relire et à valider humainement

## Objet du dossier

Cette version présente l'aboutissement du parcours de Valérie dans le Challenge 100 Jours. Elle ne constitue pas une candidature à la finale. Elle rassemble les productions pédagogiques, la progression numérique et les preuves de méthode disponibles jusqu'au Module 4.

Le Module 5 initialement prévu est annulé. Le Module 6 reste conservé dans les sources du projet, mais il n'est pas intégré à cette version du portfolio.

## Ouvrir le dossier

Important : ne pas ouvrir `portfolio.html` directement depuis l'aperçu d'une archive ZIP. Extraire d'abord l'intégralité du dossier `portfolio-local-valerie-v2`, puis ouvrir `portfolio.html` depuis le dossier extrait. Les liens internes ont besoin de conserver l'arborescence complète.

1. Commencer par `portfolio/07-page-accueil-portfolio-valerie-v1.md`.
2. Poursuivre avec `portfolio/09-index-lecture-portfolio-valerie-v1.md`.
3. Ouvrir les contenus complets des quatre modules dans `modules/`.
4. Ouvrir le mini-site en lançant un serveur local depuis `mini-site/`.

Pour une consultation simple, un serveur local est recommandé afin de permettre le chargement des données JSON et le fonctionnement du service worker :

```powershell
Set-Location .\mini-site
python -m http.server 8080
```

Puis ouvrir :

- `http://localhost:8080/index.html`
- `http://localhost:8080/controle-avant-pwa.html`

L'ouverture directe de `index.html` fonctionne désormais en mode preuve locale : les cartes sont chargées depuis les données intégrées et les flashcards restent interactives. Le serveur local reste recommandé pour tester le chargement JSON externe, le service worker et les fonctions PWA.

## Contenu

- `portfolio/` : accueil, architecture, index, fiches synthétiques et décisions de périmètre ;
- `modules/` : versions Markdown et HTML des Modules 1 à 4, avec leurs README de contexte ;
- `preuves/` : inventaire, preuve principale, preuves des séances 18 et 24, dossier global du Module 06, sélection initiale et workflow ;
- `mini-site/` : copie locale complète du mini-site, sans dépôt Git interne, sans `node_modules` et sans `dist`.

La fiche [Crédits visuels V2](portfolio/12-credits-visuels-v2.md) consigne l'origine Canva déclarée libre de droits pour les images et icônes utilisées dans ce partage.

## Distinction importante sur le périmètre

Le mini-site est une production historique du projet global. Il présente encore la structure générale de la formation et la mention de 15 modules. Le portfolio, lui, adopte volontairement un périmètre de présentation plus resserré : les contenus effectivement retenus et relus dans cette version vont jusqu'au Module 4.

Il ne s'agit pas d'une contradiction : le mini-site montre l'ambition et l'évolution numérique du projet, tandis que le portfolio documente l'état des contenus présentés au moment du partage. Le Module 5 initialement prévu est annulé et le Module 6 n'est pas intégré à cette version.

## Statuts à respecter

Les mentions suivantes ne sont pas équivalentes :

- produit ;
- contrôlé localement ;
- prêt pour validation humaine ;
- publié ;
- validé humainement.

La présence d'un fichier ou l'accessibilité d'une page ne suffit pas à établir une validation pédagogique définitive.

## Contrôles avant partage

- vérifier les liens de l'index depuis ce dossier V2 ;
- ouvrir les quatre contenus Markdown et HTML ;
- tester le mini-site sur ordinateur et téléphone ;
- vérifier la navigation clavier ;
- lancer la page de contrôle avant PWA ;
- contrôler les images, citations, droits et éventuelles données personnelles ;
- faire relire les contenus par Yasmina ;
- faire relire le dossier par le professeur avant tout partage élargi ;
- ne créer l'archive ZIP qu'après la relecture complète et la clôture des contrôles.

## Limites connues

- cette version s'arrête volontairement au Module 4 ;
- la présentation finale pourra encore être harmonisée ;
- les validations humaines indiquées dans les preuves restent à compléter lorsqu'elles ne sont pas déjà établies ;
- le Module 6 pourra faire l'objet d'une suite indépendante.
