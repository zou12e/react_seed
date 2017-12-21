# react-seed

nodejs + express + react + react-router + webpack


--save-dev 是你开发时候依赖的东西;
--save     是你发布之后还依赖的东西。


--save-dev : dependencies
--save     : devDependencies


-- 错误

-- Module not found: Error: Can't resolve  
没有找到模块，可能是路径错了




-- Warning: Failed prop type: The prop `history` is marked as required in `Router`, but its value is `undefined`. in Router
react-router4.0以上的api改变了



-- Module build failed: SyntaxError: Unexpected token (36:37)
webpack.server.config.js 没有选择编译react


--return window && document && document.all && !window.atob;
服务器打包scss不同