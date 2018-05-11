const pp = require("project-paths"),
	webpack = require("webpack");

const plugins = {
	hotModuleReplacement: webpack.HotModuleReplacementPlugin,
	extractTextPlugin: require("extract-text-webpack-plugin"),
	environment: webpack.EnvironmentPlugin
};

function getConfig () {

	return {

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
				"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
				"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
			}
		},

		plugins: [
			new plugins.environment({...process.env})
		]
	};
}

module.exports = getConfig();
