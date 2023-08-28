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

(() => {
    const openModalBtn = document.querySelector("[products2-modal-open]");
    const closeModalBtn = document.querySelector("[products2-modal-close]");
    const modal = document.querySelector("[products2-modal]");

    openModalBtn.addEventListener("click", toggleModal);
    closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        modal.classList.toggle("is-hidden");
    }
})();

(() => {
    const openModalBtn = document.querySelector("[products3-modal-open]");
    const closeModalBtn = document.querySelector("[products3-modal-close]");
    const modal = document.querySelector("[products3-modal]");

    openModalBtn.addEventListener("click", toggleModal);
    closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        modal.classList.toggle("is-hidden");
    }
})();