window.addEventListener('load', () =>{
    let preloader = document.querySelector('#pl');
    preloader.classList.add('load-finish');
    setTimeout(() =>{
        let title = document.querySelector('.title');
        title.classList.remove('title-start');
    }, 500);
});


$( document ).ready(function() {

$('.galleryItemHide').click(function(e) {
    let $current = $('.galleryItemHide.galleryItem');
    $current.addClass('galleryItemSD');
    setTimeout(function(){
        $current.removeClass('galleryItemSD');
        $current.removeClass('galleryItem');       $current.next('.galleryItemHide').addClass('galleryItem');
        }, 200);
    });

    let gItemFirst = document.querySelector('#galleryItemFirst'),
        gItemLast = document.querySelector('#galleryItemLast');
    gItemLast.addEventListener('click', () =>{
    setTimeout(() =>{
        gItemFirst.classList.add('galleryItem')
    }, 200);

});

$(".g, .galleryTitle").click(function() {
    $(".gallery").toggleClass("gallery-sd");
    $(".about").removeClass("about-su");
    $(".contact").addClass("contact-start");
    if($(".gallery").hasClass("gallery-sd")){
        $(".menu").removeClass("menu-to-top");
    } else {
        $(".menu").addClass("menu-to-top");
    }
});

$(".a, .aboutTitle").click(function() {
    $(".about").toggleClass("about-su");
    $(".gallery").addClass("gallery-sd");
    $(".contact").addClass("contact-start");
    if($(".about").hasClass("about-su")){
        $(".menu").addClass("menu-to-top");
    } else {
        $(".menu").removeClass("menu-to-top");
    }
});

$(".c, .contact-title").click(function() {
    $(".contact").toggleClass("contact-start");
    $(".menu").removeClass("menu-to-top");
    $(".gallery").addClass("gallery-sd");
    $(".about").removeClass("about-su");
});

$(".logo").click(function() {
    $(".contact").addClass("contact-start");
    $(".menu").removeClass("menu-to-top");
    $(".gallery").addClass("gallery-sd");
    $(".about").removeClass("about-su");
    $(".more-info-holder").removeClass("more-show");
    $(".more").removeClass("more-img");
});

$(".more").click(function() {
    $(".more-info-holder").toggleClass("more-show");
    $(".more").toggleClass("more-img");
});

});
