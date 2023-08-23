(() => {
    const openModalBtn = document.querySelector("[products-modal-open]");
    const closeModalBtn = document.querySelector("[products-modal-close]");
    const modal = document.querySelector("[products-modal]");

    openModalBtn.addEventListener("click", toggleModal);
    closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        modal.classList.toggle("is-hidden");
    }
})();