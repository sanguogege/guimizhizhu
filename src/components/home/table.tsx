import { defineComponent, h } from "vue";
import { RouterLink } from "vue-router";
import { useDataBase } from "@/utils/webDb";
import { switchArray } from "@/utils/checkdata";
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
function SetBgClass(yuan: string, name: string = "") {
	let className: string = "";
	if (name != "源堡") {
		className = bgSet[yuan].name;
	}
	return className;
}

function SetFontClass(name: string, num: number) {
	if (name == "lieren" && num <= 4) {
		return "male";
	} else if (name == "cike" && num <= 7) {
		return "female";
	} else if (name == "gengzhongzhe" && num <= 2) {
		return "female";
	} else if (name == "yaoshi" && num <= 1) {
		return "female";
	}
}

function DoubleCheck(name: string) {
	if (!name) {
		return {
			router: "",
			isSingle: true,
			name: "",
		};
	}
	if (name.indexOf("/") != -1) {
		if (name.indexOf("皇室") != -1) {
			const first = name.split("/");
			const last = first.map((e: any) => {
				if (e.indexOf("皇室") == -1) {
					return (e = e + "皇室");
				}
				return e;
			});
			return {
				router: last,
				name: first,
				isSingle: false,
			};
		} else if (name.indexOf("家族") != -1) {
			const first = name.split("/");
			const last = first.map((e: any) => {
				if (e.indexOf("家族") == -1) {
					return (e = e + "家族");
				}
				return e;
			});

			return {
				router: last,
				name: first,
				isSingle: false,
			};
		} else {
			return {
				router: name.split("/"),
				isSingle: false,
				name: name.split("/"),
			};
		}
	} else {
		return {
			router: name,
			isSingle: true,
			name: "",
		};
	}
}

function CreatDom(data: any) {
	let rowcon: any = {
		name: "",
		isName: true,
		isTitle: true,
	};
	const dom = data.map((el: any) => {
		const isDoubleOrg = DoubleCheck(el.org);
		const isDoubleTop = DoubleCheck(el.top);
		const rowspan = getRowspan(el, rowcon);
		return h(
			<tr>
				<td>
					<RouterLink to={"/sequence/" + el.name}>
						{el.power}
					</RouterLink>
				</td>
				<td>
					<RouterLink to={"/sequence/" + el.name + "/" + el[9].name}>
						{el[9].name}
					</RouterLink>
				</td>
				<td>
					<RouterLink to={"/sequence/" + el.name + "/" + el[8].name}>
						{el[8].name}
					</RouterLink>
				</td>
				<td>
					<RouterLink
						class={SetFontClass(el.name, el[7].num)}
						to={"/sequence/" + el.name + "/" + el[7].name}
					>
						{el[7].name}
					</RouterLink>
				</td>
				<td>
					<RouterLink
						class={SetFontClass(el.name, el[6].num)}
						to={"/sequence/" + el.name + "/" + el[6].name}
					>
						{el[6].name}
					</RouterLink>
				</td>
				<td>
					<RouterLink
						class={SetFontClass(el.name, el[5].num)}
						to={"/sequence/" + el.name + "/" + el[5].name}
					>
						{el[5].name}
					</RouterLink>
				</td>
				<td class={SetBgClass(el.yuan.name, el.yuan.name)}>
					<RouterLink
						class={SetFontClass(el.name, el[4].num)}
						to={"/sequence/" + el.name + "/" + el[4].name}
					>
						{el[4].name}
					</RouterLink>
				</td>
				<td class={SetBgClass(el.yuan.name)}>
					<RouterLink
						class={SetFontClass(el.name, el[3].num)}
						to={"/sequence/" + el.name + "/" + el[3].name}
					>
						{el[3].name}
					</RouterLink>
				</td>
				<td class={SetBgClass(el.yuan.name)}>
					<RouterLink
						class={SetFontClass(el.name, el[2].num)}
						to={"/sequence/" + el.name + "/" + el[2].name}
					>
						{el[2].name}
					</RouterLink>
				</td>
				<td class={SetBgClass(el.yuan.name)}>
					<RouterLink
						class={SetFontClass(el.name, el[1].num)}
						to={"/sequence/" + el.name + "/" + el[1].name}
					>
						{el[1].name}
					</RouterLink>
				</td>
				<td class={SetBgClass(el.yuan.name)}>
					<RouterLink
						class={SetFontClass(el.name, el[0].num)}
						to={"/sequence/" + el.name + "/" + el[0].name}
					>
						{el[0].name}
					</RouterLink>
				</td>
				{isDoubleOrg.isSingle ? (
					<td width="160">
						<RouterLink
							to={
								(isDoubleOrg.router as string) == ""
									? "/org"
									: "/org/" + isDoubleOrg.router
							}
						>
							{isDoubleOrg.router == ""
								? "——"
								: isDoubleOrg.router}
						</RouterLink>
					</td>
				) : (
					<td width="160">
						<RouterLink to={"/org/" + isDoubleOrg.router[0]}>
							{isDoubleOrg.name[0]}
						</RouterLink>
						/
						<RouterLink to={"/org/" + isDoubleOrg.router[1]}>
							{isDoubleOrg.name[1]}
						</RouterLink>
					</td>
				)}
				<td width="120">
					<RouterLink to={"/taluopai/" + el.taluopai}>
						{el.taluopai}
					</RouterLink>
				</td>
				{isDoubleTop.isSingle ? (
					<td width="160">
						<RouterLink
							to={("/role/" + isDoubleTop.router) as string}
						>
							{el.top}
						</RouterLink>
					</td>
				) : (
					<td width="160">
						<RouterLink to={"/role/" + isDoubleTop.router[0]}>
							{isDoubleTop.router[0]}
						</RouterLink>
						/
						<RouterLink to={"/role/" + isDoubleTop.router[1]}>
							{isDoubleTop.router[1]}
						</RouterLink>
					</td>
				)}
				{rowspan.isName ? (
					<td
						class={SetBgClass(el.yuan.name)}
						rowspan={rowspan.isName ? el.rowspan : 0}
					>
						<RouterLink to={"/yuan/" + el.yuan.name}>
							{el.yuan.name}
						</RouterLink>
					</td>
				) : (
					""
				)}
				{rowspan.isTitle ? (
					<td
						width="250"
						class={SetBgClass(el.yuan.name)}
						rowspan={rowspan.isTitle ? el.rowspan : 0}
					>
						<RouterLink to={"/yuan/" + el.yuan.name}>
							{el.yuan.title}
						</RouterLink>
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
		const dom = CreatDom(dataAll);
		return () => (
			<table class="sequencetable">
				<thead>
					<tr class="tabletop">
						<td colspan="16">诡秘之主途径大全</td>
					</tr>
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
