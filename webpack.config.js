const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: "./src/js/index.tsx",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(t|j)sx?$/,
				exclude: /(node_modules)/,
				loader: "awesome-typescript-loader"
			}
		]
	},
	resolve: { extensions: [".ts", ".tsx", ".js", ".jsx"] },
	output: {
		path: path.resolve(__dirname, "dist/"),
		publicPath: "/dist/",
		filename: "bundle.js"
	},
	devServer: {
		contentBase: path.join(__dirname, "public/"),
		port: 3000,
		publicPath: "http://localhost:3000/dist/",
		hotOnly: true
	},
	devtool: "source-map",
	plugins: [new webpack.HotModuleReplacementPlugin()]
};
