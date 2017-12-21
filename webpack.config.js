var webpack = require('webpack')

var ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "./public/scss/scss.css",
    disable: process.env.NODE_ENV === "development"
});


const scssUse = function () {
	
	if(process.env.NODE_ENV === "production") {

		return extractSass.extract({
	                use: [{
	                    loader: "css-loader"
	                }, {
	                    loader: "sass-loader"
	                }],
	                fallback: "style-loader"
	            });

	} else {
		return [{
	                loader: "style-loader"
	            }, {
	                loader: "css-loader"
	            }, {
	                loader: "sass-loader",
	                options: {
	                    includePaths: ["absolute/path/a", "absolute/path/b"]
	                }
	            }];
	}

}


module.exports = {
	entry: './index.js',
	output: {
		filename: './public/bundle.js',
	},
	module: {
		loaders: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader?presets[]=es2015&presets[]=react' 
			},
			{
                test: /\.scss$/,
                use: scssUse()
            }
		],
	},
    plugins: [
        extractSass
    ]
}



