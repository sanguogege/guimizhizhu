import { checkMain } from "@/utils/checkdata";
const modules: Record<string, any> = import.meta.glob(["./*/*.ts"], {
	eager: true,
});

const all: any = {};

Object.keys(modules).forEach((key) => {
	Object.assign(all, modules[key].default);
});

const gather = checkMain(all.ways, all.orgs, all.yuans);

all.gather = gather;

export { all };
