'use strict'

const navSearch = document.querySelector('.header-nav__search')

const brandsSlider = () => {
    const swiper = new Swiper('.brands__inner', {
        loop: true,
        autoHeight: true,
        slidesPerView: 5,
        spaceBetween: 50,
        autoplay: {
            delay: 1000,
        },
    });
}

const certificatesSlider = () => {
    const swiper = new Swiper('.certificates__inner', {
        loop: true,
        autoHeight: true,
        slidesPerView: 4,
        spaceBetween: 25,
        navigation: {
            nextEl: '.certificates__button_right',
            prevEl: '.certificates__button_left',
        }
    });
}

navSearch.addEventListener('click', () => {
    document.querySelector('.header-form').style.display = 'block';
})

brandsSlider()
certificatesSlider()