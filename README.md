# NativeScript Sound

Play a sound in your NativeScript app.

## Installation

Run the following command from the root of your project:

```
tns plugin add nativescript-sound
```

## Usage

To use this plugin you must first require() it:

```js
var sound = require("nativescript-sound");
```

### create and play

It's important to preload the audio file into the **sound** module before playing it; there is a delay during creation due to the audio being processed.

```js
var tada = sound.create("~/sounds/tada.mp3"); // preload the audio file

// play the sound (i.e. tap event handler)
tada.play();
```

### stop

```js
tada.stop();
```

### reset

```js
tada.reset();
```