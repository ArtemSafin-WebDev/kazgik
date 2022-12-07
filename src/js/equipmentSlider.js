import { Swiper, Navigation, EffectFade, Controller, Pagination } from 'swiper';

Swiper.use([Navigation, EffectFade, Controller, Pagination]);

export default function equipmentSlider() {
    const elements = Array.from(document.querySelectorAll('.js-equipment-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 'auto',
            speed: 700,
            navigation: {
                nextEl: element.querySelector('.equipment__arrow--next'),
                prevEl: element.querySelector('.equipment__arrow--prev')
            }
        });
    });
}
