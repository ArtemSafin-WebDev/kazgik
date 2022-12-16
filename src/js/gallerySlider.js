import { Swiper, Navigation, EffectFade } from 'swiper';
import { IS_MOBILE } from './utils';
Swiper.use([Navigation, EffectFade]);

export default function gallerySlider() {
    const elements = Array.from(document.querySelectorAll('.js-gallery-slider'));

    elements.forEach(element => {
        const CARD_SELECTOR = '.gallery-slider__thumbs-card';
        const mainContainer = element.querySelector('.gallery-slider__main .swiper');
        const thumbsContainer = element.querySelector('.gallery-slider__thumbs .swiper');
        const thumbsCards = Array.from(element.querySelectorAll(CARD_SELECTOR));
        const tabs = Array.from(element.querySelectorAll('.gallery-slider__panel-tab'));

        const thumbsInstance = new Swiper(thumbsContainer, {
            watchOverflow: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slidesPerView: IS_MOBILE ? 4 : 5,
            threshold: 10,
            speed: 700,
            slideToClickedSlide: true,
            spaceBetween: 0,
            centerInsufficientSlides: true
        });

        function setActive(swiper) {
            thumbsInstance.slideTo(swiper.activeIndex);
            thumbsCards.forEach(card => card.classList.remove('thumb-active'));
            thumbsCards[swiper.activeIndex]?.classList.add('thumb-active');
            tabs.forEach(tab => tab.classList.remove('active'));
            tabs[swiper.activeIndex].classList.add('active');
        }

        const mainInstance = new Swiper(mainContainer, {
            watchOverflow: true,
            spaceBetween: 10,
            speed: 700,
            longSwipesRatio: 0.2,
            navigation: {
                nextEl: element.querySelector('.gallery-slider__arrow--next'),
                prevEl: element.querySelector('.gallery-slider__arrow--prev')
            },
            on: {
                slideChange: swiper => {
                    setActive(swiper);
                },
                init: swiper => {
                    setActive(swiper);
                }
            },
            init: false
        });

        mainInstance.init();

        const thumbsClickHandler = event => {
            if (event.target.matches(CARD_SELECTOR) || event.target.closest(CARD_SELECTOR)) {
                event.preventDefault();
                const card = event.target.matches(CARD_SELECTOR) ? event.target : event.target.closest(CARD_SELECTOR);
                const cardIndex = thumbsCards.findIndex(otherCard => otherCard === card);

                mainInstance.slideTo(cardIndex);
            }
        };

        element.addEventListener('click', thumbsClickHandler);
    });
}
