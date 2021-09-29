const mySwiper = new Swiper('.official-swiper-container', {
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: '.official-button-next',
        prevEl: '.official-button-prev',
      },
});

const mySwiperDoc = new Swiper('.doc-swiper-container', {
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: '.doc-button-next',
        prevEl: '.doc-button-prev',
      },
});

const mySwiperLive = new Swiper('.live-swiper-container', {
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: '.live-button-next',
        prevEl: '.live-button-prev',
      },
});


const videobox = document.querySelector('.home__videobox');
videobox.classList.add('home__videobox--animated');

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

