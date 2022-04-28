$(function(){
    // AOS.init();

    /* ======== gnb-menu dropdown ======== */
    $("#gnb li").mouseenter(function(){
        $(this).addClass("active");
    });
    $("#gnb, .gnb-bg").mouseenter(function(){
        // $(".sub-gnb").stop().fadeIn();
        $(".sub-gnb, .gnb-bg").stop().slideDown(300);     
    });


    $("#gnb, .gnb-bg").mouseleave(function(){
        $("#gnb").removeClass("active");
        // $(".sub-gnb").stop().fadeOut();
        $(".sub-gnb, .gnb-bg").stop().slideUp(300);
    });



    /* ======== main-nav 제어 ======== */
    $(".nav-menu").click(function(e){
        e.preventDefault();
        $(".nav-bg").fadeIn(400);
        $("#nav").fadeIn(400);
        $("body").css("overflow-y", "hidden");
    });
    $(".close-btn").click(function(e){
        e.preventDefault();
        $(".nav-bg").fadeOut(400);
        $("#nav").fadeOut(400);
        $("body").css("overflow-y", "auto");
    });


    /* ======== top-btn ======== */
    $('.topBtn').on("click", function(e){
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    /*======== ham-menu-event ======= */
    $(".ham-menu").click(function(e){
        e.preventDefault();
        $("#ham-area").stop().animate({"right":0+"%"},500)
    });
    $(".close-btn").click(function(e){
        e.preventDefault();
        $("#ham-area").stop().animate({"right":-100+"%"},500)
    });

    /*======== ham-menu-dropdown ======= */

    $(".hamDepth1 li").click(function(e){
        e.preventDefault();
        $(".hamDepth1 li").removeClass("on");
        $(this).addClass("on");
        $(this).siblings().children(".hamDepth2").stop().slideUp();
        //탐색구문 : li의 태그 형제들(클릭한 li를 제외한 나머지 li들)의 자식들을 선택
        //탐색했을 때 선택되는 태그들이 많다면 괄호에 선택하고 싶은 클래스, 아이디, 태그를 넣어줌
        $(this).children(".hamDepth2").stop().slideDown();
    });
});