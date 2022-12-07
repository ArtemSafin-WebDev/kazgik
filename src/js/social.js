export default function social() {
    const elements = Array.from(document.querySelectorAll('.js-social'));

    elements.forEach(element => {
        const btn = element.querySelector('button');

        btn.addEventListener('click', event => {
            event.preventDefault();
            element.classList.toggle('active');
        });
    });
}
