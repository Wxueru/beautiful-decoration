app.controller("strategy-demoCtrl", function ($scope, $css) {
    $css.removeAll();
    $css.add('./strategy/css/strategy-demo.css');

    //str-demo-header中的变化
    $(function(){
        $('.header').hide();
        $(window).scroll(function(){
            var top = $(window).scrollTop() * 0.0025;
            $('.str-demo-header').css({'background':'rgba(255, 255, 255,' + top + ')'});
            $('.str-demo-enjoy .str-demo-eimg1').show();
            $('.str-demo-enjoy .str-demo-eimg2').hide();
            $('.str-demo-header>div>span').css({'border-color':'white'});
            $('.str-demo-enjoy').css({'color':'white'});
            if($(window).scrollTop()>10){
                $('.str-demo-header>div>span').css({'border-color':'#7db444'});
                $('.str-demo-enjoy .str-demo-eimg1').hide();
                $('.str-demo-enjoy .str-demo-eimg2').show();
                $('.str-demo-enjoy').css({'color':'#7db444'});
            }
        });
        $.each($('.str-demo-info'), function (index, value) {
            $(value).find('div').click(function () {
                $(value).find('.str-demo-star1').toggle();
                $(value).find('.str-demo-star2').toggle();

            });

        });



    });
});
