import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD_GmzKtNqPkJEhRqAfO1oLzHaP4CAFrFQ',
  authDomain: 'linkedin-clone-96dad.firebaseapp.com',
  projectId: 'linkedin-clone-96dad',
  storageBucket: 'linkedin-clone-96dad.appspot.com',
  messagingSenderId: '771906766241',
  appId: '1:771906766241:web:1afc844933d6e192d777e0',
};

const firebaseApp = firebase.initializeApp(firebaseconfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
