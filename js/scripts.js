var major = ["I", "ii", "iii", "IV", "V", "vi", "viidim"];
var minor = ["i", "iidim", "III", "iv", "V", "VI", "bVII"];

var notes = ["A", "B", "C", "D", "E", "F", "G"];

var sharps = ["C", "G", "D", "A", "E", "B", "F#", "C#"];
var flats = ["C", "F", "Bb", "Eb", "Ab", "Db", "Gb", "Cb"];

var sharpOrder = [6, 2, 5, 1, 4, 0, 3];
var flatOrder = [3, 0, 4, 1, 5, 2, 6];

function Chords(mode, key, sign, mood) {
  this.mode = mode;
  this.key = key;
  this.sign = sign;
  this.mood = mood;
  this.chordOptions = [];
  this.suggestion = [];
}

myChords = new Chords("major", "F", "sharp", "cliche");

Chords.prototype.buildTonality = function(){
  // change key to user input
  var end = notes.slice(0,notes.indexOf(this.key));
  var begin = notes.slice(notes.indexOf(this.key));
  for (i=0; i<end.length; i++){
    begin.push(end[i]);
    this.chordOptions = begin;
  }
  return this.chordOptions;

  console.log(this.chordOptions)
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
}
Chords.prototype.buildAccidentals = function() {
if (sharps.indexOf(this.key)>0){
  count = sharps.indexOf(this.key);
  for (i=0; i<count; i++) {
    this.chordOptions[sharpOrder[i]] += "#";
  }
}
else if (flats.indexOf(this.key)>0){
  count = flats.indexOf(this.key);
  for (i=0; i<count; i++) {
    this.chordOptions[flatOrder[i]] += "b";
  }
 }
}

//UI

$(document).ready(function() {
  $("#btnSubmit").click(function(event){
    myChords.buildTonality();
    myChords.buildMode();
    myChords.appendAccidentals();
    myChords.buildAccidentals();

    var inputMood = $("#mood").val();
    var inputKey = $("#key").val();
    var inputMajorMinor = $("#majorMinor").val();
    var inputFlatSharp = $("#flatSharp").val();

    var newChords = new Chords(inputMajorMinor, inputKey, inputFlatSharp, inputMood)
    console.log(newChords)


  });
});
