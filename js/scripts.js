// visual reference for humans only
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

myChords = new Chords("minor", "C", "sharp", "cliche");
//Builds note sequence based on the key
Chords.prototype.buildTonality = function(){
  var end = notes.slice(0,notes.indexOf(this.key));
  var begin = notes.slice(notes.indexOf(this.key));

  this.chordOptions = begin;
  for (i=0; i<end.length; i++){
    begin.push(end[i]);
    this.chordOptions = begin;
  }
  console.log(this.chordOptions);
  return this.chordOptions;

  console.log(begin)
}
// Builds order of major/minor chords
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
// Adds flat/sharp sign to the key
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
// Adds flat/sharp to remaining chords
Chords.prototype.buildAccidentals = function() {
  // Major
  if (this.mode === "major"){
    // Add sharps
    if (majorSharps.indexOf(this.key)>0){
      count = majorSharps.indexOf(this.key);
      for (i=0; i<count; i++) {
        this.chordOptions[majorSharpOrder[i]] += "#";
        console.log(this.chordOptions);
      }
    }
    // Add flats
    else if (majorFlats.indexOf(this.key)>0){
      count = majorFlats.indexOf(this.key);
      for (i=0; i<count; i++) {
        this.chordOptions[majorFlatOrder[i]] += "b";
         console.log(this.chordOptions);
      }
     }
     // Error
     else {
       alert ("Please use " + suggestionMajor[errorArrayMajor.indexOf(this.key)]);
       console.log(suggestionMajor[errorArrayMajor.indexOf(this.key)]);
     }
   }
   // Minor
   else {
     if (minorSharps.indexOf(this.key)>0){
       // Add sharps
       count = minorSharps.indexOf(this.key);
       for (i=0; i<count; i++) {
         this.chordOptions[minorSharpOrder[i]] += "#";
         console.log(this.chordOptions);
       }
     }
     // Add flats
     else if (minorFlats.indexOf(this.key)>0){
       count = minorFlats.indexOf(this.key);
       for (i=0; i<count; i++) {
         this.chordOptions[minorFlatOrder[i]] += "b";
       }
      }
      // Error
      else {
        alert ("Please use " + suggestionMinor[errorArrayMinor.indexOf(this.key)]);
        console.log(suggestionMinor[errorArrayMinor.indexOf(this.key)]);
      }
   }
 console.log(count);
 console.log(this.chordOptions);

}

//UI

$(document).ready(function() {
  $("#btnSubmit").click(function(event){
    myChords.buildTonality();
    myChords.buildMode();
    myChords.appendAccidentals();
    myChords.buildAccidentals();

    console.log(myChords.chordOptions);

    var inputMood = $("#mood").val();
    var inputKey = $("#key").val();
    var inputMajorMinor = $("#mode").val();
    var inputFlatSharp = $("#flatSharp").val();

    var newChords = new Chords(inputMajorMinor, inputKey, inputFlatSharp, inputMood)
    console.log(newChords)

    while(table.rows.length > 0) {
    table.deleteRow(0);
    }  

    newChords.buildTonality();
    newChords.buildMode();
    newChords.appendAccidentals();
    newChords.buildAccidentals();

    console.log(newChords.chordOptions);

    var toneArray = [newChords.chordOptions];
    console.log(toneArray);

    toneArray.forEach(function(items) {
      var row = document.createElement("tr");
      items.forEach(function(item) {
        var cell = document.createElement("td");
        cell.textContent = item;
        row.append(cell);
      });
        table.append(row);
      });

    $("#outputMood").text(inputMood);
    $("#outputKey").text(inputKey);
    $("#outputMajorMinor").text(inputMajorMinor);
    $("#outputFlatSharp").text(inputFlatSharp);

    $("tr#tones").text(newChords.chordOptions);
    console.log(newChords);

  });
});
