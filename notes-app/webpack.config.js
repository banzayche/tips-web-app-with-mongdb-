var webpack = require('webpack');

module.exports = {
	entry: "./cliet/main.js",
	output: {
		path: __dirname + '/public/build/',
		publicPath: "build/",
		filename: "bundle.js"
	},
	module: {
		loaders: [
		]
	}
}