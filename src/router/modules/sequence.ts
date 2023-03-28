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
			meta: {
				title: "诡秘之主-序列大全",
				order: 2,
				name: "序列大全",
				top: true,
			},
		},
		{
			path: "/sequence/:type",
			name: "sequence",
			component: () => import("@/views/sequence/index.vue"),
			meta: {
				title: "XX途径",
				top: false,
			},
		},
		{
			path: "/sequence/:type/:name?",
			name: "sequence",
			component: () => import("@/views/sequence/index.vue"),
			meta: {
				title: "XX途径xx等级",
				top: false,
			},
		},
	],
};
