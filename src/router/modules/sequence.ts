import layout from "@/layout/index.vue";

export default {
	path: "/sequence",
	name: "sequence",
	component: layout,
	children: [
		{
			path: "/sequence",
			name: "sequence",
			component: () => import("@/views/sequence/index.vue"),
			meta: {},
		},
	],
};
