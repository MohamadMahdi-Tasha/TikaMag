// Configs Of Sliders
const swiper2 = new Swiper(".dv-2slide-per-view-slider", {slidesPerView: 2,})
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