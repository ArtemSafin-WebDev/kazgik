import { Swiper, Navigation, EffectFade, Controller, Pagination } from 'swiper';
import { IS_MOBILE } from './utils';

Swiper.use([Navigation, EffectFade, Controller, Pagination]);

export default function partnersSlider() {
    if (!IS_MOBILE) return;
    const elements = Array.from(document.querySelectorAll('.js-partners-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 'auto',
            speed: 700,
            navigation: {
                nextEl: element.querySelector('.partners__arrow--next'),
                prevEl: element.querySelector('.partners__arrow--prev')
            }
        });
    });
}
