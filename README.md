# Light Dimmer Demo

Control a mock dimmer switch using can-connect hooked up to a real-time socket.io backend.

## The Demo

[Short Video of Demo in two browser windows](https://gfycat.com/DamagedSerpentineBasenji)

[Live Demo](https://secure-refuge-31464.herokuapp.com/)

All clients that connect to the app will be modifiying the exact same light. Changes made in a client immediately affect all of the others.

The up / down arrows increment /decrement the light's power by 10.
The progress bar indicates the current power of the light.

Clicking one of the buttons will spawn a "demo" on the server that changes the power of the light every second for a certain duration. 
> So clicking "-50 over 3 seconds" will decrease the light's power by ~16 every second for a total change of -50.

## Folder Structure

- `public` - CanJS application
- `public/app` - components
- `public/models` - models
- `src` - Feathers real-time backend

## Real Time with CanJS' Model Layer

It's very easy to hook up CanJS' model layer to any real-time API. The [model for the light](https://github.com/ccummings/light-dimmer-demo/blob/master/public/models/light.js) is an example of this. Lines 37-40 is the only code needed to add real-time capabilities. This example uses feathers, but I could have just as easily used socket.io, primus or native WebSockets.
