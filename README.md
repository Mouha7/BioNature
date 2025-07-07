# 🌿 BioNature - E-commerce de Fruits Tropicaux Bio

[![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-6.0+-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)

[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)](https://github.com/votre-username/bionature)
[![Deployment](https://img.shields.io/badge/Deployment-Vercel-black?style=for-the-badge&logo=vercel)](https://bionature-demo.vercel.app)

## 📋 Description

**BioNature** est une plateforme e-commerce moderne dédiée à la vente de fruits tropicaux biologiques et de jus naturels du Sénégal. L'application met en avant l'authenticité, la durabilité et l'impact positif sur les communautés locales sénégalaises.

### ✨ Fonctionnalités Principales

- 🛒 **Catalogue de produits** avec système de filtrage avancé
- 🔍 **Recherche dynamique** et tri des produits
- 🛍️ **Panier d'achat interactif** avec gestion des quantités
- 👤 **Authentification utilisateur** (connexion/inscription)
- 📧 **Notifications email** via EmailJS pour les confirmations de commande
- 📱 **Design responsive** optimisé pour tous les appareils
- 🎨 **Interface moderne** avec Tailwind CSS
- 🔒 **Récupération de mot de passe** sécurisée
- 📄 **Pages institutionnelles** (Histoire, Missions, Engagements)
- 📚 **Information détaillée** sur les fruits tropicaux

## 🚀 Technologies Utilisées

### Frontend

- **React 18** - Bibliothèque UI moderne
- **TypeScript** - Typage statique pour plus de robustesse
- **Vite** - Outil de build ultra-rapide
- **React Router DOM** - Navigation côté client
- **Tailwind CSS** - Framework CSS utilitaire

### Services & Intégrations

- **EmailJS** - Service d'envoi d'emails
- **Shadcn/ui** - Composants UI réutilisables
- **Lucide React** - Icônes modernes

### Outils de Développement

- **ESLint** - Linting du code
- **PostCSS** - Traitement CSS
- **Autoprefixer** - Préfixes CSS automatiques

## 📁 Structure du Projet

```
src/
├── components/           # Composants réutilisables
├── constants/           # Données statiques (fruits, jus, histoire)
├── views/              # Pages principales
│   ├── components/     # Composants spécifiques aux vues
│   ├── HomeView.tsx    # Page d'accueil
│   ├── JusView.tsx     # Catalogue des produits
│   ├── CartView.tsx    # Panier d'achat
│   ├── LoginView.tsx   # Authentification
│   └── ...
├── assets/             # Images et ressources statiques
└── styles/             # Fichiers CSS
```

## 🛠️ Installation et Configuration

### Prérequis

- **Node.js** (version 16 ou supérieure)
- **npm** ou **yarn**

### Installation

1. **Cloner le repository**

```bash
git clone https://github.com/votre-username/bionature.git
cd bionature
```

2. **Installer les dépendances**

```bash
npm install
# ou
yarn install
```

3. **Configuration EmailJS**

Créez un fichier `.env` à la racine du projet :

```env
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_public_key
```

4. **Lancer le serveur de développement**

```bash
npm run dev
# ou
yarn dev
```

L'application sera accessible sur `http://localhost:5173`

## 🏗️ Scripts Disponibles

```bash
# Développement
npm run dev          # Lance le serveur de développement

# Build
npm run build        # Compile l'application pour la production
npm run preview      # Prévisualise le build de production

# Linting
npm run lint         # Vérifie le code avec ESLint
```

## 🎨 Design System

### Palette de Couleurs

- **Primaire** : `#fefae0` (bio)
- **Contraste** : `#543515` (bio-contraste)
- **Accents** : Nuances naturelles et organiques

### Typographie

- **Police principale** : Roboto (Google Fonts)
- **Hiérarchie** : Système de tailles responsive

## 📱 Responsive Design

L'application est entièrement responsive avec des points de rupture optimisés :

- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : > 1024px

## 🚀 Déploiement

### Vercel (Recommandé)

1. Push votre code sur GitHub
2. Connectez votre repository à Vercel
3. Ajoutez vos variables d'environnement
4. Déployez automatiquement

### Build Manual

```bash
npm run build
# Les fichiers de production sont dans le dossier `dist/`
```

## 🌍 Fonctionnalités Régionales

- **Localisation Sénégal** - Contenu adapté au marché sénégalais
- **Monnaie FCFA** - Prix affichés en Francs CFA
- **Fruits locaux** - Mangue, ananas, bissap, citron, etc.
- **Producteurs locaux** - Mise en avant des partenaires sénégalais

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📞 Contact

**BioNature Team**

- 📧 Email : <seydina.mrs@gmail.com>
- 📱 Téléphone : (221) 78 459 05 36
- 🌐 Site web : [bionature-demo.vercel.app](https://bio-nature.vercel.app)

## 🙏 Remerciements

- Communauté React pour les outils exceptionnels
- Producteurs sénégalais partenaires
- Équipe de développement SMRS

---

<div align="center">
  <img src="/assets/logo.png" alt="BioNature Logo" width="100"/>
  <br>
  *🌿 Naturellement Sénégalais, Naturellement Bio 🌿*
</div>
