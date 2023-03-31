import layout from "@/layout/index.vue";

export default {
	path: "/ways",
	name: "ways",
	component: layout,
	children: [
		{
			path: "/ways/:type",
			name: "waystype",
			component: () => import("@/views/ways/index.vue"),
			meta: {
				title: "诡秘之主-XX途径",
				top: false,
			},
		},
		{
			path: "/ways/:type/:name",
			name: "sequencename",
			component: () => import("@/views/ways/sequence.vue"),
			meta: {
				title: "XX途径xx等级",
				top: false,
			},
		},
	],
};
