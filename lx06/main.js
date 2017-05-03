require.config({
	"baseUrl":"./lx06",
	"paths":{
		"hd" :"hd",
		"css" :"../lib/css.min",
		"jquery":"../lib/jquery.min",
		"angular":"../lib/angular.min",
		"bootstrap":"../lib/bootstrap.min"
	},
	//薄垫片
	//依赖最先加载
	"shim":{
		"hd":{
			"init":function(){
				return {
					message:message,
					success:success  //全局变量不加引号
				}
			}
			// "exports":"message"
		},
		"bootstrap":{
			"deps":["jquery","css!../css/bootstrap.min.css","css!../css/font-awesome.min.css"]
		}
	}
})