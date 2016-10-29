app.controller("oneselfCtrl", function ($scope, $css) {

    $css.removeAll();
    $css.add('./oneself/css/oneself.css');
	$('.footer').hide();
    $('.header').hide();
});
