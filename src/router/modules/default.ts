import layout from "@/layout/index.vue";

export default {
	path: "/",
	name: "home",
	component: layout,
	children: [
		{
			path: "/",
			name: "Welcome",
			component: () => import("@/views/home/index.vue"),
			meta: {},
		},
	],
};
