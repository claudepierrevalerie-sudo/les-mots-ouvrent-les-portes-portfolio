# Preuve 24 — README, contrôle et preuve globale du Module 06

**Date :** 2026-08-28  
**Module :** 06  
**Séance :** 24 — Produire, contrôler et prouver  
**Projet :** Les mots ouvrent les portes  
**Statut :** prêt pour validation humaine

## 1. Objectif

Appliquer le workflow du Module 06 à une modification réelle, utile et limitée : actualiser le README du mini-site afin qu'il reflète la publication GitHub Pages existante.

## 2. Périmètre

- `mini-site-challenge-100-jours/README.md` : seul fichier modifié ;
- `mini-site-challenge-100-jours/` : dépôt Git local contrôlé ;
- publication publique : `https://claudepierrevalerie-sudo.github.io/mini-site-challenge-100-jours/` ;
- workflow associé : `06-workflows/workflow-production-seance-24-readme-v1.md`.

Les fichiers de code, les ressources, les données, le manifeste, le service worker et les versions sources n'ont pas été modifiés.

## 3. Modification réalisée

Le README indique désormais :

- que la PWA statique est publiée sur GitHub Pages ;
- que l'URL publique est accessible ;
- que la validation pédagogique et la confirmation finale des preuves relèvent du pilote humain ;
- que le chemin de lancement local correspond au dossier réel du dépôt ;
- que la correspondance entre la version locale et la version publique doit être recontrôlée après toute modification.

## 4. Contrôles et résultats observés

- lecture du README avant modification : exécutée ;
- contrôle du dépôt Git : exécuté ;
- branche observée : `main` ;
- remote `origin` observé : dépôt GitHub du mini-site ;
- historique local observé : dernier commit `69e50b5 Initial publication-ready mini-site` ;
- URL GitHub Pages ouverte : exécutée ;
- contenu principal de la page publique retrouvé : exécuté ;
- contrôle `git diff --check` : réussi ;
- fichiers modifiés dans le dépôt : `README.md` uniquement.

## 5. Actions non exécutées

- aucun commit nouveau ;
- aucun push ;
- aucune Pull Request ;
- aucune review ou fusion ;
- aucune nouvelle publication ;
- aucune modification de la configuration GitHub Pages.

## 6. Preuves reliées du Module 06

- Séance 21 : `07-portfolio/01-challenge-100-jours/preuve-21-organisation.md` ;
- Séance 23 : `seance 23/23-rapport-preuve-seance-23.md` ;
- Séance 24 : le présent document ;
- Workflow S24 : `06-workflows/workflow-production-seance-24-readme-v1.md` ;
- Publication publique : URL GitHub Pages indiquée au point 2.

La preuve autonome de la séance 22 est conservée dans `seance 22/22-D-rapport-seance-22-resultat.md`. Une version HTML existe également dans `seance 22/22-D-rapport-seance-22-resultat.html`.

## 7. Présentation orale proposée — trois minutes

J'ai appliqué le workflow du Module 06 à un mini-site de formation sur l'expression orale. Le problème traité était documentaire : le README indiquait encore que la publication n'avait pas été effectuée, alors que le site était accessible sur GitHub Pages. J'ai d'abord contrôlé le fichier, le dépôt local, la branche, le remote et l'historique. J'ai ensuite modifié uniquement le README pour corriger le statut, ajouter l'URL publique et préciser les limites de validation. J'ai relu le diff et exécuté `git diff --check`. Le résultat est contrôlé localement et la page publique est accessible. Aucun commit, push ou nouvelle publication n'a été exécuté. La validation finale reste une décision humaine.

## 8. Décision humaine

À compléter :

- [ ] README relu et approuvé ;
- [ ] preuve 24 relue et approuvée ;
- [ ] dossier global des preuves complété ;
- [ ] séance 24 validée par le pilote humain.

**Statut exact :** PRÊT POUR VALIDATION HUMAINE — NON VALIDÉ.
