const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
	fixBabelImports("import", {
		libraryName: "antd",
		libraryDirectory: "es",
		style: true
	}),
	addLessLoader({
		javascriptEnabled: true,
		modifyVars: {
			"@text-color": "rgb(24, 144, 255)",
			"@text-color-secondary": "rgba(24, 144, 255, 0.8)",
			"@table-row-hover-bg": "transparent"
		}
	})
);
