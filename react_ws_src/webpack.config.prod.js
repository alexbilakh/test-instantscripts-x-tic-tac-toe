var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	devtool: 'source-map',
	entry: [
		'../src/app'
	],
	context: path.join(__dirname, 'static'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: './'
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		})
	],
	module: {
		loaders: [
			{
				test: /\.(ico|gif|png|html|jpg|swf|xml|svg)$/,
				loader: 'file?name=[path][name].[ext]'
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(
					'style',
					'css!sass'
				)
			},
			{
				test: /\.jsx?/,
				loaders: ['babel'],
				include: path.join(__dirname, 'src')
			},
			{
				test: /(flickity|fizzy-ui-utils|get-size|unipointer|imagesloaded)/,
				loader: 'imports?define=>false&this=>window'
			},
		]
	},
}
