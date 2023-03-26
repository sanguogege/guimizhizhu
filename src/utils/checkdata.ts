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

const checkMain = (ways: any, orgs?: any, yuans?: any) => {
	const newArray = JSON.parse(JSON.stringify(ways));
	newArray.forEach((way: any) => {
		orgs.forEach((org: any) => {
			if (org.way.includes(way.name) && org.ismian) {
				if (!way.org) {
					way.org = org.name;
				} else {
					way.org = checkString(org.name + " / " + way.org);
				}
			}
		});
		yuans.forEach((yz: any) => {
			if (yz.way.includes(way.name)) {
				way.yuan = {
					name: yz.name,
					title: yz.title,
				};
				way.colspan = yz.way.length;
			}
		});
		way.order.forEach((cur: any) => {
			way[cur.num] = cur.name;
		});

		delete way.order;
		return way;
	});

	return newArray;
};

export { checkMain, switchArray };
