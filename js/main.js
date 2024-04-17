var glide = new Glide('.glide', {
    type: 'carousel',
    autoplay: 3000,
    bind: 'yes',
    perView: 1,
    gap: 20,
})
glide.mount();

// slick-slider

$(document).ready(function () {
    $('.new__slider').slick({
        slidesToShow: 4,
        rows: 2,
        gap: 1,
        autoplay: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });
});

// catalog slider

var glide = new Glide('.catalog__slider-glide', {
    type: 'carousel',
    perView: 5,
    gap: 1,
    breakpoints: ({
        1200: {
            perView: 4
        },
        992: {
            perView: 3
        }
    })
})
glide.mount()