// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAk_gg7lHoMJdVlisKbiUdJ35idJDg-P9s",
  authDomain: "social-e5855.firebaseapp.com",
  databaseURL: "https://social-e5855-default-rtdb.firebaseio.com",
  projectID: "social-e5855",
  storageBucket: "social-e5855.appspot.com",
  messagingSenderId: "671543009162",
  appId: "1:671543009162:web:a881fdddf02bf05c08b273"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
  firebase.database().ref("/").on('value',
    function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
        //End code
      });
    });
}
getData();

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });