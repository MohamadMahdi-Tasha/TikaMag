// Configs Of Sliders
const swiper2 = new Swiper(".dv-2slide-per-view-slider", {slidesPerView: 2,})
const swiper3 = new Swiper(".dv-2slide-per-view-slider-with-gap", {
    slidesPerView: 2,
    spaceBetween: 50,
    breakpoints: {
        767: {spaceBetween: 50,},
        1: {spaceBetween: 10,}
    }
})
const swiper = new Swiper(".dv-related-things-swiper", {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});