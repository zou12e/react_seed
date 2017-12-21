var fs = require('fs')
var path = require('path')


/**

	entry: bundle的入口点

	output:   编译后
	{
		
		filename:    指定输出到硬盘的文件的的文件名
		path:        绝对路径
		publicPath:  指定了一个在浏览器中被引用的URL地址
	}


	target:编译到的目标使用环境

	externals:  指定的依赖不会被webpack解析，但会成为bundle里的依赖。output.libraryTarget.决定着依赖的类型


	module:
	{
	
		loaders: 自动引用的加载器的数组 
		{
			test: 必须满足的条件
			exclude: 不满足的条件
			include: 必须满足条件
			loader: 用 "!" 隔开多个loader
			loaders: 多个loader
		}

	}

**/

module.exports = {

  entry: path.resolve(__dirname, 'server.js'),

  output: {
    filename: 'server.bundle.js'
  },


  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules'))
  			.reduce(
	  			function (ext, mod) {
	   				ext[mod] = 'commonjs ' + mod
	   				return ext
				}, {}
			),

  target: 'node',

  node: {
    __filename: false,
    __dirname: false
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
			use: [{
					loader: "iso-morphic-style-loader" // 将 JS 字符串生成为 style 节点
			}, {
					loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
			}, {
					loader: "sass-loader" // 将 Sass 编译成 CSS
			}]
		}
    ]
  }

}


