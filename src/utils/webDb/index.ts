import { createRxDatabase, addRxPlugin } from "rxdb";
import { RxDBMigrationPlugin } from "rxdb/plugins/migration";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";

import { inject } from "vue";
import schemas from "./schemas";
import { all } from "@/assets/data/";

const KEY_DATABASE = Symbol("database");

addRxPlugin(RxDBMigrationPlugin);

const useDaDataBase = () => {
	return inject(KEY_DATABASE);
};

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

export { creatDataBase, useDaDataBase };
