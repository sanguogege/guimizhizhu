let fs = require("fs");
//返回package的json数据
function getPackageJson() {
    let data = fs.readFileSync("./package.json"); //fs读取文件
    return JSON.parse(data); //转换为json对象
}

let packageData = getPackageJson(); //获取package的json
let arr = packageData.version.split("."); //切割后的版本号数组
arr[2] = parseInt(arr[2]) + 1;
if (parseInt(arr[2]) > 9) {
    arr[1] = parseInt(arr[1]) + 1;
    arr[2] = 0;
}

if (parseInt(arr[1]) > 9) {
    arr[0] = parseInt(arr[0]) + 1;
    arr[1] = 0;
}

packageData.version = arr.join("."); //转换为以"."分割的字符串

console.log("修改版本号版本号为" + packageData.version);
//用packageData覆盖package.json内容
fs.writeFile(
    "./package.json",
    JSON.stringify(packageData, null, "\t"),
    (err) => { }
);



