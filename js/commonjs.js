
const selectElement = (element) => document.querySelector(element);

selectElement('.mobil-menu').addEventListener('click', () => {
    selectElement('header').classList.toggle('active');
});

