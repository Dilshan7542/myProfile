
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
$(window).on("load",function (){
   $("#loading").fadeOut(1000);


});



$("#page-1>section").click(function () {

    $(this).addClass("animate__infinite");
    $(this).removeClass("animate__infinite");


});
$("#serviceSection div").on("mouseenter",function () {
    $(this).addClass("hvr-buzz-out");
});


