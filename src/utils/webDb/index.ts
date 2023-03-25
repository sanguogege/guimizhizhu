import { inject } from "vue";
import { createRxDatabase, addRxPlugin } from "rxdb";
import { RxDBMigrationPlugin } from "rxdb/plugins/migration";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import { removeRxDatabase } from "rxdb";

import schemas from "./schemas";
import { all } from "@/assets/data/";
import isNewData from "@/utils/getversion";

const KEY_DATABASE = Symbol("database");

addRxPlugin(RxDBMigrationPlugin);

const useDataBase = () => {
	return inject(KEY_DATABASE);
};

const updateDataBase = async () => {
	console.log("删除数据库");
	await removeRxDatabase("guimizhizhu", getRxStorageDexie());
	creatDataBase();
	localStorage.setItem("version", isNewData.version);
};

if (isNewData.isNewData) {
	alert("数据有更新");
	updateDataBase();
} else {
	console.log("没有更新");
}

const creatDataBase = async () => {
	const myDatabase = await createRxDatabase({
		name: "guimizhizhu",
		storage: getRxStorageDexie(),
	});

	const schemasAdd = schemas.map(async (element: any) => {
		await myDatabase.addCollections(element);
	});

	await Promise.all(schemasAdd);

	Object.values(myDatabase.collections).forEach((c: any) => {
		console.log(all[c.name]);
		c.bulkInsert(all[c.name]);
	});

	return {
		install(app: any) {
			app.provide(KEY_DATABASE, myDatabase);
		},
	};
};

export { creatDataBase, useDataBase, updateDataBase };
