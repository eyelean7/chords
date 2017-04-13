# _Chord Suggester_

#### _This program suggests chords based on a user's selections._

#### By _**Aaron Nguyen, Anna Horodetska, Ilene Gorski**_

## Description

_The program asks for desired mood, key, and mode and produces a chord progression based on the selection._

## Specs


|Behavior|Input|Output|
|---|---|---|
|Arrange notes according to key|C|C D E F G A B C|
|Adjust chord quality by mode|major|C d e F G a b|
|Add accidentals to chords|#|C# d# e# F# G# a# b#|
|Error if key has too many sharps or flats|F♭ minor|alert:Please use E|
|Build progression based on mood|cliche|C G a F|
|Create notes for each chord|C|C E G|
|Gather chord notes for each chord in suggestion|cliche|C E G, G B D, A C E, F A C|
|Play chords suggestion|G B♭ D|midi nubmers 55, 58, 50|

## Setup/Installation Requirements

* _Clone or download repository_
* _Open in Chrome_
* _OR open in [gh-pages](https://eyelean7.github.io/chords)_

## Known Bugs

_Plays chords partially or too quickly on first click of "submit" button._

## Support and contact details

_Contact on github! [Ilene](https://github.com/eyelean7)
[Anna](https://github.com/ahorod)
[Aaron](https://github.com/Aaron3831)_

## Technologies Used

_JavaScript, Jquery, CSS, Bootstrap, HTML_

### License

*MIT*

Copyright (c) 2017 **_Aaron Nguyen, Anna Horodetska, Ilene Gorski_**
