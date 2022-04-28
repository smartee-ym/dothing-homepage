$(function(){
    // AOS.init();
    



    /* ======== scroll-evnet ======== */
    $(window).scroll(function(){

        let scTop = $(this).scrollTop();    //스크롤바 위치값 알아내는 제이쿼리 함수
    
        //스크롤바가 sec02근처에 왔을 때 header에 .on이 붙는다!
        let sec02 = $("#business").offset().top-100;       //위치값은 정수형
        console.log(sec02);

        //조건문으로 클래스 조절
        if( scTop >= sec02){
   
            $("#header-down").fadeOut();
            $("#header").fadeIn();
            $(".topBtn").fadeIn();
    
        }
        else{
            $("#header-down").fadeIn();
            $("#header").fadeOut();
            $(".topBtn").fadeOut();
    
        }
    });



    /* ======== wheel-evnet ======== */
    const contBox = document.querySelectorAll("#container > div");
    
    // for (let i=0; i<contBox.length; i++){

    //     contBox[i].addEventListener("wheel",(e)=>{
    
    //         e.preventDefault();  //a태그가 아니라 스크롤이벤트 휠 중첩 막아주려고
    
    //         if(e.wheelDelta > 0){
    //             movePoint = e.currentTarget.previousElementSibling.offsetTop;
    //             //휠을 올리면 이전으로 올라감
    //         }
            
    //         else if(e.wheelDelta < 0){
    //             movePoint = e.currentTarget.nextElementSibling.offsetTop-100;
    //             //휠을 내리면 다음으로 내려감
    //         }
    
    //         window.scrollTo({
    //             top:movePoint,
    //             left:0,
    //             behavior:"smooth"
    //         });
    
    //     });
    
    // }



    /* ======== customer-slide ======== */
    $('.cstmr-slick').slick({ 
        dots: true, //페이지 네비게이션 
        arrows:false, // next, prev 이동 버튼 
        autoplay:true, // 자동 넘김 여부 
        infinite: true, //반복설정 
        speed: 300, //슬라이드 속도 
        autoplaySpeed : 3500, // 자동 넘김시 슬라이드 시간 
        pauseOnHover : true,// 마우스 hover시 슬라이드 멈춤 
        vertical : false, // 세로 방향 슬라이드 옵션 
        slidesToShow: 5, //보여질 슬라이드 수 
        slidesToScroll: 1, //넘겨질 슬라이드 수
         responsive: [ // -> 반응형 옵션
            { breakpoint: 1024, // 반응형 ~ 1024 
                settings: { 
                    slidesToShow: 4, 
                    slidesToScroll: 4, 
                    infinite: true, 
                    dots: true 
                } 
            }, 
            { breakpoint: 600,// 반응형 ~ 600 
                settings: { 
                    slidesToShow: 2, 
                    slidesToScroll: 2,
                    infinite: true, 
                    dots: true  
                } 
            }, 
            { breakpoint: 480,// 반응형 ~ 480 
                settings: { 
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                    infinite: true, 
                    dots: true  
                } 
            } 
        ] 
        
    });



});