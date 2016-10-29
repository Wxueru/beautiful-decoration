app.controller("designerCtrl", function ($scope, $css, $http) {
    $css.removeAll();
    $css.add('./find/css/designer.css');
    $http.get("http://localhost:8888/data/designer.json").success(function(data){
        console.log(data.info);
        $scope.info = data.info;
        console.log(data.showImg);
        $scope.show = data.showImg;
    });
});
