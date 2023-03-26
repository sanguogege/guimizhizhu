import layout from "@/layout/index.vue";

export default {
	path: "/yuan",
	name: "yuan",
	component: layout,
	children: [
		{
			path: "/yuan",
			name: "yuan",
			component: () => import("@/views/yuan/index.vue"),
			meta: {},
		},
	],
};
