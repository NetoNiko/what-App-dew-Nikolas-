// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyD6OE5byCpJoIprvHTEiX-cTXEM-hEmdzE",
authDomain: "sidhjiowkahiowujiowajskaalk-1.firebaseapp.com",
databaseURL: "https://sidhjiowkahiowujiowajskaalk-1-default-rtdb.firebaseio.com",
projectId: "sidhjiowkahiowujiowajskaalk-1",
storageBucket: "sidhjiowkahiowujiowajskaalk-1.appspot.com",
messagingSenderId: "38766845931",
appId: "1:38766845931:web:871c5bf32917ed8de203ae"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";



function addRoom(){

room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ purpose: "agregar nombre de sala" });

localStorage.setItem("room_name", room_name); 
window.location.replace("kwitter_page.html");


}
function getRoom(){
firebase.database().ref("/").on('value', function (snapshot) {
document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
childKey = childSnapshot.key;
Room_names = childKey;
console.log("Room Name - " + Room_names);
row = "<div class= 'room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
});
});
}
getRoom();
function redirectToRoomName(Room_names) 
{ console.log(Room_names);
localStorage.setItem("room_name", Room_names);
window.location = "kwitter_page.html";



}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}





