(() => {
    const menuBtnRef = document.querySelector("[data-product-button]");
    const mobileMenuRef = document.querySelector("[data-product]");
    const mobileBtnClose = document.querySelector("[data-product-close]");
  
    menuBtnRef.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-opens");
    })

    mobileBtnClose.addEventListener('click', () => {
      mobileMenuRef.classList.toggle("is-opens");
    });
  })()


  


  