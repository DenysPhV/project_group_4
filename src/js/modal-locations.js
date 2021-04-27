(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-mdl-open]'),
      closeModalBtn: document.querySelector('[data-mdl-close]'),
      modal: document.querySelector('[data-mdl]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();