import { UserGlobalStore } from "@/stores/UserGlobalStore";
import { watch } from "vue";

export default function canvasBgFun(fun: any) {
	const user = UserGlobalStore();
	fun(user.pagetype.value);
	watch(user.pagetype, (newVal) => {
		fun(newVal);
	});
}
