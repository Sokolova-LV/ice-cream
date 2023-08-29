(() => {
    const openModalBtn = document.querySelector("[contacts-modal-open]");
    const closeModalBtn = document.querySelector("[contacts-modal-close]");
    const modal = document.querySelector("[contacts-modal]");

    openModalBtn.addEventListener("click", toggleModal);
    closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        modal.classList.toggle("is-hidden");
    }
})();
