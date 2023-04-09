import { Application } from "pixi.js";

export function createCanvas(type = "canvas") {
	if (type == "canvas") {
		const app: any = new Application({
			resizeTo: window,
			antialias: true,
			resolution: 1,
		});
		document.body.appendChild(app.view);
		return app;
	} else {
		const app: any = document.querySelector("canvas");
		app.remove();
		return;
	}
}
