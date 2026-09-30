// Configuration de Stocks.
// 1. Colle dans « firebase » la configuration du projet Firebase « rayons-frais »
//    (Console Firebase > Paramètres du projet > Général > Vos applications > Configuration).
//    C'est la même que celle de l'appli « Rayons frais » : même projet, même compte de connexion.
// 2. Tant que « firebase » vaut null, l'application fonctionne en mode local :
//    les données restent sur l'appareil (utile pour essayer avant de brancher la synchronisation).
window.STOCKS_CONFIG = {
  magasinId: 'la-vaugine',
  magasinNom: 'Intermarché La Vaugine',
  firebase: null
  // firebase: {
  //   apiKey: "…",
  //   authDomain: "rayons-frais.firebaseapp.com",
  //   projectId: "rayons-frais",
  //   storageBucket: "…",
  //   messagingSenderId: "…",
  //   appId: "…"
  // }
};
