import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD7WlImnQQuav3eerNETchIotivU9kxTDQ",
    authDomain: "tepuy-radio.firebaseapp.com",
    projectId: "tepuy-radio",
    storageBucket: "tepuy-radio.appspot.com",
    messagingSenderId: "719117857442",
    appId: "1:719117857442:web:2acdbe370e3c45f386ddfb",
    measurementId: "G-N1ZVXCEERE"
  };

  export default firebase.initializeApp(firebaseConfig);
  export default firebase.analytics();