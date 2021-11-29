var firebaseConfig = {
    apiKey: "AIzaSyD5pFidvbKauXXCEcRoThrGyNCRDEFhurs",
    authDomain: "kwitter-8658b.firebaseapp.com",
    databaseURL: "https://kwitter-8658b-default-rtdb.firebaseio.com",
    projectId: "kwitter-8658b",
    storageBucket: "kwitter-8658b.appspot.com",
    messagingSenderId: "46070003148",
    appId: "1:46070003148:web:ba9f67191004e220ebd969"
  };

  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function adduser(){
    user_name= document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding your favourite colour"
    });
}