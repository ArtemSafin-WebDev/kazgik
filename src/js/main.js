import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import masks from './masks';
import validation from './validation';
import anchorLinks from './anchorLinks';
import accordions from './accordions';
import modals from './modals';
import tabs from './tabs';
import menu from './menu';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import intro from './introSlider';
import menuAccordions from './menuAccordions';
import fancybox from './fancybox';
import social from './social';
import equipmentSlider from './equipmentSlider';
import maps from './maps';
import aboutIntro from './aboutIntro';
import awardsSlider from './awardsSlider';
import teamSelector from './teamSelector';
import gallerySlider from './gallerySlider';
import servicesMobileNav from './servicesMobileNav';
import protoSelector from './protoSelector';
import datepicker from './datepicker';
import partnersSlider from './partnersSlider';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
    detectTouch();
    setScrollbarWidth();
    masks();
    validation();
    anchorLinks();
    accordions();
    modals();
    tabs();
    menu();
    intro();
    menuAccordions();
    fancybox();
    social();
    equipmentSlider();
    maps();
    aboutIntro();
    awardsSlider();
    teamSelector();
    gallerySlider();
    servicesMobileNav();
    protoSelector();
    datepicker();
    partnersSlider();
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
