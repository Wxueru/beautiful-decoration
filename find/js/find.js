app.controller("findCtrl", function ($scope, $css, $http) {
	$scope.img = 'http://zm.jia.com/watermark?src=http%3A%2F%2Fimgmall.tg.com.cn%2Fgroup1%2FM00%2F09%2FC1%2FCgooa1aMlx-9qN8JAAwLVKYxFis912_1500x1500.jpg'
    $css.removeAll();
    $css.add('./find/css/find.css');
	$('.header-find').html('发现');
	$('.header').show();
	$('.footer').show();
	$('.footer .index-img2').hide();
	$('.footer .index-img1').show();
	$('.footer .index-f').show();
	$('.footer .index-ff').hide();
	$http.get("http://localhost:8888/data/data.json").success(function(data){
		$scope.find = data.case;
	});
});
