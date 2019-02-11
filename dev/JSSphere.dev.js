class Sphere {
	constructor(props) {
		props = (props.constructor.name === "Object" ? props : {});
		this.element = (props.element instanceof HTMLElement ? props.element : document.body);
		this.radius = (typeof props.radius === "number" ? props.radius : 100);
		this.polygonsPerMeridian = (typeof props.polygonsPerMeridian === "number" ? props.polygonsPerMeridian : 15);
		this.texture = (typeof props.texture === "string" ? props.texture : "none");
		this.rotate = (typeof props.rotate === "boolean" ? props.rotate : true);
		this.rotationTime = (typeof props.rotationTime === "number" ? props.rotationTime : 10);
		this.diameter = this.radius * 2;
		this.polygonSize = Math.ceil(this.radius * (2 * Math.tan(Math.PI / ((this.polygonsPerMeridian - 1) * 2))));
		this.parts = {
			sphere: null,
			meridians: [],
			polygons: []
		};
		this.handlers = {
			createSphereElement: () => {
				let sphere = document.createElement("div");
				sphere.classList.add("sphere");
				sphere.style.width = `${this.diameter}px`;
				sphere.style.height = `${this.diameter}px`;
				this.rotate && (sphere.style.animation = `rotate linear ${this.rotationTime}s infinite`);
				this.parts.sphere = sphere;
				return sphere;
			},
			createMeridianElement: () => {
				let meridian = document.createElement("div");
				meridian.classList.add("meridian");
				this.parts.meridians.push(meridian)
				return meridian;
			},
			createPolygonElement: (m, p) => {
				let x = this.radius * Math.cos((p * (Math.PI * 2)) / (this.polygonsPerMeridian - 1));
				let scaleXK = (1 - (.2 * (100 - (((this.radius - x) * 100) / (this.radius * 2))) / 100));

				let polygon = document.createElement("div");
				polygon.classList.add("polygon");	
				polygon.style.backgroundImage = `url('${this.texture}')`;
				polygon.style.backgroundPosition = `${-m * this.polygonSize}px ${-(p * this.polygonSize)}px`;
				polygon.style.backgroundSize = `${((this.polygonsPerMeridian - 1) * 2) * this.polygonSize}px ${this.polygonsPerMeridian * this.polygonSize}px`;
				polygon.style.backgroundColor = `rgb(${0}, ${0}, ${(p * 255) / this.polygonsPerMeridian})`;
				polygon.style.transformOrigin = `center center ${-this.radius}px`;
				polygon.style.width = `${this.polygonSize}px`;
				polygon.style.height = `${this.polygonSize}px`;
				polygon.style.transition = "all 1s ease-in-out";
				polygon.style.transform = `translateX(${((this.diameter / 2) - (this.polygonSize / 2))}px) translateY(${((this.diameter / 2) - (this.polygonSize / 2))}px) translateZ(${this.radius}px) rotateY(${(m * (180 * 2)) / ((this.polygonsPerMeridian - 1) * 2)}deg) rotateZ(${((p * 180) / (this.polygonsPerMeridian - 1)) - 90}deg) rotate3d(0, 1, 0, 90deg) scaleX(${scaleXK})`;
				return polygon;
			},
			renderSphere: () => {	
				let sphere = this.handlers.createSphereElement();
				for (let m = 0; m < ((this.polygonsPerMeridian - 1) * 2); m++) {
					let meridian = this.handlers.createMeridianElement();
					for (let p = 0; p < this.polygonsPerMeridian; p++) {
						let polygon = this.handlers.createPolygonElement(m, p);
						this.parts.polygons.push(polygon);
						meridian.appendChild(polygon);
						sphere.appendChild(meridian);
					}
				}
				this.element.appendChild(sphere);
			}
		}
		this.handlers.renderSphere();
	}

	setTexture(texture) {
		this.texture = (typeof texture === "string" ? texture : "none");
		this.parts.polygons.forEach(item => item.style.backgroundImage = `url('${texture}')`);
	}
}