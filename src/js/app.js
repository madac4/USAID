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

    const currentLang = document.querySelector('.header-languages__current');
    const languagesDropdown = document.querySelector('.header-languages__dropdown');

    if (currentLang && languagesDropdown) {
        currentLang.addEventListener('click', () =>{
            languagesDropdown.classList.toggle('open')
        })
    }

    if (document.querySelector('.slider-stories__body')) {
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
            loop: true,
            navigation:{
                nextEl: '.slider-stories-controls__arrows .slider-arrow.slider-arrow__next',
                prevEl: '.slider-stories-controls__arrows .slider-arrow.slider-arrow__prev',
            },
        })
    }

    if (document.querySelector('.slider-mentors__body')) {
        new Swiper('.slider-mentors__body', {
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
            navigation:{
                nextEl: '.slider-mentors-controls__arrows .slider-arrow.slider-arrow__next',
                prevEl: '.slider-mentors-controls__arrows .slider-arrow.slider-arrow__prev',
            },
            breakpoints: {
                320:{
                    slidesPerView: 1,
                },
                480:{
                    slidesPerView: 2,
                },
                740:{
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                },
                1180: {
                    slidesPerView: 5,
                },
            },
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
    const tabsLinks = document.querySelectorAll('.tabs__link');
    
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
        document.querySelector(`.tabs__content[data-tabs-target="${path}"]`).classList.add('tabs__content--active');

        tabsLinks.forEach(link => {
            link.classList.remove('tabs__link--active')
        })
        document.querySelector(`.tabs__link[data-tabs-target="${path}"]`).classList.add('tabs__link--active');
    }

    const checkMocks = document.querySelectorAll('.with-mock article');

    if(checkMocks.length < 4 && checkMocks.length > 0){
        for(let i = checkMocks.length; i <= 4; i++){
            console.log(i)
            document.querySelector('.with-mock').append(document.createElement('article'))
        }
    }

    const menuItems = document.querySelectorAll('button[data-scroll]');
    const scrollSections = document.querySelectorAll('section[data-scroll]');
    if (menuItems && scrollSections) {
        menuItems.forEach(button =>{
            scrollSections.forEach(section =>{
                button.addEventListener('click', () =>{
                    burger.classList.remove('active');
                    menu.classList.remove('active');
                    document.body.classList.remove('lock');
                    if (button.dataset.scroll === section.dataset.scroll) {
                        const pos = section.offsetTop;
                        window.scrollTo({
                            top: pos - 180,
                            left:0,
                            behavior: 'smooth'
                        })
                    }
                })
            })
        })
    }

    const openForm = document.querySelector('.apply-body__hide');
    const applyForm = document.querySelector('.apply-body form');
    const acceptButton = document.querySelector('.confirmation__button');
    const overlay = document.querySelector('.overlay');
    const submitButton = applyForm.querySelector('button');
    const confirmation = document.querySelector('.confirmation');

    if (openForm && applyForm) {
        openForm.addEventListener('click', () =>{
            applyForm.style.height = '100%';
            openForm.style.display = 'none'
        })

        if (localStorage.getItem('confirmation')) {
            submitButton.setAttribute('type', 'submit');
        }
        
        submitButton.addEventListener('click', () =>{
            if (submitButton.getAttribute('type') !== 'submit' || !localStorage.getItem('confirmation')) {
                overlay.classList.add('active')
                confirmation.classList.add('open')
            }
        })
        acceptButton.addEventListener('click', () =>{
            overlay.classList.remove('active')
            confirmation.classList.remove('open');
            submitButton.setAttribute('type', 'submit');
            localStorage.setItem('confirmation', 'accept')
        })
    }
})


