# js-sphere
Tiny JavaScript library for creating animated 3D spheres / planets with divs (no canvas).

### Usage

1. Include the js file into your project:
```
<script type="text/javascript" src="js-sphere.js"></script>
```
2. Call `new Sphere()` with the necessary parameters:
```
new Sphere({
 container: document.body,                   // where the sphere should be rendered
 radius: 150,                                // radius of the sphere, px
 polygonsPerMeridian: 13,                    // amount of polygons per meridian (180 deg)
 texture: "https://example.com/earth.jpg",   // texture
 keyframes: "rotate",                        // name of css kayframes of rotation
 rotate: true,                               // should keyframes be applied?
 rotationTime: 1000,                         // time of a single turn, milliseconds 
});
```

### Methods

`js-sphere` has only one method `.setTexture(url)`. It allows you to smoothly change the texture of existing sphere without rerendering it.
```
let planet = new Sphere({
 texture: "https://example.com/earth.jpg"
});

planet.setTexture("https://example.com/moon.jpg");
```
