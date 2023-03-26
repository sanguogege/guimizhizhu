import { version } from "../../package.json";

// 获取当前的更新版本，以应对rxdb这个垃圾在文件改变的情况下不会修改文件。

let isNewData: boolean;
let thisVersion = localStorage.getItem("version");

if (!thisVersion) {
	localStorage.setItem("version", version);
	isNewData = false;
} else {
	isNewData = thisVersion == version ? false : true;
}

console.log("version", version, "是否需要更新", isNewData);

export default { isNewData, version };
