const display = document.querySelector('#check');
const display2 = document.querySelector('.nav-bar-body')
    display.addEventListener('click', () => {
    display2.classList.toggle("display");
});