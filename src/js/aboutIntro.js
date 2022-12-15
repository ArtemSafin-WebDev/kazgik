import { Swiper, Navigation, EffectFade, Controller, Pagination } from 'swiper';

Swiper.use([Navigation, EffectFade, Controller, Pagination]);

export default function aboutIntro() {
    const elements = Array.from(document.querySelectorAll('.js-about-intro'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');
        const tabs = Array.from(element.querySelectorAll('.about-intro__slider-panel-tab'));

        const setActiveTab = index => {
            tabs.forEach(tab => tab.classList.remove('active'));
            tabs[index]?.classList.add('active');
        };

        const instance = new Swiper(container, {
            speed: 500,
            navigation: {
                nextEl: element.querySelector('.about-intro__slider-arrow--next'),
                prevEl: element.querySelector('.about-intro__slider-arrow--prev')
            },
            init: false,
            on: {
                init: swiper => {
                    setActiveTab(swiper.activeIndex);
                },
                slideChange: swiper => {
                    setActiveTab(swiper.activeIndex);
                }
            }
        });

        instance.init();
    });
}
