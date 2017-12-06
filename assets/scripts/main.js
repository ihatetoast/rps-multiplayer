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
  
  //database variables (connections, presence, refs ...)
  const database = firebase.database();
  const chatlog = database.ref('chatlog');//the node for chats
  const connections = database.ref('connections');//the node for connections 
  

  /*
  keep this all about functions and evt listeners?
  make a game object and chat object and use just metho
  */

  /*need variables for what we will keep:
    current user
    generic players 1 and 2? one of these will be set to the user
    chat dialogue. will it be kept? will it just replace the previous statement
    if it replaces the previous statement, maybe keep as an array of one if not just a string.
    push messages into chat array and prepend to dom elem if we want to keep it going. 
  */
/* player to be an object with play/throw/option whatever he she chooses
  player will have a name, a throw/hand and will have a tally of wins and losses
*/

/* functions to think about (may be just conditionals)
  figuring out who won (typical rps rules)
  changing the score/tallies of the players
  seeing if both players have played
*/

/* events
  players' choices
  but player logging in. is that a firebase thing? return to this after class
  also return to the firebase tutorial
*/
    //a fcn that is (so far) no more than an onclick to capture the data-play
  $(".plays").on("click", function(){
    let play = $(this).data("play");
    console.log(play);
  })

});