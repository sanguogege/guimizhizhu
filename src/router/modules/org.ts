import layout from "@/layout/index.vue";

export default {
	path: "/org",
	name: "org",
	component: layout,
	children: [
		{
			path: "/orgs",
			name: "orgs",
			component: () => import("@/views/orgs/index.vue"),
			meta: {},
		},
		{
			path: "/orgs/:id",
			name: "orgsid",
			component: () => import("@/views/orgs/index.vue"),
			meta: {},
		},
	],
};
