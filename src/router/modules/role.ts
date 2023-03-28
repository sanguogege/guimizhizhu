import layout from "@/layout/index.vue";

export default {
	path: "/role",
	name: "role",
	component: layout,
	children: [
		{
			path: "/role",
			name: "role",
			component: () => import("@/views/role/index.vue"),
			meta: {
				title: "诡秘之主-角色大全",
				order: 4,
				name: "角色大全",
				top: true,
			},
		},
		{
			path: "/role/:id",
			name: "role",
			component: () => import("@/views/role/index.vue"),
			meta: {
				title: "XX角色",
				top: true,
			},
		},
	],
};
