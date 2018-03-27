const pp = require("project-paths"),
	webpack = require("webpack");

// const plugins = {
// 	extractTextPlugin: require("extract-text-webpack-plugin"),
// 	definePlugin: webpack.DefinePlugin,
// 	depudePlugin: webpack.optimize.DedupePlugin,
// 	uglifyJs: webpack.optimize.UglifyJsPlugin,
// 	aggresiveMerging: webpack.optimize.AggressiveMergingPlugin
// };

function getConfig () {

	return {
		entry: {
			app: pp.get("src", "index.ts")
		},

		context: pp.root(),

		devtool: "cheap-source-map",

		output: {
			publicPath: "/"
		},

		plugins: [
			new webpack.DefinePlugin({
				"process.env": {
					NODE_ENV: JSON.stringify("production")
				}
			}),
			// new plugins.uglifyJs({
			// 	mangle: true,
			// 	compress: {
			// 		warnings: false,
			// 		pure_getters: true,
			// 		unsafe: true,
			// 		unsafe_comps: true,
			// 		screw_ie8: true
			// 	},
			// 	output: {
			// 		comments: true
			// 	},
			// 	exclude: [/\.min.js$/gi]
			// }),
			// new plugins.aggresiveMerging()
		]
	};

}

module.exports = getConfig();
