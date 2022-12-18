import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function servicesMobileNav() {
    const SPEED = 0.3;
    const elements = Array.from(document.querySelectorAll('.js-services-mobile-nav'));

    elements.forEach(element => {
        const btn = element.querySelector('.services-page__mobile-nav-btn');
        const dropdown = element.querySelector('.services-page__mobile-nav-dropdown');

        const openDropdown = () => {
            btn.classList.add('active');
            gsap.to(dropdown, {
                height: 'auto',
                duration: SPEED,
                onComplete: () => ScrollTrigger.refresh()
            });
        };

        const closeDropdown = () => {
            btn.classList.remove('active');
            gsap.to(dropdown, {
                height: 0,
                duration: SPEED,
                onComplete: () => ScrollTrigger.refresh()
            });
        };

        const toggleDropdown = () => {
            if (btn.classList.contains('active')) {
                closeDropdown();
            } else {
                openDropdown();
            }
        };

        btn.addEventListener('click', event => {
            event.preventDefault();
            toggleDropdown();
        });

        document.addEventListener('click', event => {
            if (event.target.matches('.js-services-mobile-nav') || event.target.closest('.js-services-mobile-nav')) {
                return;
            }
            closeDropdown();
        });
    });
}
