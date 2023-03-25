const checkString = (name: string) => {
	const nameArray: Array<string> = ["皇室", "家族"];
	for (const str of nameArray) {
		return name.replace(str, "");
	}
};

const switchArray = (items: Array<any>, isSort: boolean = false) => {
	const newArray: Array<any> = [];
	items.forEach((item: any) => {
		newArray.push(item.toMutableJSON());
	});
	if (isSort) {
		return newArray.sort(orderBy);
	}
	return newArray;
};

function orderBy(a: any, b: any) {
	return a.orderby - b.orderby;
}

const checkMain = (main: any, organization?: any, yuanzhi?: any) => {
	const newArray = main.map((way: any) => {
		organization.forEach((org: any) => {
			if (org.way.includes(way.name) && org.ismian) {
				if (!way.org) {
					way.org = org.name;
				} else {
					way.org = checkString(org.name + " / " + way.org);
				}
			}
		});
		yuanzhi.forEach((yz: any) => {
			if (yz.ways.includes(way.name)) {
				way.yuanzhi = yz;
				way.colspan = yz.ways.length;
			}
		});
		way.order.forEach((cur: any) => {
			way[cur.num] = cur;
			return;
		});
		return way;
	});
	return newArray;
};

export { checkMain, switchArray };
