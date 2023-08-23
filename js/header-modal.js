(() => {
    const openModalBtn = document.querySelector("[header-modal-open]");
    const closeModalBtn = document.querySelector("[header-modal-close]");
    const modal = document.querySelector("[header-modal]");

    openModalBtn.addEventListener("click", toggleModal);
    closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        modal.classList.toggle("is-hidden");
    }
})();