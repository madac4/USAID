import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp();
flsFunctions.sliders();

document.addEventListener('DOMContentLoaded', () =>{
    AOS.init();
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

    const partnerSliders = document.querySelectorAll('.slider-logos__body');

    if (partnerSliders.length >= 1) {
        for (let i = 0; i < partnerSliders.length; i++) {
            partnerSliders[i].classList.add(`slider-logos__body--${i}`);
            partnerSliders[i].parentNode.querySelector('.slider-logos-controls__arrows').classList.add(`slider-logos-${i}-controls__arrows`);

            new Swiper(`.slider-logos__body--${i}`, {
                grabCursor: true,
                observer: true,
                observeParents: true,
                speed: 800,
                // spaceBetween: 20,
                preloadImages: false,
                slidesPerView: 5,
                lazy: true,
                navigation: {
                    prevEl: `.slider-logos-${i}-controls__arrows .slider-arrow__prev`,
                    nextEl: `.slider-logos-${i}-controls__arrows .slider-arrow__next`,
                },
                breakpoints: {
                    320:{
                        slidesPerView: 2,
                    },
                    480:{
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 4,
                    },
                    992: {
                        slidesPerView: 5,
                    },
                },
            })

        }
    }

    const tabs = document.querySelector('.tabs');
    const tabsButtons = document.querySelectorAll('.tabs__button');
    const tabsContents = document.querySelectorAll('.tabs__content');
    
    if (tabs) {
        tabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('tabs__button')) {
                const tabsPath = e.target.dataset.tabsPath;
                tabsHandler(tabsPath);
            }
        })
    }
    
    const tabsHandler = (path) => {
        tabsButtons.forEach(button => {
            button.classList.remove('tabs__button--active')
        })
        document.querySelector(`[data-tabs-path="${path}"]`).classList.add('tabs__button--active');
    
        tabsContents.forEach(content => {
            content.classList.remove('tabs__content--active')
        })
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
    }
})