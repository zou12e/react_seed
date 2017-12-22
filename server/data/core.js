
const http=require('http')



function getDataCore(options,params ,func){

	var req = http.request(options, function (res) {
		res.setEncoding('utf-8');
		var resdata  = "" ;
		res.on('data', function (ret) {
			resdata+=ret;
		});
		res.on('end', function () {
			func && func(resdata);
		});
	});
	req.on('error', function (e) {
		func && func();
	});
	params && req.write(params); 
	req.end();

}

function getInfo(openid) {
	
	// getDataCore({
	// 	hostname: "121.42.137.146",
	// 	port:"8888",
	// 	path: "/data",
	// 	method: "get",
	// 	headers:{ 'Content-Type':'application/json;charset=UTF-8'}
	// },{},function(ret) {

	// 	console.info(ret);

	// });
    return 	{
				logo: "/img/haoke/no_logo.png",
				name: "Jeff",
				id: 11312321,
				coupon_size: 3,
			}
}


function getList() {
	
   
}

export {
	getInfo,
	getList
} 