import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp();
flsFunctions.sliders();

document.addEventListener('DOMContentLoaded', () =>{
    const burger = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const menu = document.querySelector('.header-nav');
    if (header) {
        flsFunctions.burger(burger, menu, header)
        flsFunctions.fixedHeader(header)
    }

    if (document.querySelector('.slider-stories__body')) {
        // new Swiper('.slider', {
        //     // effect: 'fade',
        //     // autoplay:{
        //     //     delay: 3000,
        //     //     disableOnInteraction: false,
        //     // }
    
        //     observer: true,
        //     observeParents: true,
        //     slidesPerView: 1,
        //     spaceBetween: 0,
        //     autoHeight: true,
        //     speed: 800,
        //     // touchRatio: 0,
        //     // simulateTouch: false,
        //     // loop: true,
        //     // preloadImages: false,
        //     // lazy: true,
        //     // pagination: {
        //     //     el: '.slider-pagging',
        //     //     clickable: true,
        //     // },
        //     navigation:{
        //         nextEl: '.swiper-next',
        //         prevEl: '.swiper-prev',
        //     },
    
        //     // breakpoints: {
        //     //     320: {
        //     //         slidesPerView: 1,
        //     //         spaceBetween: 0,
        //     //         autoHeight: true,
        //     //     },
        //     //     768: {
        //     //         slidesPerView: 2,
        //     //         spaceBetween: 20,
        //     //     },
        //     //     992: {
        //     //         slidesPerView: 3,
        //     //         spaceBetween: 20,
        //     //     },
        //     //     1268: {
        //     //         slidesPerView: 4,
        //     //         spaceBetween: 30,
        //     //     },
        //     // },
        //     on: {
        //         lazyImageReady: function () {
        //             ibg();
        //         },
        //     },
        //     scrollbar: {
        //         el: '.swiper-scrollbar',
        //     }
        // })

        new Swiper('.slider-stories__body', {
            autoplay:{
                delay: 5000,
                disableOnInteraction: false,
            },
            observer: true,
            observeParents: true,
            slidesPerView: 5,
            spaceBetween: 20,
            autoHeight: true,
            speed: 800,
            freeMode: true,
            // touchRatio: 0,
            // simulateTouch: false,
            loop: true,
            // preloadImages: false,
            navigation:{
                nextEl: '.slider-stories-controls__arrows .slider-arrow.slider-arrow__next',
                prevEl: '.slider-stories-controls__arrows .slider-arrow.slider-arrow__prev',
            },
            // breakpoints: {
            //     320: {
            //         slidesPerView: 1,
            //         spaceBetween: 0,
            //         autoHeight: true,
            //     },
            //     768: {
            //         slidesPerView: 2,
            //         spaceBetween: 20,
            //     },
            //     992: {
            //         slidesPerView: 3,
            //         spaceBetween: 20,
            //     },
            //     1268: {
            //         slidesPerView: 4,
            //         spaceBetween: 30,
            //     },
            // },
            on: {
                lazyImageReady: function () {
                    ibg();
                },
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            }
        })
    }
})