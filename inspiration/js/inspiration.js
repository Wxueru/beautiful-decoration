app.directive('repeatFinish',function(){
    return {
        link: function(scope,element,attr){
            // console.log(scope.$index)
            if(scope.$last == true){
                console.log('ng-repeat执行完毕')
                scope.$eval( attr.repeatFinish )
            }
        }
    }
})

app.controller("inspirationCtrl", function ($scope, $css, $http, $timeout) {
    $css.removeAll();
    $css.add('./inspiration/css/inspiration.css');
    $('.header-find').html('灵感');
    $('.footer .index-img2').hide();
    $('.footer .index-img1').show();
	$('.footer .index-ii').hide();
	$('.footer .index-i').show();

    //controller里对应的处理函数
    // $scope.renderFinish = function(){
    //     console.log('渲染完之后的操作1')
    //
    //
    // }


    var a = $http.get("http://localhost:8888/data/inspiration.json").success(function(data){
        $scope.left = data.left;
        $scope.right = data.right;
    });

    $timeout(function () {
        $('.lazy1 img').lazyload();
        $('.lazy2 img').lazyload();
    }, 200);


});
