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

Chords.prototype.buildTonality = function(){
  // change key to user input
  var end = notes.slice(0,notes.indexOf(this.key));
  console.log(this.key);
  var begin = notes.slice(notes.indexOf(this.key));
  for (i=0; i<end.length; i++){
    begin.push(end[i]);
    this.chordOptions = begin;
  }
  return this.chordOptions;
}
Chords.prototype.buildMode = function(){
  if (this.mode ==="major"){
    for (i=0; i<this.chordOptions.length; i++){
      if (i=== 1 || i=== 2 || i=== 5 || i=== 6 ){
        this.chordOptions[i] = this.chordOptions[i].toLowerCase();
      }
      console.log(this.chordOptions);
    }
  }
  else {
    for (i=0; i<this.chordOptions.length; i++){
      if (i=== 0 || i=== 1 || i=== 3){
        this.chordOptions[i] = this.chordOptions[i].toLowerCase();
        console.log(this.chordOptions);
      }
    }
  }
}


$(document).ready(function() {
  $("#btn1").click(function(event){
    myChords.buildTonality();
    myChords.buildMode();
    console.log(myChords.chordOptions);

  });
});
