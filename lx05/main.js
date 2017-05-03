require.config({
	"baseUrl":"./lx05",
	"paths":{
		"css" :"../lib/css.min",
		"jquery":"../lib/jquery.min",
		"angular":"../lib/angular.min",
		"bootstrap":"../lib/bootstrap.min"
	},
	//薄垫片
	//依赖最先加载
	"shim":{
		"bootstrap":{
			"deps":["jquery","css!../css/bootstrap.min.css","css!../css/font-awesome.min.css"]
		}
	}
})