		


import express from 'express'
import path from 'path'
import compression from 'compression'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import RouterList from './modules/Routes'



let	app = express()
app.use(compression());
app.use(express.static(path.join(__dirname,'public')));
app.get('*',(req, res) => {
	const context = {}
	const html = renderToString(
		<StaticRouter location={req.url} context={context}>
		 <RouterList />
		</StaticRouter>
	)
	if (context.url) {
		res.writeHead(302, { Location: context.url })
		res.end()
	} else {
		res.send(renderPage(html))
		res.end()
	}
});



function renderPage(appHtml) {
	return `
		<!doctype html public="storage">
	<html>
	<meta charset=utf-8/>
	<title>My</title>
	<link rel=stylesheet href=/css/scss.css>
	<div id=app>${appHtml}</div>
	<script src="/bundle.js"></script>
	 `
}


var PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
	
	console.log("Start Sever:"+PORT);
})
