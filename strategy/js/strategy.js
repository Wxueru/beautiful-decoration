app.controller("strategyCtrl", function ($scope, $css) {
    $css.removeAll();
    $css.add('./strategy/css/strategy.css');
    $('.header').show();
    $('.header-find').html('攻略');
});
