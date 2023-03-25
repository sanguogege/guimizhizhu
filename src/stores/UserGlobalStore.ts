
import { useStorage, createGlobalState } from "@vueuse/core";

const UserGlobalStore = createGlobalState(() => {
    return {
        IsDb: useStorage("dbstate", false),
    }
})

export {
    UserGlobalStore
}