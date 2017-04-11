var major = ["I", "ii", "iii", "IV", "V", "vi"];
var major = ["i", "iidim", "III", "iv", "V", "VI"];

var notes = ["A", "B", "C", "D", "E", "F", "G"];

function buildTonality(){
  console.log("hello");
  var key = "D";
  // change key to user input
  var end = notes.slice(0,notes.indexOf(key));
  var begin = notes.slice(notes.indexOf(key));
  for (i=0; i<end.length; i++){
    begin.push(end[i]);
  }
console.log(begin);

}

$(document).ready(function() {
  $("#btn1").click(function(event){
    buildTonality();
  });
});
