(function() {
     // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAHJiuTUq7T1dOkweND-1YYTfBiKnvJ84g",
    authDomain: "dbrol-34ad3.firebaseapp.com",
    databaseURL: "https://dbrol-34ad3.firebaseio.com",
    projectId: "dbrol-34ad3",
    storageBucket: "dbrol-34ad3.appspot.com",
    messagingSenderId: "286518375877"
  };
  firebase.initializeApp(config);

  const preObject = document.getElementById ('objeto');

const dbRefObjet = firebase.database().ref().child ('objeto');

dbRefObjet.on ('value', snap => {
preObject.innerText = JSON.stringify(snap.val(), null, 3);
});

} () );



