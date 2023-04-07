import { Application } from "pixi.js";

const app: any = new Application({
	resizeTo: window,
	antialias: true,
	resolution: 1,
});

document.body.appendChild(app.view);

export default app;
