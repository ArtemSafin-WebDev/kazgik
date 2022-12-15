import { Swiper, Navigation, EffectFade, Controller, Pagination } from 'swiper';

Swiper.use([Navigation, EffectFade, Controller, Pagination]);

export default function awardsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-awards-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 'auto',
            speed: 700,
            navigation: {
                nextEl: element.querySelector('.awards__arrow--next'),
                prevEl: element.querySelector('.awards__arrow--prev')
            }
        });
    });
}
