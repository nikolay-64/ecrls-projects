$(document).ready(function(){
    // $("#product-carousel").owlCarousel({
    //     items:1,
    //     loop: true,
    //     nav: true,
    //     navText: ['Prev', 'Next'],
    // });

    // Находим  элемент в котором будет инициализирована каруседль
    const productCarousel = $("#product-carousel");
    const productCarousel1 = $("#product-carousel-1");

    // Создаем карусель в элементе #product-carousel
    productCarousel.owlCarousel({
        items:1,
        loop: true,
        smartSpeed:2000, 
        // nav: true,
        // navText: ['Prev', 'Next'],
    })

    // Находим кнопки назад и вперед
    
    const buttonPrev = $('.nav-button-left');
    const buttonNext = $('.nav-button-right');

    buttonPrev.click(function () {
        productCarousel.trigger('prev.owl.carousel');
        productCarousel1.trigger('prev.owl.carousel');
    });

    buttonNext.click(function () {
        productCarousel.trigger('next.owl.carousel');
        productCarousel1.trigger('next.owl.carousel');
    });


    // Создаем карусель в элементе #product-carousel-1
    productCarousel1.owlCarousel({
        items:1,
        loop: true,
        smartSpeed:2000, 
    });
  });