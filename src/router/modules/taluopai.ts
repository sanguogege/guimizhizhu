import layout from "@/layout/index.vue";

export default {
	path: "/taluopai",
	name: "taluopai",
	component: layout,
	children: [
		{
			path: "/taluopai/:id",
			name: "taluopai",
			component: () => import("@/views/taluopai/index.vue"),
			meta: {},
		},
	],
};
