var major = ["I", "ii", "iii", "IV", "V", "vi"];
var major = ["i", "iidim", "III", "iv", "V", "VI"];

var notes = ["A", "B", "C", "D", "E", "F", "G"];


function buildTonality(){

  var key = $("#key").val();;

  console.log(key)

  // change key to user input
  var end = notes.slice(0,notes.indexOf(key));
  var begin = notes.slice(notes.indexOf(key));
  for (i=0; i<end.length; i++){
    begin.push(end[i]);
  }
console.log(begin);

}

$(document).ready(function() {
  $("#btnkey").click(function(event){
    event.preventDefault();


    buildTonality();


  });
});
