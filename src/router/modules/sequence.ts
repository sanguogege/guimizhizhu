import layout from "@/layout/index.vue";

export default {
	path: "/sequence",
	name: "sequence",
	component: layout,
	children: [
		{
			path: "/sequence/:type",
			name: "sequencetype",
			component: () => import("@/views/sequence/index.vue"),
			meta: {
				title: "XX途径",
				top: false,
			},
		},
		{
			path: "/sequence/:type/:name",
			name: "sequencename",
			component: () => import("@/views/sequence/sequence.vue"),
			meta: {
				title: "XX途径xx等级",
				top: false,
			},
		},
	],
};
