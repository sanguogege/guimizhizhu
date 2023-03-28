import layout from "@/layout/index.vue";

export default {
	path: "/",
	name: "home",
	component: layout,
	children: [
		{
			path: "/",
			name: "Welcome",
			meta: {
				title: "诡秘之主首页",
				order: 0,
				name: "首页",
				top: true,
			},
			component: () => import("@/views/home/index.vue"),
		},
	],
};
