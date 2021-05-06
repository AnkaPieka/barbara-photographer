import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCVDaR8JrW50fJVci2M52pGNjeYW7wtim0",
    authDomain: "barbara-photographer.firebaseapp.com",
    projectId: "barbara-photographer",
    storageBucket: "barbara-photographer.appspot.com",
    messagingSenderId: "5073010553",
    appId: "1:5073010553:web:cd9bd5ae18d48b59e739a8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  // const timestamp = firebase.timestamp();

  export { projectStorage, projectFirestore };