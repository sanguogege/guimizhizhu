/** 按照路由中meta下的rank等级升序来排序路由 */
function ascending(arr: any[]) {
	return arr.sort(
		(a: { meta: { order: number } }, b: { meta: { order: number } }) => {
			return a?.meta.order - b?.meta.order;
		}
	);
}

// 根据条件将二级路由转变成一级路由
function TransormRouter(router: any) {
	const topRouter: any = [];
	router.forEach((v: any) => {
		const child = v.children;
		topRouter.push(...child.filter((r: any) => r.meta.top));
	});
	console.log(topRouter);
	return ascending(topRouter);
}

export { TransormRouter };
