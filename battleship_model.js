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



});

var missiles = 25;

function counter() {
  console.log("You have " + missiles + " move(s) left.");
  missiles--;
}
