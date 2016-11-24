var board = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ];
var SHIP = 1;

$(document).ready(function() {

  //create 10x10 board with individual cell ids and row ids
  //first for loop creates 10 rows in table
  for (var row = 0; row < 10; row++) {
    //add row with individual id to table
    $("table").append('<tr id="' + row + '"></tr>');
    //second for loop creates 10 cells in each row
    for (var cell = 0; cell < 10; cell++) {
      //add cell with individual id to each row
      $("#" + row).append('<td id="' + row + cell + '"></td>');
    }
  }

setShips();

});

// missile counter that starts at 1
var missiles = 1;
// missile function that shows user how many missiles have been used
function counter() {
  //missile counter stops at 25
  if (missiles < 26) {
    console.log("You have used " + missiles + " missle(s).");
    missiles++;
  } else {
    // PLACE LOSE STATEMENT HERE
  }
}

var shipSpots = [];

//place ships on board
function setShips() {
  var row;
  var cell;
  // produced a random location for the ship to go
  for (i = 0; i < 5; i++) {
    row = Math.floor(Math.random() * 10);
    cell = Math.floor(Math.random() * 10);
    console.log(row + " " + cell + " " + i);
    // made sure the ships didn't go into the same cell.
    if (board[row][cell] != SHIP) {
      board[row][cell] = SHIP;
      // stored location of ships in an empty array. HooRay!
      shipSpots.push([row, cell]);
    }
  }
}
