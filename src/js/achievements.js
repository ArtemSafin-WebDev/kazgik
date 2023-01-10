export default function achivements() {
    const elements = Array.from(document.querySelectorAll('.achievements__load-more'));

    elements.forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();
            console.log('Clicked');
            element.closest('.achievements').classList.add('all-shown');
            element.remove();
        });
    });
}
