const pp = require("project-paths"),
	path = require("path"),
	projectMeta = require(pp.getA("/", "project.meta.json"));

const plugins = {
	extractTextPlugin: require("extract-text-webpack-plugin"),
	htmlWebpackPlugin: require("html-webpack-plugin"),
	clean: require("webpack-cleanup-plugin")
};

/**
 * Возвращает общие настройки webpack
 * которые свойственны всем видам окружения
 * @param env Текущее окружение
 * @returns WebpackConfigObject
 */
module.exports = function (env) {

	// Список зависимостей из файла package.json
	// для записи в отдельный файл vendors.
	const dependencies = Object.keys(require(pp.getA("/", "package.json")).dependencies || {});

	// входные точки для webpack
	let entry = {
		app: pp.getA("src", "index.ts")
	};

	if (dependencies.length) entry.vendors = dependencies;

	return {
		entry,

		output: {
			path: pp.getA("build"),
			filename: path.join("assets", "js", "[name].bundle.[hash].js"),
			chunkFilename: "[id].bundle.[hash].js"
		},

		resolve: {
			extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".sass", ".scss", ".vue"],
			modules: [pp.get("/", "node_modules")],
			alias: {
				_fonts: pp.get("assets", "fonts"),
				_img: pp.get("assets", "img"),
				_styles: pp.get("assets", "styles")
			}
		},

		module: {
			rules: [
				{
					test: /\.ejs$/,
					loader: "ejs-loader"
				},

				{
					test: /\.json$/,
					loader: "json-loader",
					exclude: [/node_modules/]
				},

				{
					test: /\.vue$/,
					loader: "vue-loader",
					options: {
						hotReload: env == "dev",
						loaders: {
							ts: "ts-loader"
						},
						esModule: true
					}
				},

				{
					test: /\.tsx?$/,
					exclude: /node_modules/,
					loader: "ts-loader",
					options: {
						appendTsSuffixTo: [/\.vue$/]
					}
				},

				{
					test: /\.js$/,
					loader: "babel-loader",
					exclude: [/node_modules/],
					query: {
						presets: ["es2015", "stage-0", "stage-1"]
					}
				},

				{
					test: /\.s[ac]ss$/,
					// use: ((env == "dev") ? [{loader:"css-hot-loader"}] :[]).concat(
					// 	[
					// 		{ loader: plugins.miniCssExtract.loader },
					// 		{ loader: "style-loader" },
					// 		{ loader: "css-loader" },
					// 		{ loader: "sass-loader?sourceMap" },
					// 		{ loader: "sass-bulk-import-loader" },
					// 		{ loader:  "group-css-media-queries-loader" },
					// 		{ loader: "resolve-url-loader" }
					// 	]
					// )
					use: (env == "dev" ? ["css-hot-loader"] : []).concat(
						plugins.extractTextPlugin.extract({
							fallback: "style-loader",
							use: "css-loader!sass-loader?sourceMap!sass-bulk-import-loader!group-css-media-queries-loader!resolve-url-loader"
						})
					)
				},

				{
					test: /\.css$/,
					// use: ((env == "dev") ? [{loader: "css-hot-loader"}] :[]).concat([
					// 	{ loader: plugins.miniCssExtract.loader },
					// 	{ loader: "style-loader" },
					// 	{ loader: "css-loader" }
					// ])
					use: (env == "dev" ? ["css-hot-loader"] : []).concat(
						plugins.extractTextPlugin.extract({
							fallback: "style-loader",
							use: ["css-loader"]
						})
					)
				},

				{
					test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png$|\.jpe?g$|\.gif$/,
					loader: "file-loader",
					options: {
						name: "[path]/[name].[ext]"
					}
				},

				{
					test: /\.DS_Store/,
					loader: "ignore-loader"
				}
			]
		},

		plugins: [
			new plugins.extractTextPlugin(pp.get("styles", "[name].css"), {
				allChunks: true,
				disable: env == "dev"
			}),
			new plugins.htmlWebpackPlugin({
				...projectMeta,
				filename: "index.html",
				chunks: ["vendors", "app"],
				template: pp.get("templates", "index.ejs")
			}),
			new plugins.clean()
		]
	};
};
