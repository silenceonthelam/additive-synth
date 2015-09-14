var webpack = require("webpack"),
    WebpackDevServer = require("webpack-dev-server"),
    config = require("./webpack.config");


new WebpackDevServer(webpack(config), {
	cache: false,
    publicPath: config.output.publicPath,
    hot: true,
    stats: { colors: true }
}).listen(8080, "0.0.0.0", function(err, result) {
    if (err) {
        console.log(err);
    }
    console.log("listening on port 8080");
});