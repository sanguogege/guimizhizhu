import { useStorage, createGlobalState } from "@vueuse/core";

const UserGlobalStore = createGlobalState(() => {
	return {
		pagetype: useStorage("pagetype", "canvas"),
	};
});

export { UserGlobalStore };
