import { defineComponent, h } from "vue";
import { useDataBase } from "@/utils/webDb";
import { switchArray } from "@/utils/checkdata";
import "@/assets/css/table.css";

function getRowspan(el: any) {
	let colspan: any = {
		name: "",
		isName: true,
		isTitle: true,
	};
	if (colspan.name == el.yuan.name) {
		colspan.isName = false;
		colspan.isTitle = false;
	} else {
		colspan.name = el.yuan.name;
		colspan.isName = true;
		colspan.isTitle = true;
	}

	return colspan;
}

function CreatDom(data: any) {
	const dom = data.map((el: any) => {
		const rowspan = getRowspan(el);
		return h(
			<tr>
				<td>{el.power}</td>
				<td>{el[9].name}</td>
				<td>{el[8].name}</td>
				<td>{el[7].name}</td>
				<td>{el[6].name}</td>
				<td>{el[5].name}</td>
				<td>{el[4].name}</td>
				<td>{el[3].name}</td>
				<td>{el[4].name}</td>
				<td>{el[1].name}</td>
				<td>{el[0].name}</td>
				<td>{el.org}</td>
				<td>{el.taluopai}</td>
				<td>{el.top}</td>
				{rowspan.isName ? (
					<td rowspan={rowspan.isName ? el.rowspan : 0}>
						{el.yuan.name}
					</td>
				) : (
					""
				)}
				{rowspan.isTitle ? (
					<td rowspan={rowspan.isTitle ? el.rowspan : 0}>
						{el.yuan.title}
					</td>
				) : (
					""
				)}
			</tr>
		);
	});
	return dom;
}

export default defineComponent({
	async setup() {
		// 使用数据库
		const database: any = useDataBase();

		// 获取指定表的数据list
		const gatherDocument = await database.gather.find().exec();

		const dataAll = switchArray(gatherDocument, true);
		console.log(dataAll);
		const dom = CreatDom(dataAll);
		// const CreatDom = () => {
		// 	let colspan: any = {
		// 		name: "",
		// 		isName: true,
		// 		isTitle: true,
		// 	};
		// 	const dom = dataAll.map((el: any) => {
		// 		if (colspan.name == el.yuan.name) {
		// 			colspan.isName = false;
		// 			colspan.isTitle = false;
		// 		} else {
		// 			colspan.name = el.yuan.name;
		// 			colspan.isName = true;
		// 			colspan.isTitle = true;
		// 		}
		// 		aa();
		// 		return h(
		// 			<tr>
		// 				<td>{el.power}</td>
		// 				<td>{el[9].name}</td>
		// 				<td>{el[8].name}</td>
		// 				<td>{el[7].name}</td>
		// 				<td>{el[6].name}</td>
		// 				<td>{el[5].name}</td>
		// 				<td>{el[4].name}</td>
		// 				<td>{el[3].name}</td>
		// 				<td>{el[4].name}</td>
		// 				<td>{el[1].name}</td>
		// 				<td>{el[0].name}</td>
		// 				<td>{el.org}</td>
		// 				<td>{el.taluopai}</td>
		// 				<td>{el.top}</td>
		// 				{colspan.isName ? (
		// 					<td rowspan={colspan.isName ? el.colspan : 0}>
		// 						{el.yuan.name}
		// 					</td>
		// 				) : (
		// 					""
		// 				)}
		// 				{colspan.isTitle ? (
		// 					<td rowspan={colspan.isTitle ? el.colspan : 0}>
		// 						{el.yuan.title}
		// 					</td>
		// 				) : (
		// 					""
		// 				)}
		// 			</tr>
		// 		);
		// 	});
		// 	return dom;
		// };

		return () => (
			<table class="table">
				<thead>
					<tr>
						<td>序列权柄</td>
						<td>序列九</td>
						<td>序列八</td>
						<td>序列七</td>
						<td>序列六</td>
						<td>序列五</td>
						<td>序列四</td>
						<td>序列三</td>
						<td>序列二</td>
						<td>序列一</td>
						<td>序列零</td>
						<td>主要途径组织</td>
						<td>塔罗牌</td>
						<td>现存高位者</td>
						<td>源质</td>
						<td>旧日称号</td>
					</tr>
				</thead>
				<tbody>{dom}</tbody>
			</table>
		);
	},
});
