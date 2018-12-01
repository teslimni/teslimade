// import '../sass/style.scss';
let navToggle = document.querySelector('.nav__mobile-btn');

navToggle.addEventListener('click', e => {
    mobileHook = document.querySelector('.site');
    mobileHook.classList.toggle('js-is-mobile');
});