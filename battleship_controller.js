$(document).ready(function() {
  // when user clicks on cell changes to clicked class
  $("td").on("click", function(){
    $(this).addClass("clicked");
    counter();
  });

  //creating an off click to stop torpedoing at the the same postion
  $("td").on("click", function(){
    $(this).off();

    // taking the row array and the column array and placing them together in one number(line 16)
    for (var i = 0; i < shipSpots.length; i++) {
      var row = shipSpots[i][0];
      var col = shipSpots[i][1];
      if ($(this).attr('id') === row + "" + col){
        // adding a class "ship" to where those ships are.
        $(this).addClass('ship');
      }
    }
  });

// when user clickes on ship, it will change ship class
  $("shipSpots").on("click", function(){
    $(this).addClass("ship");
    setShips();
  });
});
