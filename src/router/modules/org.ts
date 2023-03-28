import layout from "@/layout/index.vue";

export default {
	path: "/org",
	name: "org",
	component: layout,
	children: [
		{
			path: "/org",
			name: "orgs",
			meta: {
				title: "诡秘之主-组织大全页",
				order: 3,
				name: "组织大全",
				top: true,
			},
			component: () => import("@/views/orgs/index.vue"),
		},
		{
			path: "/org/:id",
			name: "orgsid",
			component: () => import("@/views/orgs/index.vue"),
			meta: {
				title: "自己设定",
				top: false,
			},
		},
	],
};
