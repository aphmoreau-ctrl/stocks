# Stocks, version 1.0.2

Application de justesse des stocks et de suivi de la démarque des rayons frais.

## Ce que fait la V1

- Scan des codes-barres (EAN, UPC, Code 128) avec la caméra de l'iPhone ou de l'iPad, et décodage des étiquettes à poids ou prix variable des balances (réglable).
- Recherche par nom ou code PLU pour le vrac sans code-barres, et accès rapide aux produits les plus démarqués.
- Fiches produits créées au premier scan, avec tous les champs prévus pour les versions suivantes (unités, conversions, prix, rendement, tolérance, paramètres de commande, niveau de suivi 0 à 5).
- Saisie de la démarque connue par motif, des dons et des retours fournisseurs. Seule la marchandise sortie sans être vendue est enregistrée : les remises n'ont pas leur place ici.
- Journal complet : rien n'est jamais effacé, une annulation ajoute une ligne.
- Tableau de bord par période, rayon, motif et produit ; montants masquables.
- Rayons et motifs paramétrables, export JSON et CSV, import.
- Fonctionne hors connexion (chambre froide) et se synchronise au retour du réseau.

## Mise en ligne

1. Sur GitHub, crée un dépôt « stocks » et dépose-y tous les fichiers (en gardant le dossier « icons »).
2. Settings > Pages : source « Deploy from a branch », branche « main », dossier « / (root) ».
3. Ouvre l'adresse obtenue (https://ton-compte.github.io/stocks/) : l'appli démarre en mode local, pour essayer tout de suite.

## Synchronisation iPhone, iPad et ordinateur

1. Dans firebase-config.js, remplace `firebase: null` par la configuration du projet « rayons-frais » (la même que celle de « Rayons frais »).
2. Dans la console Firebase, Firestore > Règles : AJOUTE le bloc du fichier « regles-firestore-a-ajouter.txt » à tes règles existantes, sans les remplacer, puis publie.
3. Authentication > Paramètres > Domaines autorisés : vérifie que ton domaine github.io y figure (c'est déjà le cas s'il sert pour « Rayons frais »).
4. Connecte-toi avec le même compte que « Rayons frais ».

Pour reprendre des essais faits en mode local : Réglages > Exporter tout (JSON) avant de brancher Firebase, puis Réglages > Importer après la connexion.

## Installation sur l'iPhone et l'iPad

Ouvre l'adresse dans Safari, bouton Partager, « Sur l'écran d'accueil ». Au premier scan, autorise l'accès à la caméra.

## À vérifier sur place

- Le format des étiquettes des balances du magasin : Réglages > Étiquettes à poids ou prix variable, avec le champ de test.
- La lecture des codes dans les conditions réelles (lumière, étiquettes humides ou froissées).

## Versions prévues

1. Catalogue et démarque (cette version)
2. Contrôles ponctuels : tirage du jour, comptages, ventes reportées, démarque inconnue
3. Réceptions : contrôle au quai et rapprochement commande, livraison, reçu réel, saisie système
4. Fiabilisation : surveillance renforcée, diagnostic des causes, indicateurs, lien avec « Rayons frais »
5. Transformations et cessions entre rayons
6. Commandes : calcul, évaluation, ajustement des paramètres
