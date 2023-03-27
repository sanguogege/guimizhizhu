import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { creatDataBase } from "@/utils/webDb";

import "@/assets/css/public.css";

const database = creatDataBase();

const app = createApp(App);
app.use(router);
database.then((db) => {
	app.use(db).mount("#app");
});
