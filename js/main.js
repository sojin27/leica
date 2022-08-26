$(document).ready(function() {

    var toggle = true;
    $(".nav_btn").on("click", function() {
        toggle = !toggle
        
        if(!toggle){
            $("nav").stop().animate({
                "left" : 0
            });

            $(this).addClass("active");
            $("nav").addClass("active");

            $("h1").find("img.logo_w").fadeOut();
            $("h1").find("img.logo_r").fadeIn();
        } else {
            $("nav").stop().animate({
                "left" : "100%"
            });

            $(this).removeClass("active");
            $("nav").removeClass("active");

            $("h1").find("img.logo_w").fadeIn();
            $("h1").find("img.logo_r").fadeOut();
        }
    });


    $("footer .footer_menu .tit").on("click", function(e) {
        e.preventDefault();

        $(this).siblings(".sub").stop().slideToggle();
        $(this).parent().siblings().find(".sub").slideUp();
        $(this).toggleClass("on");
        $(this).parent().siblings().find(".tit").removeClass("on")
    })

    function resizing() {
        var winWidth = $(window).width();
        if(winWidth >= 850){
            $("footer .sub").css("display", "block");
        } else {
            $("footer .sub").css("display", "none");
        }
    }

    $(window).on("resize", resizing);
    resizing();
})