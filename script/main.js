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
        breakpoints: {
            1230: {
                slidesPerView: 4,

            },
            1022: {
                slidesPerView: 3,
            },
            798: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            }
        }
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
        },
        breakpoints: {
            1750: {
                spaceBetween: 25,
                slidesPerView: 4,
            },
            1440: {
                spaceBetween: 15,
                slidesPerView: 3,
            },
            1230: {
                slidesPerView: 3,
            },
            1022: {
                slidesPerView: 2,
            },
            798: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            }
        }
    });
}

const burger = () => {
    const headerInner = document.querySelector('.header__inner')
    const burgerOpen = document.querySelector('.header-burger')
    const burgerClose = document.querySelector('.header__close')

    burgerOpen.addEventListener('click', () => {
        headerInner.classList.add('header_active')
    })

    burgerClose.addEventListener('click', () => {
        headerInner.classList.remove('header_active')
    })
}

navSearch.addEventListener('click', () => {
    document.querySelector('.header-form').style.display = 'block';
})


brandsSlider()
certificatesSlider()
burger()