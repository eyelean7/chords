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
  this.allChordNotes = [];
  // this.notesForChords = new notesForChords(chord, arpeggio);
}
//Builds note sequence based on the key
Chords.prototype.buildTonality = function(){
  var end = notes.slice(0,notes.indexOf(this.key));
  var begin = notes.slice(notes.indexOf(this.key));

  this.chordOptions = begin;
  for (i=0; i<end.length; i++){
    begin.push(end[i]);
    this.chordOptions = begin;
  }
  return this.chordOptions;
}
// Builds order of major/minor chords
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

    if (majorSharps.indexOf(this.key)>-1){

      count = majorSharps.indexOf(this.key);
      for (i=0; i<count; i++) {
        this.chordOptions[majorSharpOrder[i]] += "#";
      }
    }
    // Add flats

    else if (majorFlats.indexOf(this.key)>-1){

      count = majorFlats.indexOf(this.key);
      for (i=0; i<count; i++) {
        this.chordOptions[majorFlatOrder[i]] += "♭";
      }
     }
     // Error
     else {
       alert ("Please use " + suggestionMajor[errorArrayMajor.indexOf(this.key)]);

       this.chordOptions=undefined;

     }
   }
   // Minor
   else {

     if (minorSharps.indexOf(this.key)>-1){

       // Add sharps
       count = minorSharps.indexOf(this.key);
       for (i=0; i<count; i++) {
         this.chordOptions[minorSharpOrder[i]] += "#";

         console.log(this.chordOptions);
       }
     }
     // Add flats

    //  else if (minorFlats.indexOf(this.key)>0){

     else if (minorFlats.indexOf(this.key)>-1){

       count = minorFlats.indexOf(this.key);
       for (i=0; i<count; i++) {
         this.chordOptions[minorFlatOrder[i]] += "♭";

       }
      }
      // Error
      else {
        alert ("Please use " + suggestionMinor[errorArrayMinor.indexOf(this.key)]);

        this.chordOptions=undefined;
      }
   }
}
Chords.prototype.buildProgression = function() {
  if (this.mood === "cliche") {
    this.suggestion.push(this.chordOptions[0], this.chordOptions[4], this.chordOptions[5], this.chordOptions[3]);
  }
  if (this.mood === "emotional") {
    this.suggestion.push(this.chordOptions[0], this.chordOptions[0], this.chordOptions[3], this.chordOptions[5]);
  }if (this.mood === "energetic") {
    this.suggestion.push(this.chordOptions[0], this.chordOptions[2], this.chordOptions[3], this.chordOptions[5]);
  }
}
Chords.prototype.chordNotes = function() {
  for (i=0; i < this.chordOptions.length; i++){

    var notesInChord = [];
    var rearrangedChords = [];
    var end = this.chordOptions.slice(0,i);
    var begin = this.chordOptions.slice(i);
    rearrangedChords=begin;
    for (j=0; j<end.length; j++){
      rearrangedChords.push(end[j]);
    }
    // rearrangeChords[i] = rearrangeChords[i].toUpperCase();
    notesInChord.push(rearrangedChords[0].toUpperCase(), rearrangedChords[2].toUpperCase(), rearrangedChords[4].toUpperCase());
    this.allChordNotes.push(notesInChord);
  }
}


// function notesForChords (chord, arpeggio){
//    for (i=0; i<Chords.chordOptions.length; i++){
//   this.chord = Chords.chordOptions[i];
// };
//
//    for (i=0; i<Chords.chordOptions.length; i++){
//   this.arpeggio = Chords.allChordNotes[i];
// };
// var
// Chords.prototype.mapNotes = function(){
//   for (i=0; i<this.chordOptions.length; i++){
//     var currentChord = new notesForChords(this.chordOptions[i], this.allChordNotes[i]);
//     console.log(currentChord);
//   }
// }


//UI

$(document).ready(function() {
  $("#btnSubmit").click(function(event){
    var inputMood = $("#mood").val();
    var inputKey = $("#key").val();
    var inputMode = $("#mode").val();
    var inputFlatSharp = $("#flatSharp").val();

    var newChords = new Chords(inputMode, inputKey, inputFlatSharp, inputMood);


    newChords.buildTonality();
    newChords.buildMode();
    newChords.appendAccidentals();
    newChords.buildAccidentals();
    newChords.buildProgression();
    newChords.chordNotes();


    $("#outputMood").text(inputMood);
    $("#outputKey").text(inputKey);
    $("#outputMode").text(inputMode);
    $("#outputFlatSharp").text(inputFlatSharp);


    var toneArray = [newChords.chordOptions];

    while(table.rows.length > 0) {
    table.deleteRow(0);
    }

    toneArray.forEach(function(items) {
      var row = document.createElement("tr");

      i=0;
      items.forEach(function(item) {
        var cell = document.createElement("td");
        cell.id = i;
        cell.textContent = item;

        row.appendChild(cell);
        $(".hover").append(newChords.allChordNotes[i]);
        i++;
      });
        table.appendChild(row);
      });
    $("tr#tones").text(newChords.chordOptions);
    console.log(newChords);
  });

  $("#table").hover(
    function hoverIn() {
      $(".hover").show();
    },
    function hoverOut() {
      $(".hover").hide();
    }
  );
});
