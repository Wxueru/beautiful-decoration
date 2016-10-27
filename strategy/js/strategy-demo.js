app.controller("strategy-demoCtrl", function ($scope, $css) {
    $css.removeAll();
    $css.add('./strategy/css/strategy-demo.css');
    var hea = document.querySelector(".str-demo-header");
    var indexHeader = document.querySelector(".index-header");
    console.log(indexHeader);
    // indexHeader.style.display = none;
    console.log(hea);
    window.onscroll = function(){
        hea.style.background = "transparent";
    }
});
