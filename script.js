$(document).ready(function(){

  document.addEventListener("keypress", pressKey, false);


  var counter1 = 0;
  var counter2 = 0;

  function pressKey(event){
    if (event.keyCode === 108){
      var track1 = document.getElementById("player1_strip");
      active_track = track1.getElementsByTagName('td');
      counter1 += 1;
      active_track[counter1].className = "active";
      removeBlack(counter1 - 1);
    }
    else if (event.keyCode === 97 ){

      var track2 = document.getElementById("player2_strip");
      active_track = track2.getElementsByTagName('td');
      counter2 += 1;
      active_track[counter2].className = "active";
      removeBlack(counter2 - 1);
    }
  }

  function removeBlack(column_before){
    active_track[column_before].classList.remove("active");
  }

});

