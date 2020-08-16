import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCXdQ2r6sf-MIxhS5KpkzZCp-c8EVOPFfc",
    authDomain: "eventos-a420a.firebaseapp.com",
    databaseURL: "https://eventos-a420a.firebaseio.com",
    projectId: "eventos-a420a",
    storageBucket: "eventos-a420a.appspot.com",
    messagingSenderId: "392551767537",
    appId: "1:392551767537:web:8556b4c609d42897503850"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);