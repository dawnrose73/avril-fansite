document.addEventListener('DOMContentLoaded', () => {

    const videobox = document.querySelector('.content__videobox');
    videobox.classList.add('content__videobox--animated');

    const addActive = (item) => {
        item.classList.add('header__menu-link--active');
    }

    const removeActive = (item) => {
        item.classList.remove('header__menu-link--active');
    }

    const activeLinks = () => {
        const menuLinks = document.querySelectorAll('.header__menu-link');
        const [homeLink, musicLink, videoLink] = menuLinks;

        const home = document.querySelector('#home');
        const music = document.querySelector('#music');
        const video = document.querySelector('#video');

        let windowBottom = (window.innerHeight * 3 / 4) + window.scrollY;

        if ((windowBottom >= home.offsetTop) && (windowBottom < music.offsetTop)) {
            menuLinks.forEach((el) => {
                (el === homeLink) ? addActive(el) : removeActive(el);
            })
        }

        if ((windowBottom >= music.offsetTop) && (windowBottom < video.offsetTop)) {
            menuLinks.forEach((el) => {
                (el === musicLink) ? addActive(el) : removeActive(el);
            })
        } 

        if (windowBottom >= video.offsetTop) {
            menuLinks.forEach((el) => {
                (el === videoLink) ? addActive(el) : removeActive(el);
            })
        } 
    }

    activeLinks();
    window.addEventListener('scroll', () => {
        activeLinks();
    })
})