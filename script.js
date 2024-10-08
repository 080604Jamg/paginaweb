const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', event => {
        modal.style.display = "block";
        modalImg.src = event.target.src;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', event => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
