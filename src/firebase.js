import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDaxg0X0ahU9DSDWnxrS51zzjhEweN0GNc",
    authDomain: "clone-9a4f5.firebaseapp.com",
    databaseURL: "https://clone-9a4f5.firebaseio.com",
    projectId: "clone-9a4f5",
    storageBucket: "clone-9a4f5.appspot.com",
    messagingSenderId: "202707262435",
    appId: "1:202707262435:web:2e7bab0e24b567151b1ed6",
    measurementId: "G-P5C541P6NV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };