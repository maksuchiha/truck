'use strict'

const modal = () => {
    const modalOpen = document.querySelector('.card-item__button')
    const modal = document.querySelector('.overlay')
    const modalClose = document.querySelector('.modal__close')

    modalOpen.addEventListener('click', () => {
        modal.classList.add('overlay_active')
    })

    modalClose.addEventListener('click', () => {
        modal.classList.remove('overlay_active')
    })
}


modal()