const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	devtool: 'inline-source-map',
	entry: './src/index.tsx',
	mode: 'development',
	devServer: {
		contentBase: './dist',
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				use: 'url-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					getCustomTransformers: require('./ts-relay-transform'),
				},
				exclude: /node_modules/,
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			inject: 'body',
			title: 'PokeDex!',
			template: 'index.html',
		})
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};
