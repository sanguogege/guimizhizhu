export default [
	{
		ways: {
			schema: {
				title: "ways schema",
				description: "describes a way",
				version: 1,
				primaryKey: {
					key: "id",
					fields: ["name"],
					separator: "|",
				},
				type: "object",
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
					xx: {
						type: "string",
						default: "nihao",
					},
				},
			},
			migrationStrategies: {
				0: function (oldDoc: any) {
					return null;
				},
			},
		},
	},
	{
		organization: {
			schema: {
				title: "organization schema",
				description: "organization a way",
				version: 1,
				primaryKey: {
					key: "id",
					fields: [
						"name",
						"top",
						"way",
						"member",
						"shiji",
						"type",
						"nickname",
						"born",
						"other",
						"now",
						"childorg",
						"partway",
						"tip",
						"ismian",
					],
					separator: "|",
				},
				type: "object",
				properties: {
					properties: {
						id: {
							type: "string",
							maxLength: 100,
						},
						name: {
							type: "string",
							maxLength: 30,
						},
						top: {
							type: "string",
							default: "",
						},
						way: {
							type: "array",
							items: {
								type: "string",
							},
						},
						member: {
							type: "array",
							items: {
								type: "string",
							},
						},
						shiji: {
							type: "array",
							items: {
								type: "string",
							},
						},
						type: {
							type: "string",
							default: "",
						},
						nickname: {
							type: "string",
							default: "",
						},
						born: {
							type: "string",
							default: "",
						},
						other: {
							type: "string",
							default: "",
						},
						now: {
							type: "string",
							default: "",
						},
						childorg: {
							type: "string",
							default: "",
						},
						partway: {
							type: "string",
							default: "",
						},
						tip: {
							type: "string",
							default: "",
						},
						ismain: {
							type: "boolean",
							default: false,
						},
					},
				},
			},
			migrationStrategies: {
				2: function () {
					return null;
				},
			},
		},
	},
	{
		yuanzhi: {
			schema: {
				title: "yuanzhi schema",
				description: "yuanzhi a way",
				version: 1,
				primaryKey: {
					key: "id",
					fields: ["name", "title", "ways", "des"],
					separator: "|",
				},
				type: "object",
				properties: {
					id: {
						type: "string",
						maxLength: 100,
					},
					name: {
						type: "string",
						default: "",
					},
					title: {
						type: "string",
						default: "",
					},
					ways: {
						type: "array",
						items: {
							type: "string",
						},
					},
					des: {
						type: "array",
						items: {
							type: "string",
						},
					},
				},
			},
			migrationStrategies: {
				2: function () {
					return null;
				},
			},
		},
	},
];
