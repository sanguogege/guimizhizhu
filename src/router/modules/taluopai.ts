import layout from "@/layout/index.vue";

export default {
	path: "/taluopai",
	name: "taluopai",
	component: layout,
	children: [
		{
			path: "/taluopai",
			name: "taluopai",
			component: () => import("@/views/taluopai/index.vue"),
			meta: {
				title: "诡秘之主-塔罗牌大全",
				order: 4,
				name: "塔罗牌",
				top: true,
			},
		},
		{
			path: "/taluopai/:id",
			name: "taluopaiid",
			component: () => import("@/views/taluopai/taluopai.vue"),
			meta: {
				title: "xx塔罗牌",
				top: false,
			},
		},
	],
};
