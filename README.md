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

### play

```js
var tada = sound.create("~/sounds/tada.mp3");
tada.play();
```
