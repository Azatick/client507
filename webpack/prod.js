const pp = require("project-paths"),
	webpack = require("webpack");

const plugins = {
	extractTextPlugin: require("extract-text-webpack-plugin"),
	definePlugin: webpack.DefinePlugin,
	depudePluign: webpack.optimize.DedupePlugin,
	aggresiveMerging: webpack.optimize.AggressiveMergingPlugin
};

function getConfig () {

	return {
		entry: {
			app: pp.get("src", "index.ts")
		},

		plugins: [
			new plugins.extractTextPlugin("./assets/styles/[name].css", {
				allChunks: true
			}),
			new webpack.DefinePlugin({
				"process.env": {
					NODE_ENV: JSON.stringify("production")
				}
			}),
			new plugins.aggresiveMerging()
		]
	};

}

module.exports = getConfig();
