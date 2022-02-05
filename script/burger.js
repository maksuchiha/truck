'use strict'

const navSearch = document.querySelector('.header-nav__search')


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


burger()