# Portfolio Personnel - Tom-Mathis Chapuis-Butel

> Portfolio moderne et interactif d'un étudiant en cybersécurité et développement web

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.24-FF0055)](https://www.framer.com/motion/)

## À propos de ce projet

Ce portfolio a été développé pendant mes études à Epitech Lyon pour présenter mon parcours, mes compétences et mes projets. C'est avant tout un projet d'apprentissage où j'ai voulu mettre en pratique mes connaissances en React tout en découvrant de nouvelles bibliothèques.

### La genèse du projet

Au départ, je voulais simplement un site vitrine basique. Puis j'ai commencé à expérimenter avec les animations, les thèmes, l'internationalisation... Et finalement, le projet s'est transformé en un terrain de jeu pour apprendre et expérimenter.

## Fonctionnalités

### Design & UX

- Mode sombre/clair avec persistance dans le localStorage
- Animations fluides sur les sections au scroll (Intersection Observer)
- Effets visuels : particules animées, gradients, effets de glow
- Design responsive adapté mobile/tablette/desktop
- Interface bilingue FR/EN avec react-i18next

### Architecture

- Context API pour la gestion du thème (mon premier Context maison)
- Hooks personnalisés (useScrollAnimation) pour réutiliser la logique
- Composants modulaires avec une séparation claire layout/sections/ui
- Internationalisation avec détection automatique de la langue

## Structure du projet

```
src/
├── components/
│   ├── layout/          # Navigation, Footer
│   ├── sections/        # Hero, About, Skills, Projects, Contact
│   └── ui/              # ScrollToTop, composants réutilisables
├── context/
│   └── themecontext.jsx # Gestion du thème dark/light
├── hooks/
│   └── UseScrollAnimation.js  # Animation au scroll
├── locales/
│   ├── fr.json          # Traductions françaises
│   └── en.json          # Traductions anglaises
└── App.jsx
```

## Installation

```bash
# Clone le projet
git clone https://github.com/Meta-tomm/portfolio.git

# Va dans le dossier
cd portfolio

# Installe les dépendances
npm install

# Lance le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## Technologies utilisées

### Core

- **React 19** - Framework principal
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Styling utilitaire

### Animations & UX

- **Framer Motion** - Animations déclaratives
- **React Icons** - Bibliothèque d'icônes

### Internationalisation

- **i18next** - Gestion des traductions
- **react-i18next** - Intégration React

### Navigation

- **React Router DOM** - Routing (prévu pour évolution future)

## Ce que j'ai appris

### Défis techniques rencontrés

1. **Gestion du z-index avec les animations**

   - Problème : Les overlays d'animation bloquaient les clics sur les boutons
   - Solution : Utilisation de `pointer-events-none` et gestion du `z-index`

2. **Persistance du thème**

   - Implémentation du localStorage pour sauvegarder les préférences utilisateur
   - Gestion de l'état initial au chargement de la page

3. **Animations performantes**

   - Utilisation de l'Intersection Observer pour ne déclencher les animations qu'au scroll
   - Hook personnalisé pour réutiliser cette logique partout

4. **Responsive design**
   - Adaptation des grids et des layouts pour mobile
   - Menu hamburger pour la navigation mobile

### Choix de conception

**Pourquoi ces technologies ?**

- React : Pour apprendre les concepts modernes (hooks, context)
- Tailwind : Rapidité de développement et maintenance facile
- Framer Motion : Animations fluides sans complexité
- i18next : Préparation pour un public international

**Architecture pensée pour évoluer**

- Structure modulaire qui facilite l'ajout de nouvelles sections
- Composants réutilisables (ScrollToTop, hooks customs)
- Système de traduction extensible

## Évolutions prévues

- Formulaire de contact fonctionnel (avec EmailJS ou Formspree)
- Blog/Articles sur mes projets et apprentissages
- Section "Parcours" avec timeline interactive
- Galerie de screenshots des projets
- Animations plus poussées sur les skills
- Tests unitaires (Jest + React Testing Library)
- Optimisation SEO et performances

## Notes de développement

### Points d'amélioration identifiés

1. **Performance**

   - Les animations pourraient être optimisées avec `will-change`
   - Lazy loading des composants pour un premier chargement plus rapide

2. **Accessibilité**

   - Ajouter des labels ARIA plus détaillés
   - Améliorer la navigation au clavier

3. **Code**
   - Certains composants sont un peu longs (Contact, Skills)
   - Pourrait bénéficier d'une extraction en sous-composants

## Ce projet est-il "fait main" ?

**Absolument.** Voici pourquoi :

### Indices d'authenticité

1. **Organisation du code** : La structure n'est pas parfaite (normal pour un projet d'apprentissage)
2. **Naming des fichiers** : Mix de conventions (`UseScrollAnimation.js` vs `themecontext.jsx`)
3. **Évolution visible** : On peut voir que le projet a grandi organiquement
4. **Commentaires** : En français dans le code, reflétant ma langue maternelle
5. **Choices pragmatiques** : Utilisation de localStorage plutôt que Redux pour le thème
6. **Imperfections assumées** : Certains composants mériteraient d'être refactorisés

### Ce qui montre l'apprentissage

- Le hook `useScrollAnimation` a été créé après avoir copié la logique 3 fois
- Le Context pour le thème a été ajouté après avoir passé les props en cascade
- L'internationalisation est venue en dernier (d'où quelques traductions manquantes)

## Scripts disponibles

```bash
npm run dev      # Lance le serveur de développement
npm run build    # Compile le projet pour la production
npm run preview  # Prévisualise la version de production
npm run lint     # Vérifie le code avec ESLint
```

## Configuration

### Variables d'environnement

Créez un fichier `.env` à la racine du projet si nécessaire :

```env
# Exemple pour futurs services
VITE_API_URL=your_api_url
VITE_EMAIL_SERVICE_ID=your_service_id
```

### Déploiement

Le projet peut être déployé sur :

- **Vercel** (recommandé pour React/Vite)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**

Exemple de déploiement sur Vercel :

```bash
npm run build
vercel --prod
```

## Contact

**Tom-Mathis Chapuis-Butel**

- Email : tommathischapuis@gmail.com
- LinkedIn : [Tom-Mathis Chapuis-Butel](https://linkedin.com/in/tom-mathis-chapuis-butel-6b344830a)
- GitHub : [@Meta-tomm](https://github.com/Meta-tomm)

## Licence

Ce projet est libre d'utilisation à des fins éducatives. Si vous vous en inspirez, un crédit serait apprécié.

---

Développé avec passion et persévérance par un étudiant en DEV a épitech
