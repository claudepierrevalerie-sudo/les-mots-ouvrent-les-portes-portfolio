/* ============================================================
   LES MOTS QUI OUVRENT LES PORTES — app.js
   Mini-site V1 — Séance 18
   ============================================================ */
"use strict";

(function () {

  /* ── Menu mobile ───────────────────────────────────────── */
  var burger = document.getElementById('nav-burger');
  var mobileMenu = document.getElementById('nav-mobile');

  if (burger && mobileMenu) {
    burger.addEventListener('click', function () {
      var isOpen = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.classList.toggle('is-open', !isOpen);
    });

    // Fermer avec Échap
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        mobileMenu.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        burger.focus();
      }
    });

    // Fermer en cliquant sur un lien du menu mobile
    var mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function setStatus(message) {
    var status = document.getElementById('data-status');
    if (status) {
      status.textContent = message;
    }
  }

  function getInlineData() {
    var inlineScript = document.getElementById('inline-data');
    if (!inlineScript) {
      return null;
    }

    try {
      var parsed = JSON.parse(inlineScript.textContent || '[]');
      if (Array.isArray(parsed)) {
        return parsed;
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  function isValidItem(item) {
    if (!item || typeof item !== 'object') {
      return false;
    }

    var requiredStringFields = [
      'id',
      'titre',
      'description',
      'categorie',
      'niveau',
      'activite',
      'livrable',
      'question',
      'reponse'
    ];

    for (var i = 0; i < requiredStringFields.length; i += 1) {
      var key = requiredStringFields[i];
      if (typeof item[key] !== 'string' || item[key].trim() === '') {
        return false;
      }
    }

    if (!Array.isArray(item.objectifs)) {
      return false;
    }

    return item.objectifs.every(function (objectif) {
      return typeof objectif === 'string' && objectif.trim() !== '';
    });
  }

  function createChecklistCard(item) {
    var card = document.createElement('article');
    card.className = 'checklist-card';

    var title = document.createElement('h3');
    title.textContent = item.titre;
    card.appendChild(title);

    var meta = document.createElement('p');
    meta.className = 'checklist-meta';
    meta.textContent = 'Catégorie : ' + item.categorie;
    card.appendChild(meta);

    var list = document.createElement('ul');
    list.className = 'checklist-points';

    var pointDescription = document.createElement('li');
    pointDescription.textContent = item.description;
    list.appendChild(pointDescription);

    var pointObjectif = document.createElement('li');
    pointObjectif.textContent = 'Objectif: ' + item.objectifs.join(' ; ');
    list.appendChild(pointObjectif);

    var pointAction = document.createElement('li');
    pointAction.textContent = 'Action: ' + item.activite;
    list.appendChild(pointAction);

    card.appendChild(list);

    return card;
  }

  function createFlashcard(item, index) {
    var card = document.createElement('article');
    card.className = 'flashcard';

    var title = document.createElement('h3');
    title.textContent = 'Carte ' + String(index + 1);
    card.appendChild(title);

    var question = document.createElement('p');
    question.className = 'flashcard-question';
    question.textContent = item.question;
    card.appendChild(question);

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'flashcard-toggle';
    button.setAttribute('aria-expanded', 'false');
    button.textContent = 'Afficher la reponse';
    card.appendChild(button);

    var answer = document.createElement('p');
    answer.className = 'flashcard-answer';
    answer.hidden = true;
    answer.textContent = item.reponse;
    card.appendChild(answer);

    button.addEventListener('click', function () {
      var isOpen = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isOpen));
      button.textContent = isOpen ? 'Afficher la reponse' : 'Masquer la reponse';
      answer.hidden = isOpen;
    });

    return card;
  }

  function renderData(items) {
    var checklistRoot = document.getElementById('checklist-cards');
    var flashcardsRoot = document.getElementById('flashcards-list');

    if (!checklistRoot || !flashcardsRoot) {
      return;
    }

    checklistRoot.textContent = '';
    flashcardsRoot.textContent = '';

    items.forEach(function (item, index) {
      checklistRoot.appendChild(createChecklistCard(item));
      flashcardsRoot.appendChild(createFlashcard(item, index));
    });
  }

  async function loadData() {
    var retryButton = document.getElementById('retry-button');
    if (retryButton) {
      retryButton.hidden = true;
    }

    if (window.location.protocol === 'file:') {
      var localData = getInlineData();
      if (localData && localData.length > 0) {
        renderData(localData);
        setStatus('Mode local: ' + String(localData.length) + ' cartes chargees depuis les donnees integrees.');
        return;
      }
    }

    setStatus('Chargement des cartes...');

    try {
      var response = await fetch('./data/data.json', { cache: 'no-store' });
      if (!response.ok) {
        throw new Error('HTTP ' + String(response.status));
      }

      var data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error('Le fichier JSON doit contenir un tableau.');
      }

      if (data.length === 0) {
        setStatus('Aucune carte a afficher (tableau vide).');
        return;
      }

      var invalidItem = data.find(function (item) {
        return !isValidItem(item);
      });
      if (invalidItem) {
        throw new Error('Au moins un objet ne respecte pas le schema attendu.');
      }

      renderData(data);
      setStatus('');
    } catch (error) {
      var fallbackData = getInlineData();
      if (fallbackData && fallbackData.length > 0) {
        renderData(fallbackData);
        if (window.location.protocol === 'file:') {
          setStatus('Mode local sans serveur: ' + String(fallbackData.length) + ' cartes chargees depuis les donnees integrees.');
        } else {
          setStatus('Mode secours active: ' + String(fallbackData.length) + ' cartes chargees.');
        }
      } else {
        setStatus('Erreur de chargement: ' + error.message);
        if (retryButton) {
          retryButton.hidden = false;
        }
      }
    }
  }

  var retryButton = document.getElementById('retry-button');
  if (retryButton) {
    retryButton.addEventListener('click', function () {
      loadData();
    });
  }

  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) {
      return;
    }

    if (window.location.protocol === 'file:') {
      return;
    }

    navigator.serviceWorker.register('./service-worker.js', { scope: './' }).catch(function (error) {
      console.warn('Service worker non enregistre:', error);
    });
  }

  loadData();
  registerServiceWorker();

})();
