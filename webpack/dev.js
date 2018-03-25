const pp = require("project-paths"),
	webpack = require("webpack");

const plugins = {
	hotModuleReplacement: webpack.HotModuleReplacementPlugin,
	extractTextPlugin: require("extract-text-webpack-plugin"),
	environment: webpack.EnvironmentPlugin
};

function getConfig () {

	return {
		// entry: {
		// 	app: [
		// 		"webpack-hot-middleware/client?http://localhost:9000",
		// 		pp.get("src", "index.ts")
		// 	]
		// },

		context: pp.getA("/"),

		devtool: "eval",

		output: {
			publicPath: "/"
		},

		devServer: {
			contentBase: pp.getA("build"),
			hot: true,
			inline: true,
			quiet: false,
			noInfo: false,
			disableHostCheck: true,
			stats: {
				assets: false,
				colors: true,
				version: false,
				hash: false,
				timings: false,
				chunks: false,
				chunkModules: false
			},
			historyApiFallback: true,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Credentials": "true",
				"Access-Control-Allow-Headers": "Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
				"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
			}
		},

		plugins: [
			// new plugins.hotModuleReplacement(),
			new plugins.environment({...process.env})
		]
	};
}

module.exports = getConfig();
