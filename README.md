# JSSphere
Plugin for rendering 3D spheres and planets on JS, CSS and HTML

### Usage
1. Include the js-file into your project:
```
<script type="text/javascript" src="JSSphere.js"></script>
<link rel="stylesheet" type="text/css" href="JSSphere.css">
```
2. Call `new Sphere()` with the necessary parameters:
```
new Sphere({
 element: document.body,                     // where the sphere should be rendered
 radius: 150,                                // radius of the sphere, px
 polygonsPerMeridian: 13,                    // amount of polygons per meridian (180 deg)
 texture: "https://example.com/earth.jpg",   // texture
 rotate: true,                               // should rotate?
 rotationTime: 10,                           // time of a turn, seconds
});
```
3. Nailed it!
