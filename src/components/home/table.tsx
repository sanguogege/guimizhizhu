import { defineComponent, h } from "vue";
import { useDataBase } from "@/utils/webDb";
import { switchArray } from "@/utils/checkdata";
import gsap from "gsap";
import "@/assets/css/table.css";

function getRowspan(el: any, rowspan: any) {
	if (rowspan.name == el.yuan.name) {
		rowspan.isName = false;
		rowspan.isTitle = false;
	} else {
		rowspan.name = el.yuan.name;
		rowspan.isName = true;
		rowspan.isTitle = true;
	}
	return rowspan;
}
const bgSet: any = {
	源堡: { name: "yuanbao" },
	永暗之河: { name: "yonganzhihe" },
	混沌海: { name: "hundunhai" },
	知识荒野: { name: "zhishihuangye" },
	失序之国: { name: "shixuzhiguo" },
	灾祸之城: { name: "zaihuozhicheng" },
	母巢: { name: "muchao" },
	暗影世界: { name: "anyingshijie" },
	光之钥: { name: "guangzhishi" },
};
function SetBack(yuan: string, name: string = "") {
	if (name != "源堡") {
		return bgSet[yuan].name;
	}
}

function CreatDom(data: any) {
	let rowcon: any = {
		name: "",
		isName: true,
		isTitle: true,
	};
	const dom = data.map((el: any) => {
		const rowspan = getRowspan(el, rowcon);
		return h(
			<tr>
				<td>{el.power}</td>
				<td>{el[9].name}</td>
				<td>{el[8].name}</td>
				<td>{el[7].name}</td>
				<td>{el[6].name}</td>
				<td>{el[5].name}</td>
				<td class={SetBack(el.yuan.name, el.yuan.name)}>
					{el[4].name}
				</td>
				<td class={SetBack(el.yuan.name)}>{el[3].name}</td>
				<td class={SetBack(el.yuan.name)}>{el[4].name}</td>
				<td class={SetBack(el.yuan.name)}>{el[1].name}</td>
				<td class={SetBack(el.yuan.name)}>{el[0].name}</td>
				<td>{el.org}</td>
				<td>{el.taluopai}</td>
				<td>{el.top}</td>
				{rowspan.isName ? (
					<td
						class={SetBack(el.yuan.name)}
						rowspan={rowspan.isName ? el.rowspan : 0}
					>
						{el.yuan.name}
					</td>
				) : (
					""
				)}
				{rowspan.isTitle ? (
					<td
						class={SetBack(el.yuan.name)}
						rowspan={rowspan.isTitle ? el.rowspan : 0}
					>
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
		const line = gsap.timeline();
		line.from(".table ", {
			duration: 4,
			ease: "power2",
			opacity: 0,
			y: -1600,
		});
		// 获取指定表的数据list
		const gatherDocument = await database.gather.find().exec();

		const dataAll = switchArray(gatherDocument, true);
		const dom = CreatDom(dataAll);
		// console.log(dom);
		// const CreatDom = () => {
		// 	let rowspan: any = {
		// 		name: "",
		// 		isName: true,
		// 		isTitle: true,
		// 	};
		// 	const dom = dataAll.map((el: any) => {
		// 		if (rowspan.name == el.yuan.name) {
		// 			rowspan.isName = false;
		// 			rowspan.isTitle = false;
		// 		} else {
		// 			rowspan.name = el.yuan.name;
		// 			rowspan.isName = true;
		// 			rowspan.isTitle = true;
		// 		}
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
		// 				{rowspan.isName ? (
		// 					<td rowspan={rowspan.isName ? el.rowspan : 0}>
		// 						{el.yuan.name}
		// 					</td>
		// 				) : (
		// 					""
		// 				)}
		// 				{rowspan.isTitle ? (
		// 					<td rowspan={rowspan.isTitle ? el.rowspan : 0}>
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
			<table class="sequencetable">
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
