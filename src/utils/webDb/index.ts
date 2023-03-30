import { inject } from "vue";
import { createRxDatabase, addRxPlugin } from "rxdb";
import { RxDBMigrationPlugin } from "rxdb/plugins/migration";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import { RxDBQueryBuilderPlugin } from "rxdb/plugins/query-builder";
import { removeRxDatabase } from "rxdb";

import schemas from "./schemas";
import { all } from "@/assets/data/";
import isNewData from "@/utils/getversion";

const KEY_DATABASE = Symbol("database");

addRxPlugin(RxDBMigrationPlugin);
addRxPlugin(RxDBQueryBuilderPlugin);

const useDataBase = () => {
	return inject(KEY_DATABASE);
};

if (isNewData.isNewData) {
	await removeRxDatabase("guimizhizhu", getRxStorageDexie());
	localStorage.setItem("version", isNewData.version);
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
		c.bulkInsert(all[c.name]);
	});

	return {
		install(app: any) {
			app.provide(KEY_DATABASE, myDatabase);
		},
	};
};

export { creatDataBase, useDataBase };
