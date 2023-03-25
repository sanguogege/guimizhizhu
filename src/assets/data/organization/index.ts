// const modules: Record<string, any> = import.meta.glob(["./orgs/*.json"], {
// 	eager: true,
// });

// const organization: any = [];

// Object.keys(modules).forEach((key) => {
// 	organization.push(modules[key].default);
// });

import type { organizations } from "../type";

const modules: Record<string, any> = import.meta.glob(
	["./orgs/*.ts", "!./orgs/*.d.ts", "!./orgs/*enum.ts"],
	{
		eager: true,
	}
);

const orgs: organizations = [];

Object.keys(modules).forEach((key) => {
	orgs.push(...modules[key].default);
});

export default { organization: orgs };
