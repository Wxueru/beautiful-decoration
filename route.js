//获取AngularJS应用程序
// module：第一个参数是ng-app指令的值 ，第二个参数为数组，元素位字符串，是依赖模块的名称
var app = angular.module('myApp',['ngRoute','angularCSS']);


//配置路由
app.config(['$routeProvider',function($routeProvider){
//	使用$routeProvider服务处理各种锚点的值  并返回不同的页面
	$routeProvider
	.when('/',{//判断 /,并返回home.html文件
		templateUrl: ' ./find/htmls/find.html',
		controller:'findCtrl'
	})
	.when('/case',{//判断 /case,并返回case.html文件
		templateUrl: ' ./case/htmls/case.html',
		controller:'caseCtrl'
	})
	.when('/diary',{
		templateUrl: ' ./diary/htmls/diary.html',
		controller:'diaryCtrl'
	})
	.when('/strategy',{
		templateUrl: ' ./strategy/htmls/strategy.html',
		controller:'strategyCtrl'
	})
	.when('/inspiration',{
		templateUrl: ' ./inspiration/htmls/inspiration.html',
		controller:'inspirationCtrl'
	})
	.when('/strategy-design',{
		templateUrl: ' ./strategy/htmls/strategy-design.html',
		controller:'strategy-designCtrl'
	})
	.when('/strategy-demo',{
		templateUrl: ' ./strategy/htmls/strategy-demo.html',
		controller:'strategy-demoCtrl'
	})
	.otherwise({
		redirectTo:'/'    //重定向到首页
	})

}]);
