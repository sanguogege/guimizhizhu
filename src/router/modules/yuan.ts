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
			meta: {
				title: "诡秘之主-九大源质",
				order: 5,
				name: "九大源质",
				top: true,
			},
		},
		{
			path: "/yuan/:id",
			name: "yuan",
			component: () => import("@/views/yuan/index.vue"),
			meta: {
				title: "XX源质",
				top: true,
			},
		},
	],
};
