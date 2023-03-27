import layout from "@/layout/index.vue";

export default {
	path: "/org",
	name: "org",
	component: layout,
	children: [
		{
			path: "/org",
			name: "orgs",
			component: () => import("@/views/orgs/index.vue"),
			meta: {},
		},
		{
			path: "/org/:id",
			name: "orgsid",
			component: () => import("@/views/orgs/index.vue"),
			meta: {},
		},
	],
};
