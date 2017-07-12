import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBgm5lKWPsHc3Rzjh1cccMlgj-qcs4W_SA",
    authDomain: "react-native-lecture5.firebaseapp.com",
    databaseURL: "https://react-native-lecture5.firebaseio.com",
    projectId: "react-native-lecture5",
    storageBucket: "react-native-lecture5.appspot.com",
    messagingSenderId: "801330814383"
  };
firebase.initializeApp(config);

export default firebase;