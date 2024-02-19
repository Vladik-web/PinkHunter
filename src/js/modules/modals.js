import { disablePageScroll, enablePageScroll, addScrollableSelector } from 'scroll-lock'

const modals = () => {
  const openModal = (modal, modalName) => {
    modal.classList.add('modal--open')
    modal.setAttribute('aria-hidden', true)

    disablePageScroll()
    addScrollableSelector(modalName)
  }

  const closeModal = modal => {
    modal.classList.add('modal--close')
    modal.classList.remove('modal--open')
    modal.setAttribute('aria-hidden', false)

    setTimeout(() => {
      modal.classList.remove('modal--close')
      enablePageScroll()
    }, 300)
  }

  const bindModal = (triggerBnt, modalName, missClick = true) => {
    const trigger = document.querySelectorAll(triggerBnt)
    const modal = document.querySelector(modalName)
    const close = modal?.querySelectorAll('[data-modal-close]')

    if (trigger && modal && close.length) {
      trigger.forEach(item => {
        item.addEventListener('click', () => {
          if (modal.classList.contains('modal--open')) closeModal()
          openModal(modal, modalName)
        })
      })
      close.forEach(cl => {
        cl.addEventListener('click', () => {
          closeModal(modal)
        })
      })
      if (missClick) {
        modal.addEventListener('click', ({ target }) => {
          if (!target.closest('.modal__content')) {
            closeModal(modal)
          }
        })
      }
    }
  }

  // close modal by Escape
  document.addEventListener('keyup', ({ key }) => {
    if (key === 'Escape') {
      const modal = document.querySelector('.modal.modal--open')
      if (modal) closeModal(modal)
    }
  })

  bindModal('[data-open-modal="test"]', '[data-modal-name="test"]', true)
}

export default modals
