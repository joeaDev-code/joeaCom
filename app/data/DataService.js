
import React from 'react';

// Import des images ou icônes

// Image de description
import IMG_STATREGY from "../assets/icons/marketing.png";
import IMG_MEDIA from "../assets/icons/social-media.png";
import IMG_WEB from "../assets/icons/web.png";
import IMG_PALETTE from "../assets/icons/palett.png";
import IMG_SEO from "../assets/icons/seo.png";

// Images de Bannière
import BANNER_STATREGY from "../assets/images/marketing-banner.jpg";
import BANNER_MEDIA from "../assets/images/social-media-banner.jpg";
import BANNER_WEB from "../assets/images/web-banner.jpg";
import BANNER_PALETTE from "../assets/images/infograph-banner.jpg";

// Données des services
export const DataService = [
  {
    imageDesc: IMG_STATREGY,
    imageBanner: BANNER_STATREGY,
    id: 1,
    title: "Strategie Marketing Digital",
    subtitle: "Boostez votre présence en ligne avec des stratégies personnalisées.",
    description: "Propulsez votre marque dans le numérique avec des stratégies de marketing digital adaptées. Nous offrons des campagnes ciblées, une analyse des données approfondie, et une optimisation en temps réel pour maximiser votre retour sur investissement.",
    features: [
      {
        title: "Campagnes publicitaires",
        content: "Nous créons des campagnes publicitaires efficaces sur Google Ads, Facebook Ads, et Instagram Ads, optimisées selon les données pour maximiser votre retour sur investissement."
      },
      {
        title: "Analyse de performance",
        content: "Nous analysons les indicateurs clés de performance (KPI) pour fournir des rapports détaillés, permettant une optimisation continue de vos stratégies marketing."
      },
      {
        title: "Stratégies de contenu et marketing par email",
        content: "Création de contenu engageant et campagnes d'emailing personnalisées pour rester en contact avec votre audience et améliorer vos taux de conversion."
      },
      {
        title: "Publicité PPC et retargeting",
        content: "Générez un trafic ciblé avec la publicité PPC et recapturez l'attention des visiteurs grâce au retargeting pour augmenter les conversions."
      }
    ],
    pricing: [
      {
        category: "Basique",
        price: "200 000 FCFA",
        details: "Campagne publicitaire simple sur une seule plateforme avec suivi de base des performances."
      },
      {
        category: "Intermédiaire",
        price: "400 000 FCFA",
        details: "Campagne multi-plateformes avec analyse approfondie des performances et optimisation des annonces."
      },
      {
        category: "Avancé",
        price: "700 000 FCFA",
        details: "Campagne complète avec création de contenu, retargeting, analyse détaillée et stratégies d'emailing intégrées."
      }
    ],
    testimonials: [
      {
        client: "Jean Dupont",
        feedback: "Grâce à leur stratégie de marketing digital, notre trafic en ligne a augmenté de 50% en seulement trois mois!"
      },
      {
        client: "Aïssata Traoré",
        feedback: "Leur équipe est très professionnelle et les résultats sont au rendez-vous. Nous sommes très satisfaits de leur travail."
      }
    ]
  },
  {
    imageDesc: IMG_MEDIA,
    imageBanner: BANNER_MEDIA,
    id: 2,
    title: "Gestion des Réseaux Sociaux",
    subtitle: "Développez votre marque avec une gestion experte de vos réseaux sociaux.",
    description: "Optimisez votre présence en ligne avec une gestion professionnelle de vos réseaux sociaux. Nous créons du contenu engageant, gérons les interactions, et analysons les performances pour construire une communauté active autour de votre marque.",
    features: [
      {
        title: "Création de contenu",
        content: "Conception de publications attrayantes et pertinentes pour chaque plateforme afin de maximiser l'engagement et la portée."
      },
      {
        title: "Gestion des interactions",
        content: "Surveillance et réponse proactive aux commentaires et messages pour renforcer la relation avec votre audience."
      },
      {
        title: "Analyse des performances",
        content: "Suivi des métriques clés comme l'engagement et la croissance des abonnés pour ajuster les stratégies et améliorer les résultats."
      },
      {
        title: "Stratégies d'engagement",
        content: "Élaboration de stratégies pour encourager l'interaction et la participation, y compris des concours et sondages."
      }
    ],
    pricing: [
      {
        category: "Basique",
        price: "150 000 FCFA",
        details: "Gestion de deux réseaux sociaux avec publication régulière et réponse aux commentaires."
      },
      {
        category: "Intermédiaire",
        price: "300 000 FCFA",
        details: "Gestion de quatre réseaux sociaux, création de contenu spécifique et analyse des performances."
      },
      {
        category: "Avancé",
        price: "500 000 FCFA",
        details: "Gestion complète de réseaux sociaux avec création de contenu, gestion des interactions, analyses approfondies et stratégies d'engagement."
      }
    ],
    testimonials: [
      {
        client: "Mohamed Keita",
        feedback: "Notre engagement sur les réseaux sociaux a explosé grâce à leur gestion. Les résultats parlent d'eux-mêmes."
      },
      {
        client: "Fatou Bamba",
        feedback: "Ils ont transformé notre présence en ligne et nous avons vu une augmentation significative de notre base d'abonnés."
      }
    ]
  },
  {
    imageDesc: IMG_WEB,
    imageBanner: BANNER_WEB,
    id: 3,
    title: "Conception de Sites Web",
    subtitle: "Créez un site web captivant qui attire et convertit vos visiteurs.",
    description: "Nous concevons des sites web modernes, sécurisés et à la pointe de la technologie, avec une expérience utilisateur fluide. Notre service inclut la conception responsive, le développement front-end et back-end, ainsi que l'intégration CMS et l'optimisation des performances.",
    features: [
      {
        title: "Design moderne et sécurisé",
        content: "Nos sites sont construits avec un design à la pointe de la technologie, intégrant les dernières mises à jour et sécurités, testés contre les tentatives de hacking."
      },
      {
        title: "Performance et vitesse optimisées",
        content: "Optimisation des temps de chargement et des performances pour une expérience de navigation fluide et rapide."
      },
      {
        title: "Conception responsive",
        content: "Sites web adaptés à tous les types d'écrans pour offrir une expérience utilisateur optimale sur mobiles, tablettes et ordinateurs."
      },
      {
        title: "Fonctionnalités personnalisées",
        content: "Intégration de fonctionnalités spécifiques, telles que les galeries photos, formulaires de contact, blogs, et bien plus encore, selon vos besoins."
      },
      {
        title: "Gestion de contenu facile",
        content: "Intégration de CMS comme WordPress pour une gestion simplifiée du contenu, permettant des mises à jour faciles sans compétences techniques avancées."
      }
    ],
    pricing: [
      {
        category: "Basique",
        price: "300 000 FCFA",
        details: "Conception d'un site vitrine simple (one-page ou multi-pages) avec contenu statique non modifiable, interface responsive, hébergement offert et nom de domaine inclus."
      },
      {
        category: "Intermédiaire",
        price: "600 000 FCFA",
        details: "Création de sites vitrines plus avancés ou e-commerce de base avec fonctionnalités modifiables, développement front-end et back-end, optimisation de la vitesse, hébergement et nom de domaine inclus."
      },
      {
        category: "Avancé",
        price: "1 000 000 FCFA",
        details: "Développement complet de sites e-commerce ou vitrines personnalisés avec design sur mesure, fonctionnalités avancées, intégration CMS, et optimisation complète des performances et de la sécurité. Hébergement et nom de domaine inclus."
      }
    ],
    testimonials: [
      {
        client: "Kouadio N'Guessan",
        feedback: "Leur conception de site web est vraiment exceptionnelle. Mon site a reçu de nombreux compliments pour son design moderne."
      },
      {
        client: "Mariam Koné",
        feedback: "J'ai été impressionnée par la sécurité et la rapidité de mon nouveau site. Ils ont vraiment su répondre à mes besoins."
      }
    ]
  },
  {
    imageDesc: IMG_PALETTE,
    imageBanner: BANNER_PALETTE,
    id: 4,
    title: "Design & Infographie",
    subtitle: "Faites ressortir votre marque avec des designs uniques et captivants.",
    description: "Création de visuels percutants pour renforcer l'identité de votre marque. Nous concevons des logos, brochures, affiches, et autres supports de communication pour vous aider à vous démarquer.",
    features: [
      {
        title: "Création de logo",
        content: "Conception d'un logo unique et mémorable qui représente parfaitement votre marque."
      },
      {
        title: "Brochures et affiches",
        content: "Design de brochures et affiches attractives pour promouvoir vos produits ou événements."
      },
      {
        title: "Supports de communication",
        content: "Création de supports variés comme des cartes de visite, flyers, et infographies pour renforcer votre communication visuelle."
      },
      {
        title: "Charte graphique",
        content: "Élaboration d'une charte graphique cohérente pour garantir une identité visuelle forte et harmonieuse sur tous vos supports."
      },
      {
        title: "Illustrations personnalisées",
        content: "Réalisation d'illustrations sur mesure pour apporter une touche unique et artistique à vos projets."
      }
    ],
    pricing: [
      {
        category: "Basique",
        price: "150 000 FCFA",
        details: "Création d'un logo simple avec trois propositions, une charte graphique de base, et supports de communication simples."
      },
      {
        category: "Intermédiaire",
        price: "300 000 FCFA",
        details: "Création de logo, charte graphique complète, supports variés (brochures, affiches), et illustrations simples."
      },
      {
        category: "Avancé",
        price: "600 000 FCFA",
        details: "Création complète de l'identité visuelle incluant logo, charte graphique détaillée, supports de communication avancés, et illustrations personnalisées."
      }
    ],
    testimonials: [
      {
        client: "Samuel Dembélé",
        feedback: "Leur créativité est incroyable. Mon nouveau logo et mes supports de communication sont magnifiques et professionnels."
      },
      {
        client: "Nadia Diabaté",
        feedback: "J'ai adoré travailler avec eux. Ils ont vraiment capté l'essence de ma marque et l'ont transformée en visuels exceptionnels."
      }
    ]
  },
  {
    imageDesc: IMG_SEO,
    imageBanner: null,
    id: 5,
    title: "SEO & Référencement",
    subtitle: "Améliorez votre visibilité sur les moteurs de recherche.",
    description: "Optimisez votre site web pour les moteurs de recherche avec notre service de référencement SEO. Nous améliorons votre classement Google grâce à des stratégies de contenu, de mots-clés, et d'optimisation technique, afin d'attirer plus de visiteurs qualifiés.",
    features: [
      {
        title: "Audit SEO complet",
        content: "Analyse complète de votre site web pour identifier les points à améliorer et les opportunités SEO."
      },
      {
        title: "Recherche de mots-clés",
        content: "Identification des mots-clés pertinents pour votre activité afin d'améliorer votre visibilité dans les résultats de recherche."
      },
      {
        title: "Optimisation on-page et off-page",
        content: "Optimisation des éléments internes et externes de votre site web pour améliorer son référencement naturel."
      },
      {
        title: "Création de contenu optimisé",
        content: "Rédaction de contenu pertinent et optimisé pour le SEO, attirant à la fois les utilisateurs et les moteurs de recherche."
      },
      {
        title: "Suivi et analyse des performances",
        content: "Rapports réguliers sur les performances SEO de votre site, avec des recommandations pour une amélioration continue."
      }
    ],
    pricing: [
      {
        category: "Basique",
        price: "200 000 FCFA",
        details: "Audit SEO simple et recherche de mots-clés pour un site vitrine ou blog."
      },
      {
        category: "Intermédiaire",
        price: "400 000 FCFA",
        details: "Audit SEO complet, optimisation on-page pour plusieurs pages, et suivi des performances."
      },
      {
        category: "Avancé",
        price: "800 000 FCFA",
        details: "Service SEO complet incluant audit, optimisation on-page et off-page, création de contenu optimisé, et analyse continue des performances."
      }
    ],
    testimonials: [
      {
        client: "Pierre Yao",
        feedback: "Mon site a grimpé dans les résultats de Google en un temps record grâce à leur expertise en SEO."
      },
      {
        client: "Fatim Diop",
        feedback: "Leur approche est très professionnelle et les résultats sont là. Je recommande vivement leur service SEO."
      }
    ]
  }
];

  
