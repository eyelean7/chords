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

myChords = new Chords("minor", "D", "flat", "cliche");

Chords.prototype.buildTonality = function(){
  // change key to user input
  var end = notes.slice(0,notes.indexOf(this.key));
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
    }
  }
  else {
    for (i=0; i<this.chordOptions.length; i++){
      if (i=== 0 || i=== 1 || i=== 3){
        this.chordOptions[i] = this.chordOptions[i].toLowerCase();
      }
    }
  }
}
Chords.prototype.appendAccidentals = function() {
  if (this.sign === "sharp") {
    this.key = this.key+"#";
  }
  else if (this.sign === "flat") {
    this.key = this.key+"b";
  }
  else {
    this.key = this.key;
  }
  console.log(this.key);
}
Chords.prototype.buildAccidentals = function() {

if (sharps.indexOf(this.key)>0){
  count = sharps.indexOf(this.key)
}
else if (flats.indexOf(this.key)>0){
  count = flats.indexOf(this.key);
 }
 console.log(count);
}



$(document).ready(function() {
  $("#btn1").click(function(event){
    myChords.buildTonality();
    myChords.buildMode();
    myChords.appendAccidentals();
    myChords.buildAccidentals();
    console.log(myChords.chordOptions);

  });
});
