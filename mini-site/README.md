# Mini-site V2 PWA — Les mots qui ouvrent les portes

Statut: PWA statique publiee sur GitHub Pages, a controler et valider humainement.
Date: 2026-08-28.

## Publication

Version publique controlee :

https://claudepierrevalerie-sudo.github.io/mini-site-challenge-100-jours/

La publication est accessible. Sa validation pedagogique et la confirmation
finale des preuves restent du ressort du pilote humain.

## Objectif

Mini-site de formation a l'expression orale, avec chargement JSON, rendu dynamique des cartes/flashcards, et socle PWA statique (manifest + service worker + page hors connexion).

## Structure

```text
mini-site-v2/
	index.html
	offline.html
	manifest.webmanifest
	service-worker.js
	controle-avant-pwa.html
	css/
		styles.css
	js/
		app.js
	data/
		data.json
	assets/
		icons/
			icon-192.png
			icon-512.png
		images/
			hero-photo.png
			canva/
				1.png ... 9.png
```

## Composants PWA

- manifest.webmanifest: start_url "./", scope "./", theme_color, icones 192/512.
- service-worker.js: precache statique versionne et fallback offline pour navigation.
- offline.html: page de secours quand le reseau est indisponible.

## Lancement local

Depuis le dossier `mini-site-challenge-100-jours`:

```powershell
python -m http.server 8080
```

Puis ouvrir:

- http://localhost:8080/index.html
- http://localhost:8080/controle-avant-pwa.html

## Verification recommandee

1. Application > Manifest: verifier nom, start_url, scope, icones.
2. Application > Service Workers: verifier enregistrement actif.
3. Application > Cache Storage: verifier le cache motsportes-pwa-static-v1.
4. Network > Offline: verifier le comportement hors connexion sur une route inexistante.
5. Verifier clavier (menu burger + flashcards) et responsive (320/390/768/1280).

## Limites connues

- La correspondance entre chaque version locale et la version publique doit etre
	recontrolee apres toute modification.
- Le hors connexion doit etre valide manuellement dans le navigateur cible.
