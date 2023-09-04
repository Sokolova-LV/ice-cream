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

(() => {
    const openModalBtn = document.querySelector("[contacts2-modal-open]");
    const closeModalBtn = document.querySelector("[contacts2-modal-close]");
    const modal = document.querySelector("[contacts2-modal]");

    openModalBtn.addEventListener("click", toggleModal);
    closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        modal.classList.toggle("is-hidden");
    }
})();
