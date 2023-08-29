(() => {
    const openModalBtn = document.querySelector("[about-modal-open]");
    const closeModalBtn = document.querySelector("[about-modal-close]");
    const modal = document.querySelector("[about-modal]");

    openModalBtn.addEventListener("click", toggleModal);
    closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        modal.classList.toggle("is-hidden");
    }
})();