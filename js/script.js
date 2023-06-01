// const servicesSwiper = new Swiper('.services-swiper', {
//     direction: 'vertical',
//     loop: true,
//     pagination: {
//         el: '.services-swiper-paganation',
//     },
//     navigation: {
//         nextEl: '.services-swiper-btn-prev',
//         prevEl: '.services-swiper-btn-next',
//     },
// })


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


const porfolioSwiper = new Swiper(".portfolio-swiper", {
    slidesPerView: 1,
    loop: true,
    // effect: "coverflow",
    // grabCursor: true,
    // centeredSlides: true,
    spaceBetween: -100,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 800,
        modifier: 1,
        slideShadows: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
});
