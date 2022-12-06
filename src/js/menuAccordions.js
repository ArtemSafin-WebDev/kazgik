import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IS_MOBILE } from './utils';

gsap.registerPlugin(ScrollTrigger);

export default function menuAccordions() {
    const SPEED = 0.3;

    const openAccordion = element => {
        gsap.to(element, {
            height: 'auto',
            duration: SPEED,
            onComplete: () => ScrollTrigger.refresh()
        });
    };
    const closeAccordion = element => {
        gsap.to(element, {
            height: 0,
            duration: SPEED,
            onComplete: () => ScrollTrigger.refresh()
        });
    };

    document.addEventListener('click', event => {
        if (event.target.matches('.page-header__menu-nav-link') || event.target.closest('.page-header__menu-nav-link')) {
            const btn = event.target.matches('.page-header__menu-nav-link') ? event.target : event.target.closest('.page-header__menu-nav-link');
            const element = btn.closest('.page-header__menu-nav-list-item');
            const content = element.querySelector('.page-header__menu-submenu');

            if (!IS_MOBILE || !content) return;

            event.preventDefault();

            if (element.classList.contains('active')) {
                closeAccordion(content);
            } else {
                openAccordion(content);
            }
            element.classList.toggle('active');
        }
    });
}
