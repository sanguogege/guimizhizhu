const primaryKey = {
	key: "id",
	fields: [
		"name",
		"power",
		"taluopai",
		"colspan",
		"top",
		"orderby",
		"order",
		"org",
		"yuan",
	],
	separator: "|",
};

const properties = {
	properties: {
		id: {
			type: "string",
			maxLength: 100,
		},
		name: {
			type: "string",
			default: "",
		},
		power: {
			type: "string",
			default: "",
		},
		taluopai: {
			type: "string",
			default: "",
		},
		top: {
			type: "string",
			default: "",
		},
		orderby: {
			type: "number",
			default: 0,
		},
		order: {
			type: "array",
			uniqueItems: true,
			items: {
				type: "object",
				properties: {
					num: {
						type: "number",
					},
					name: {
						type: "string",
					},
					func: {
						type: "string",
					},
					main: {
						type: "string",
					},
					assist: {
						type: "string",
					},
					ceremony: {
						type: "string",
					},
				},
			},
		},
		org: {
			type: "string",
			default: "",
		},
		yuan: {
			type: "object",
			properties: {
				name: {
					type: "string",
					default: "",
				},
				title: {
					type: "string",
					default: "",
				},
			},
		},
	},
};

export default {
	gather: {
		schema: {
			title: "gather schema",
			description: "汇总页面的数据集合",
			version: 1,
			primaryKey: primaryKey,
			type: "object",
			properties: properties,
		},
		migrationStrategies: {
			0: function () {
				return null;
			},
		},
	},
};
