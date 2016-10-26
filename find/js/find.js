app.controller("findCtrl", function ($scope, $css) {
	$scope.img = 'http://zm.jia.com/watermark?src=http%3A%2F%2Fimgmall.tg.com.cn%2Fgroup1%2FM00%2F09%2FC1%2FCgooa1aMlx-9qN8JAAwLVKYxFis912_1500x1500.jpg'
    $css.removeAll();
    $css.add('./find/css/find.css');
});
