app.controller("caseCtrl", function ($scope, $css, $http) {

    $css.removeAll();
    $css.add('./case/css/case.css');
    $('.header-find').html('案例');
    $('.footer .index-img2').hide();
    $('.footer .index-img1').show();
	$('.footer .index-cc').hide();
	$('.footer .index-c').show();
    $http.get("http://localhost:8888/data/data.json").success(function(data){
		console.log(data.case);
		$scope.case = data.case;
	});
    $(function(){
        $('.banner2').css({
            'height':$(window).height()-$('nav').height() +'px'
        })
        $('nav ul li').click(function(){
            $('.banner2').fadeIn();
            $('.banner2 section').css({
                'transform':'translate(0)'
            });
        });
        $('.banner2').click(function(){
            $('.banner2').fadeOut();
            $('.banner2 section').css({
                'transform':'translate(100%)'
            });
        });
    });
});
