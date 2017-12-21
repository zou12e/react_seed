var webpack = require('webpack')

var ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: false //process.env.NODE_ENV === "development"
});



module.exports = {
	entry: './index.js',


	output: {
		
		filename: 'bundle.js',
		
	},


	module: {
		loaders: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader?presets[]=es2015&presets[]=react' 
			},

			// {
   //              test: /\.scss$/,
   //              use: extractSass.extract({
	  //               use: [{
	  //                   loader: "css-loader"
	  //               }, {
	  //                   loader: "sass-loader"
	  //               }],
	  //               fallback: "style-loader"
	  //           })
   //          }
   //          
   			{
	            test: /\.scss$/,
	            use: [{
	                loader: "style-loader"
	            }, {
	                loader: "css-loader"
	            }, {
	                loader: "sass-loader",
	                options: {
	                    includePaths: ["absolute/path/a", "absolute/path/b"]
	                }
	            }]
	        }	
		],
	},

    plugins: [
        extractSass
    ]
}



