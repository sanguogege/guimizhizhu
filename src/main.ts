import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import { creatDataBase } from "@/utils/webDb";

import "element-plus/dist/index.css";
import "@/assets/css/public.css";

const database = creatDataBase();

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
database.then((db) => {
	app.use(db).mount("#app");
});
