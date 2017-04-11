var major = ["I", "ii", "iii", "IV", "V", "vi", "viidim"];
var minor = ["i", "iidim", "III", "iv", "V", "VI", "bVII"];

var notes = ["A", "B", "C", "D", "E", "F", "G"];

var majorSharps = ["C", "G", "D", "A", "E", "B", "F#", "C#"];
var majorFlats = ["C", "F", "Bb", "Eb", "Ab", "Db", "Gb", "Cb"];

var majorSharpOrder = [6, 2, 5, 1, 4, 0, 3];
var majorFlatOrder = [3, 0, 4, 1, 5, 2, 6];

var minorSharps = ["A", "E", "B", "F#", "C#", "G#", "D#", "A#"];
var minorFlats = ["A", "D", "G", "C", "F", "Bb", "Eb", "Ab"];

var minorSharpOrder = [1, 4, 0, 3, 6, 2, 5];
var minorFlatOrder = [5, 2, 6, 3, 0, 4, 1];

var errorArrayMajor = ["G#", "D#", "A#", "E#", "B#", "Fb"];
var suggestionMajor = ["Ab", "Eb", "Bb", "F", "C", "E"];
var errorArrayMinor = ["E#", "B#", "Db", "Gb", "Cb", "Fb"];
var suggestionMinor = ["F", "C", "C#", "F#", "B", "E"];



function Chords(mode, key, sign, mood) {
  this.mode = mode;
  this.key = key;
  this.sign = sign;
  this.mood = mood;
  this.chordOptions = [];
  this.suggestion = [];
}

myChords = new Chords("minor", "F", "flat", "cliche");

Chords.prototype.buildTonality = function(){
  // change key to user input
  var end = notes.slice(0,notes.indexOf(this.key));
  console.log(end);
  var begin = notes.slice(notes.indexOf(this.key));
  console.log(begin);

  this.chordOptions = begin;
  for (i=0; i<end.length; i++){
    begin.push(end[i]);
    this.chordOptions = begin;
     console.log(this.chordOptions);
  }
  return this.chordOptions;
}
Chords.prototype.buildMode = function(){
  if (this.mode ==="major"){
    for (i=0; i<this.chordOptions.length; i++){
      if (i=== 1 || i=== 2 || i=== 5 || i=== 6 ){
        this.chordOptions[i] = this.chordOptions[i].toLowerCase();
         console.log(this.chordOptions);
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
  if (this.mode === "major"){

    if (majorSharps.indexOf(this.key)>0){
      count = majorSharps.indexOf(this.key);
      for (i=0; i<count; i++) {
        this.chordOptions[majorSharpOrder[i]] += "#";
        console.log(this.chordOptions);
      }
    }
    else if (majorFlats.indexOf(this.key)>0){
      count = majorFlats.indexOf(this.key);
      for (i=0; i<count; i++) {
        this.chordOptions[majorFlatOrder[i]] += "b";
         console.log(this.chordOptions);
      }
     }
     else {
       alert ("Please use " + suggestionMajor[errorArrayMajor.indexOf(this.key)]);
       console.log(suggestionMajor[errorArrayMajor.indexOf(this.key)]);
     }
   }
   else {
     if (minorSharps.indexOf(this.key)>0){
       count = minorSharps.indexOf(this.key);
       for (i=0; i<count; i++) {
         this.chordOptions[minorSharpOrder[i]] += "#";
         console.log(this.chordOptions);
       }
     }
     else if (minorFlats.indexOf(this.key)>0){
       count = minorFlats.indexOf(this.key);
       for (i=0; i<count; i++) {
         this.chordOptions[minorFlatOrder[i]] += "b";
       }
      }
      else {
        alert ("Please use " + suggestionMinor[errorArrayMinor.indexOf(this.key)]);
        console.log(suggestionMinor[errorArrayMinor.indexOf(this.key)]);
      }
   }
 console.log(count);
 console.log(this.chordOptions);
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
