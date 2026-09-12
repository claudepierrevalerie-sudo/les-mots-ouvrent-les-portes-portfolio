# Rapport de contrôle et de relecture — Portfolio local V2

**Projet :** Les mots ouvrent les portes  
**Candidate :** Valérie  
**Co-rédaction et co-contrôle :** Yasmina et Valérie  
**Périmètre :** Modules 1 à 4  
**Date du contrôle :** 2026-09-10  
**Statut :** contrôles locaux exécutés, relecture humaine finale requise

## 1. Intégrité de la copie

- Les fichiers critiques du portfolio ont été comparés à leurs sources : conformes.
- Les versions Markdown des Modules 1 à 4 ont été comparées aux sources : conformes.
- La page principale du mini-site a été comparée à la source : conforme.
- Les sources originales et la V1 n'ont pas été modifiées.

## 2. Structure du dossier partagé

- `portfolio/` : documents de présentation, architecture, index et fiches ;
- `modules/` : versions Markdown et HTML des Modules 1 à 4 ;
- `preuves/` : inventaire, preuves des séances 18 et 24, dossier global du Module 06, workflow et sélection initiale ;
- `mini-site/` : 21 fichiers du mini-site, sans dépôt Git interne, sans `node_modules` et sans `dist`.

## 3. Liens internes

Le contrôle de l'index de lecture depuis le dossier V2 ne relève aucun lien Markdown cassé.

Les liens pointent vers les copies internes du dossier partagé et non vers des chemins dépendant de l'arborescence complète du workspace.

## 4. Contrôle fonctionnel du mini-site

Serveur local utilisé : `http://localhost:8124/`

Contrôles observés depuis la page de contrôle avant PWA :

- chargement du fichier JSON : HTTP 200 ;
- type des données : tableau détecté ;
- volume : 6 objets ;
- schéma : clés et identifiants valides ;
- checklist : 6 cartes détectées ;
- flashcards : 6 cartes détectées ;
- bouton de réessai : présent ;
- menu mobile : bouton présent ;
- débordement horizontal : aucun signalé par le contrôle automatique.

La photo héro de la V2 est celle de l'homme qui monte l'escalier. Elle remplace l'image historique portant la mention « Made with AI » dans cette copie de partage.

Lors du contrôle à 616 px, la photo n'était pas visible car la règle responsive de `.hero-illustration` la masquait sous 768 px. La règle a été corrigée pour afficher l'image sur mobile et tablette, puis la feuille CSS a été versionnée en `styles.css?v=2` afin d'invalider l'ancien cache du service worker. Après rechargement, l'image est chargée et visible avec une zone de 333 × 499 px.

Une seconde correction a rendu l'ouverture directe par double-clic autonome : lorsque l'URL utilise `file://`, le script charge immédiatement les données intégrées au HTML au lieu de dépendre d'un `fetch()` local. Le script est appelé avec `app.js?v=2` pour éviter un ancien cache. Contrôle observé : statut local affiché, 6 cartes chargées et flashcard interactive fonctionnelle.

## 5. Cohérence éditoriale

La V2 distingue désormais explicitement :

- le périmètre éditorial du portfolio, limité aux Modules 1 à 4 ;
- le mini-site historique, qui présente encore la structure globale de la formation et la mention de 15 modules ;
- le Module 5 initialement prévu, annulé ;
- le Module 6, conservé dans les sources mais hors du périmètre de cette version.

Cette distinction évite de présenter le mini-site historique comme l'état complet des contenus retenus pour le portfolio.

## 6. Points restant à relire humainement

- cohérence finale du vocabulaire et des titres ;
- droits des images, citations et ressources externes ;
- éventuelles données personnelles dans les exemples ou les fichiers ;
- validation de la formulation de la co-rédaction avec Yasmina ;
- relecture du dossier par le professeur ;
- test de la copie sur un autre ordinateur avant partage élargi.

## 7. Décision de statut

La V2 est **PRÊTE POUR RELECTURE HUMAINE**.

Elle n'est pas encore déclarée « version finale » et aucune archive ZIP ne doit être créée avant la fin de la relecture complète.
