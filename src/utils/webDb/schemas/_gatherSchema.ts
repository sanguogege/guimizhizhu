const primaryKey = {
	key: "id",
	fields: ["name", "power", "taluopai", "colspan", "top", "orderby", "yuan"],
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
		org: {
			type: "string",
			default: "——",
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
		9: {
			type: "object",
			properties: {
				name: {
					type: "string",
					default: "",
				},
				num: {
					type: "number",
					default: 0,
				},
				type: {
					type: "string",
					default: "",
				},
			},
		},
		8: {
			type: "object",
			properties: {
				name: {
					type: "string",
					default: "",
				},
				num: {
					type: "number",
					default: 0,
				},
				type: {
					type: "string",
					default: "",
				},
			},
		},
		7: {
			type: "object",
			properties: {
				name: {
					type: "string",
					default: "",
				},
				num: {
					type: "number",
					default: 0,
				},
				type: {
					type: "string",
					default: "",
				},
			},
		},
		6: {
			type: "object",
			properties: {
				name: {
					type: "string",
					default: "",
				},
				num: {
					type: "number",
					default: 0,
				},
				type: {
					type: "string",
					default: "",
				},
			},
		},
		5: {
			type: "object",
			properties: {
				name: {
					type: "string",
					default: "",
				},
				num: {
					type: "number",
					default: 0,
				},
				type: {
					type: "string",
					default: "",
				},
			},
		},
		4: {
			type: "object",
			properties: {
				name: {
					type: "string",
					default: "",
				},
				num: {
					type: "number",
					default: 0,
				},
				type: {
					type: "string",
					default: "",
				},
			},
		},
		3: {
			type: "object",
			properties: {
				name: {
					type: "string",
					default: "",
				},
				num: {
					type: "number",
					default: 0,
				},
				type: {
					type: "string",
					default: "",
				},
			},
		},
		2: {
			type: "object",
			properties: {
				name: {
					type: "string",
					default: "",
				},
				num: {
					type: "number",
					default: 0,
				},
				type: {
					type: "string",
					default: "",
				},
			},
		},
		1: {
			type: "object",
			properties: {
				name: {
					type: "string",
					default: "",
				},
				num: {
					type: "number",
					default: 0,
				},
				type: {
					type: "string",
					default: "",
				},
			},
		},
		0: {
			type: "object",
			properties: {
				name: {
					type: "string",
					default: "",
				},
				num: {
					type: "number",
					default: 0,
				},
				type: {
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
