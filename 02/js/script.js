$(".gnb").hover(
    function(){
        $(".sub").stop().slideDown();
        $(".nav_back").stop().slideDown();
    },
    function(){
        $(".sub").stop().slideUp();
        $(".nav_back").stop().slideUp();
    }
);
$(".open").click(
    function(){
        $("#popup").fadeIn();
    }
);
$(".close").click(
    function(){
        $("#popup").fadeOut();
    }
);