$(document).ready(function(){
console.log("did you see this?");

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCEMB02cu_5VlIO0TQvxGPcOSjI3YCdScQ",
    authDomain: "ihatetoast-rps-game.firebaseapp.com",
    databaseURL: "https://ihatetoast-rps-game.firebaseio.com",
    projectId: "ihatetoast-rps-game",
    storageBucket: "ihatetoast-rps-game.appspot.com",
    messagingSenderId: "712858402970"
  };
  firebase.initializeApp(config);

  $(".plays").on("click", function(){
    let play = $(this).data("play");
    console.log(play);
  })

});