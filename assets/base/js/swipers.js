// Configs Of Sliders
const swiper = new Swiper(".dv-related-things-swiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    autoplay: {delay: 5000,},
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiper2 = new Swiper(".dv-2slide-per-view-slider-with-gap", {
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
        767: {spaceBetween: 20, slidesPerView: 2,},
        1: {spaceBetween: 10,slidesPerView: 1,}
    }
})

const swiper3 = new Swiper(".dv-home-first-section-slider", {
    spaceBetween: 20,
    autoplay: {delay: 5000,},
    slidesPerView: 1,
    initialSlide: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})