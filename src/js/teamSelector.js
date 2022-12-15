export default function teamSelector() {
    const elements = Array.from(document.querySelectorAll('.js-team-selector'));

    elements.forEach(element => {
        const btn = element.querySelector('.team__selector-btn');
        const dropdown = element.querySelector('.team__selector-dropdown');
        const links = Array.from(element.querySelectorAll('.team__selector-link'));
        const btnText = element.querySelector('.team__selector-btn-text');

        btn.addEventListener('click', event => {
            event.preventDefault();
            dropdown.classList.toggle('active');
            btn.classList.toggle('active');
        });

        links.forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
                dropdown.classList.remove('active');
                btn.classList.remove('active');
                btnText.textContent = link.textContent;
            });
        });

        document.addEventListener('click', event => {
            if (event.target.matches('.js-team-selector') || event.target.closest('.js-team-selector')) {
                return;
            }
            dropdown.classList.remove('active');
            btn.classList.remove('active');
        });

        if (links.length) {
            links[0].click();
        }
    });
}
