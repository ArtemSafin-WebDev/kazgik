export default function protoSelector() {
    const elements = Array.from(document.querySelectorAll('.js-proto-selector'));

    elements.forEach(element => {
        const btn = element.querySelector('.service-page__proto-callback-selector-btn');
        const dropdown = element.querySelector('.service-page__proto-callback-selector-dropdown');
        const links = Array.from(element.querySelectorAll('.service-page__proto-callback-selector-link'));
        const btnText = element.querySelector('.service-page__proto-callback-selector-btn-text');

        btn.addEventListener('click', event => {
            event.preventDefault();
            btn.classList.toggle('active');
            dropdown.classList.toggle('active');
        });

        document.addEventListener('click', event => {
            if (event.target.matches('.js-proto-selector') || event.target.closest('.js-proto-selector')) {
                return;
            }
            btn.classList.remove('active');
            dropdown.classList.remove('active');
        });

        links.forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
                btn.classList.remove('active');
                dropdown.classList.remove('active');
                links.forEach(link => link.classList.remove('active'));
                link.classList.add('active');
                btnText.textContent = link.textContent;
            });
        });

        if (links.length) {
            links[0].click();
        }
    });
}
