/* This is the area where we create our scroll feature using javascript.*/
/*this code below isallowing us to continuing scrolling down the page*/
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
    /*toggle menu/navbar Script. basically mean this is where we define javscript code to actually open our menu bar*/
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });
});

