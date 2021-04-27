(() => {
    const menuBtnRef = document.querySelector("[data-product-button2]");
    const mobileMenuRef = document.querySelector("[data-product2]");
    const mobileBtnClose = document.querySelector("[data-product-close2]");
  
    menuBtnRef.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-opens");
    })

    mobileBtnClose.addEventListener('click', () => {
      mobileMenuRef.classList.toggle("is-opens");
    });
  })()
