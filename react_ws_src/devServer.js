var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// app.use(express.static(paths.client('images')))
// app.use(express.static('static'))

var proxy = require('proxy-middleware');
var url = require('url');
// app.use('/images', proxy(url.parse('../WS/images')));
// app.use('/img', proxy(url.parse('../WS/img')));
app.use('/images', proxy(url.parse('http://z2/projs/kisla/X-react-starter/dev/WS/images')));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.listen(3000, '0.0.0.0', function(err) {
	if (err) {
		console.log(err);
		return;
	}
	console.log('Listening at http://0.0.0.0:3000');
});
