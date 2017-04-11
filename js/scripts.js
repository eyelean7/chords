var major = ["I", "ii", "iii", "IV", "V", "vi", "viidim"];
var minor = ["i", "iidim", "III", "iv", "V", "VI", "bVII"];

var notes = ["A", "B", "C", "D", "E", "F", "G"];

var sharps = ["C", "G", "D", "A", "E", "B", "F#", "C#"];
var flats = ["C", "F", "Bb", "Eb", "Ab", "Db", "Gb", "Cb"];

function Chords(mode, key, sign, mood) {
  this.mode = mode;
  this.key = key;
  this.sign = sign;
  this.mood = mood;
  this.chordOptions = [];
  this.suggestion = [];
}

myChords = new Chords("minor", "D", "sharp", "cliche");
console.log(myChords.key);

function buildTonality(){
  // change key to user input
  var end = notes.slice(0,notes.indexOf(myChords.key));
  console.log(myChords.key);
  var begin = notes.slice(notes.indexOf(myChords.key));
  for (i=0; i<end.length; i++){
    begin.push(end[i]);
    myChords.chordOptions = begin;
  }
  return myChords.chordOptions;
}
function buildMode(){
  if (myChords.mode ==="major"){
    for (i=0; i<myChords.chordOptions.length; i++){
      if (i=== 1 || i=== 2 || i=== 5 || i=== 6 ){
        myChords.chordOptions[i] = myChords.chordOptions[i].toLowerCase();
      }
      console.log(myChords.chordOptions);
    }
  }
  else {
    for (i=0; i<myChords.chordOptions.length; i++){
      if (i=== 0 || i=== 1 || i=== 3){
        myChords.chordOptions[i] = myChords.chordOptions[i].toLowerCase();
        console.log(myChords.chordOptions);
      }
    }
  }
}


$(document).ready(function() {
  $("#btn1").click(function(event){
    buildTonality();
    buildMode();
    console.log(myChords.chordOptions);

  });
});
