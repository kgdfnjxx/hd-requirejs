// define(['jquery'],function(){
// 	return {
// 		change:function(){
// 			$('body').css('background','red');
// 		},
// 		show:function(){
// 			alert('后盾人');
// 		},
// 		message:function(){
// 			alert('houdunren.com');
// 		}
// 	}
// });
// 
define([],function(){
	return {
		change:function(){
			//局部调用
			require(['jquery'],function($){
				$('body').css('background','green');
			})
		},
		show:function(){
			alert('后盾人');
		},
		message:function(){
			alert('houdunren.com');
		}
	}
});