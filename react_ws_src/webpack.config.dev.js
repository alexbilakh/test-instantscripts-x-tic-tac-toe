var path = require('path')
var webpack = require('webpack')

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	// context: path.join(__dirname, 'static'),
	entry: [
		'eventsource-polyfill', // necessary for hot reloading with IE
		'webpack-hot-middleware/client',
		'./src/app'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		// publicPath: path.join(__dirname, 'static'),
		// publicPath: __dirname + '/static/'
		publicPath: '/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.(ico|css|gif|png|html|jpg|xml|svg)$/,
					// loader: 'url?limit=10000',
				loader: 'file?name=[path][name].[ext]&context=./static',
			},
			{
				test: /\.jsx?/,
				loaders: ['babel'],
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			},
			{
				test: /(flickity|fizzy-ui-utils|get-size|unipointer|imagesloaded)/,
				loader: 'imports?define=>false&this=>window'
			},
		]
	},
}