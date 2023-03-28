import { createRouter, createWebHistory } from "vue-router";
import { TransormRouter } from "./utils";

const modules: Record<string, any> = import.meta.glob(["./modules/**/*.ts"], {
	eager: true,
});

/** 原始静态路由（未做任何处理） */
const routes: any = [];

Object.keys(modules).forEach((key) => {
	routes.push(modules[key].default);
});

export const sideRouter = TransormRouter(routes);

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title as string;
	}
	next();
});

export default router;
