# JSSphere
Plugin for rendering 3D spheres and planets on JS, CSS and HTML

### Example using JSSphere

```
new Sphere({
	element: document.body, // element where the spere will be rendered
	radius: 150, // radius of the sphere, px
	polygonsPerMeridian: 13, // amount of polygons per meridian (180 deg)
	texture: "https://cdn.thinglink.me/api/image/743786736932356097/1240/10/scaletowidth", // texture
	rotate: true, // should rotate?
	rotationTime: 10, // time of a turn, seconds
});
```
