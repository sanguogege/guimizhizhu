import layout from "@/layout/index.vue";

export default {
	path: "/org",
	name: "org",
	component: layout,
	children: [
		{
			path: "/orgs/:id",
			name: "orgs",
			component: () => import("@/views/orgs/index.vue"),
			meta: {},
		},
	],
};
