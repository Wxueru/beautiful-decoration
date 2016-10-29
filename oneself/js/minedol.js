app.controller("minedolCtrl", function ($scope, $css, $http) {
	// $scope.img = 'http://zm.jia.com/watermark?src=http%3A%2F%2Fimgmall.tg.com.cn%2Fgroup1%2FM00%2F09%2FC1%2FCgooa1aMlx-9qN8JAAwLVKYxFis912_1500x1500.jpg'
    $css.removeAll();
    $css.add('./oneself/css/minedol.css');
	$('.header').hide();
	$('.footer').hide();
	// $http.get("http://localhost:8888/data/data.json").success(function(data){
	// 	$scope.find = data.case;
	// });
});
