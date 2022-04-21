// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAkMDTZ0HrXl-s4nUMyhum7AC1Kho-CopE",
      authDomain: "kwitter-ac6bf.firebaseapp.com",
      databaseURL: "https://kwitter-ac6bf-default-rtdb.firebaseio.com",
      projectId: "kwitter-ac6bf",
      storageBucket: "kwitter-ac6bf.appspot.com",
      messagingSenderId: "117230222046",
      appId: "1:117230222046:web:aa07979821af023265604f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding user_name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("room_name -" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();


function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";

}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}