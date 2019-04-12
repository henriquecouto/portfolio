import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyC349RJ7KIEGe9n6Dnr4ydU6Ko1snh6Ewc",
  authDomain: "portfolio-1c71d.firebaseapp.com",
  databaseURL: "https://portfolio-1c71d.firebaseio.com",
  projectId: "portfolio-1c71d",
  storageBucket: "portfolio-1c71d.appspot.com",
  messagingSenderId: "268940768878"
};

firebase.initializeApp(config);

export const fs = firebase.firestore();
