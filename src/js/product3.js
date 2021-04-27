(() => {
    const menuBtnRef = document.querySelector("[data-product-button3]");
    const mobileMenuRef = document.querySelector("[data-product3]");
    const mobileBtnClose = document.querySelector("[data-product-close3]");
  
    menuBtnRef.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-opens");
    })

    mobileBtnClose.addEventListener('click', () => {
      mobileMenuRef.classList.toggle("is-opens");
    });
  })()