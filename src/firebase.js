import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDrphd1IKAbP4dTMjzLIG0A2CK_3CpNhYw",
    authDomain: "linkedin-clone-98c33.firebaseapp.com",
    projectId: "linkedin-clone-98c33",
    storageBucket: "linkedin-clone-98c33.appspot.com",
    messagingSenderId: "638343931174",
    appId: "1:638343931174:web:fdcfdd3c8ebfa55762cde7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth};