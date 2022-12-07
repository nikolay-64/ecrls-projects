$(document).ready(function(){
 
    // Находим  элемент в котором будет инициализирована каруседль
    const productCarousel = $("#product-carousel");
    const productCarousel1 = $("#product-carousel-1");

    // Создаем карусель в элементе #product-carousel
    productCarousel.owlCarousel({
        items:3,
        smartSpeed:600,
        margin: 10, 
        startPosition: 1,
        responsive: {
           0: {
               items:1,
           },
           576: {
               items:2,
           },
           768: {
               items:3,
               center: true,
           }
        }
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
        items:5,
        smartSpeed:600, 
        margin:10,
        startPosition: 1,
        responsive: {
            0: {
                items:1,
            },
            576: {
                items:2,
            },
            768: {
                items:3,
                center: true,
            }
         }
    });
  });