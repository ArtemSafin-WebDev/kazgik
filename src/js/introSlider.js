import { Swiper, Navigation, EffectFade, Controller, Pagination } from 'swiper';
import { IS_MOBILE } from './utils';

Swiper.use([Navigation, EffectFade, Controller, Pagination]);

export default function intro() {
    const elements = Array.from(document.querySelectorAll('.js-intro'));

    elements.forEach(element => {
        const mainContainer = element.querySelector('.intro__main-slider .swiper');
        const bgContainer = element.querySelector('.intro__bg-slider .swiper');
        const current = element.querySelector('.intro__pagination-current');
        const total = element.querySelector('.intro__pagination-total');

        const slides = Array.from(element.querySelectorAll('.intro__main-slider .swiper-slide'));

        const mainSlider = new Swiper(mainContainer, {
            effect: 'fade',
            speed: 400,
            autoHeight: IS_MOBILE ? true : false,
            longSwipesRatio: 0.1,
            loop: true,
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: element.querySelector('.intro__arrow--next'),
                prevEl: element.querySelector('.intro__arrow--prev')
            },
            pagination: {
                el: element.querySelector('.intro__pagination-progress'),
                type: 'progressbar'
            },
            init: false,
            on: {
                init: swiper => {
                    current.textContent = (swiper.realIndex + 1).toString().padStart(2, '0');
                    total.textContent = slides.length.toString().padStart(2, '0');
                },
                slideChange: swiper => {
                    current.textContent = (swiper.realIndex + 1).toString().padStart(2, '0');
                    total.textContent = slides.length.toString().padStart(2, '0');
                }
            }
        });

        mainSlider.init();

        const bgSlider = new Swiper(bgContainer, {
            effect: 'fade',
            speed: 400,
            loop: true,
            fadeEffect: {
                crossFade: false
            }
        });

        mainSlider.controller.control = bgSlider;
    });
}
