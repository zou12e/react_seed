		


import express from 'express'
import path from 'path'
import compression from 'compression'

// var express = require('express')
// var path = require('path')
// var compression = require('compression')

let  app = express()


app.use(compression());

app.use(express.static(path.join(__dirname,'public')));


var PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
	
	console.log("Start Sever:"+PORT);
})
