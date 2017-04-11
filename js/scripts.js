var major = ["I", "ii", "iii", "IV", "V", "vi", "viidim"];
var minor = ["i", "iidim", "III", "iv", "V", "VI", "bVII"];

var notes = ["A", "B", "C", "D", "E", "F", "G"];


function buildTonality(){

  var key = $("#key").val();

  console.log(key)

  // change key to user input
  var end = notes.slice(0,notes.indexOf(key));
  var begin = notes.slice(notes.indexOf(key));
  for (i=0; i<end.length; i++){
    begin.push(end[i]);
  }


  function buildMode(){
    for (i=0; i<begin.length; i++){
      if (i=== 1 || i=== 2 || i=== 5 || i=== 6 ){
        begin[i] = begin[i].toLowerCase();
        console.log(begin);
      }
    }
  }
  buildMode();
  return begin;
}

$(document).ready(function() {
  $("#btnkey").submit(function(event){
    event.preventDefault();

  $("#btnMood").submit(function(event){
    event.preventDefault();

  $("#btnMajorOrMinor").submit(function(event){
    event.preventDefault();

      });
    });
    buildTonality();

  });
});
