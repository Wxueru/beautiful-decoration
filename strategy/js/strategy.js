app.controller("strategyCtrl", function ($scope, $css, $http) {
    $css.removeAll();
    $css.add('./strategy/css/strategy.css');
    $('.header').show();
    $('.header-find').html('攻略');
    $('.footer .index-img2').hide();
    $('.footer .index-img1').show();
	$('.footer .index-ss').hide();
	$('.footer .index-s').show();
    $http.get("http://localhost:8888/data/strategy.json").success(function(data){
        console.log(data);
        $scope.data = data;
    });
});
