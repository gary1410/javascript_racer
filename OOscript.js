$(document).ready(function() {

  gary = new Player ("Gary");
  greg = new Player ("Greg");
  new_game = new Game (gary, greg, 20);

  new_game.rendertrack();
  $(document).keyup(function (event){
    new_game.pressKey(event);
    new_game.rendertrack();
  });

});

// make constructor functions
function Player(name) {
  this.name = name;
  this.position = 1;

  //this works too
  // this.advancePosition = function() {
  //   this.position += 1;
  // }
}

//prototype = extending player
Player.prototype.advancePosition = function(){
  this.position += 1;
}

function Game(player1, player2, tracklength) {
  this.player1 = player1;
  this.player2 = player2;
  this.winner = null;
  this.tracklength = tracklength;

  this.rendertrack = function(){
    $("#player1_strip").empty();
    $("#player2_strip").empty();

    for (var i = 0; i < this.tracklength ; i ++){
      $('#player1_strip').append("<td></td>")
      $('#player2_strip').append("<td></td>");
    }

    $("#player1_strip td:nth-child("+ this.player1.position +")").attr("class", "active")
    $("#player2_strip td:nth-child("+ this.player2.position +")").attr("class", "active")
  }

  this.pressKey = function(event){
    if (event.keyCode == 81){
      console.log('player 1 pressed');
      this.player1.advancePosition();
    }
    else if (event.keyCode == 80){    
      console.log('player 2 pressed');
      this.player2.advancePosition();
    }

    if (this.player1.position === this.tracklength){
      alert("" + this.player1 + " is the winner");
    }

    if (this.player2.position === this.tracklength){
      alert("" + this.player2 + " is the winner");
    }
  }
}
