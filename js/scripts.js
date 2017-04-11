var major = ["I", "ii", "iii", "IV", "V", "vi", "viidim"];
var minor = ["i", "iidim", "III", "iv", "V", "VI", "bVII"];

var notes = ["A", "B", "C", "D", "E", "F", "G"];


function buildTonality(){

  var key = $("#key").val();

  console.log(key)

var sharps = ["C", "G", "D", "A", "E", "B", "F#", "C#"];
var flats = ["C", "F", "Bb", "Eb", "Ab", "Db", "Gb", "Cb"];

var sharpOrder = [6, 2, 5, 1, 4, 0, 3];
var flatOrder = [3, 0, 4, 1, 5, 2, 6];
console.log(sharpOrder);

function Chords(mode, key, sign, mood) {
  this.mode = mode;
  this.key = key;
  this.sign = sign;
  this.mood = mood;
  this.chordOptions = [];
  this.suggestion = [];
  }
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
}

  function buildMode(){
    for (i=0; i<begin.length; i++){

  return this.chordOptions;
  }
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

  buildMode();
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
  count = sharps.indexOf(this.key);
  for (i=0; i<count; i++) {
    this.chordOptions[sharpOrder[i]] += "#";
    console.log(this.chordOptions);
  }
}
else if (flats.indexOf(this.key)>0){
  count = flats.indexOf(this.key);
  for (i=0; i<count; i++) {
    this.chordOptions[flatOrder[i]] += "b";
  }
 }
 console.log(count);
}

$(document).ready(function() {
  $("#btnSubmit").click(function(event){
    event.preventDefault();

    $("#outputMood").text();

    $("#outputKey").text();

    $("#outputMajorMinor").text();

    myChords.buildTonality();
    myChords.buildMode();
    myChords.appendAccidentals();
    myChords.buildAccidentals();
    console.log(myChords.chordOptions);

  });
});
