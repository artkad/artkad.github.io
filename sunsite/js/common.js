$(function() {
    $(".owl-carousel").owlCarousel();
});
$(".owl-carousel").owlCarousel({
    responsiveClass:true,
    //pagination : true,
    //navText: ["<img src='myprevimage.png'>","<img src = 'img/Layer_92_copy.png'>"],
    responsive:{
        0:{
            items: 1,
            nav: false,
            autoWidth: true

        },
        480:{
            items:1,
            nav:false
        },
        768:{
            items: 6, //количество картинок
            nav: true, //навигация
            center: true,
            padding: 30,
            margin: 20, //отступы между элементами
            startPosition: 3,
            loop: true,
            dots: false
        }
    },
    loop:true,
});
