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
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push(
            {
                  name:user_name, 
                  message: msg,
                  like:0
            }
      ); 
      document.getElementById("msg").value = ""
}