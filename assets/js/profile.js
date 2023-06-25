
/*
$("#btnAboutMe").click(function (){
    $("main>section").css("margin","10vh");
    $("body>header").css("opacity","1");

    $("main>main").on("mouseleave",function (){
        $("main>section").off();
        $("main>section").css("margin","0");
        $("main>section").css("transition","all 1s");
    });
});*/
document.body.style.overflow = 'hidden';
$(window).on("load",function (){
    setTimeout(function (){
   $("#loading").fadeOut(500);
        document.body.style.overflow = 'visible';
    },5000);

});



$("#page-1>section").click(function () {

    $(this).addClass("animate__infinite");
    $(this).removeClass("animate__infinite");


});
$("#serviceSection>section>div").on("mouseenter",function () {
   /* $(this).addClass("hvr-pulse-grow");*/
});

var next=0;
$("#page-4 .downSection > section > aside >:nth-child(1)").click(function (){
    next>0 ? next--:0;
    hideAllServices();
    switch (next) {
        case 0:
            $(`#page-4 .downSection #serviceSection section >:nth-child(1)`).css({"display":"flex","transition":"all 4s"});
            $(`#page-4 .downSection #serviceSection section >:nth-child(2)`).css("display","flex");
            break;
        case 1:
            $(`#page-4 .downSection #serviceSection section > :nth-child(3)`).css("display","flex");
            $(`#page-4 .downSection #serviceSection section > :nth-child(4)`).css("display","flex");
            break;
    }
});
$("#page-4 .downSection > section > aside >:nth-child(2)").click(function (){
    next<2 ? next++:0;
    hideAllServices();
    switch (next) {
        case 1:
            $(`#page-4 .downSection #serviceSection section >:nth-child(3)`).css("display","flex");
            $(`#page-4 .downSection #serviceSection section >:nth-child(4)`).css("display","flex");
            break;
        case 2:
            $(`#page-4 .downSection #serviceSection section >:nth-child(5)`).css("display","flex");
            $(`#page-4 .downSection #serviceSection section >:nth-child(6)`).css("display","flex");
            break;
    }
});

function hideAllServices(){
    $(`#page-4 .downSection #serviceSection section > div`).hide();
}
$(window).resize(function (){
        if(window.innerWidth>450){
            $(`#page-4 .downSection #serviceSection section > div`).show();
        }else{
            $("#page-7 .downSection>section>section").scrollLeft( 80 );
        }
});
