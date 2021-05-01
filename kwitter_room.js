
 var firebaseConfig = {
      apiKey: "AIzaSyA5nfrEsYRmCvNx156ZQ28bY7MBa0NYj3k",
      authDomain: "kwitter-18a15.firebaseapp.com",
      databaseURL: "https://kwitter-18a15-default-rtdb.firebaseio.com",
      projectId: "kwitter-18a15",
      storageBucket: "kwitter-18a15.appspot.com",
      messagingSenderId: "218704525863",
      appId: "1:218704525863:web:f2bfa390a9aa4064d6ec02"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name - " + Room_names);
row = "<div class='room_name' id=" + Room_names + " onclick='redircttoroomname(this.id)'>" + Room_names + "</div> <hr>"
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redircttoroomname(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location = "index.html";
}

user_name = localStorage.getItem("user_name"); 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update( {
            purpose: "Adding roomname"
      })
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html";
}