
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.querySelector(".close");

// Selecciona todos los botones
document.querySelectorAll(".ver-mas").forEach(btn => {
  btn.addEventListener("click", () => {
    const hexagono = btn.parentElement;
    modalTitle.textContent = hexagono.dataset.title;
    modalDesc.textContent = hexagono.dataset.desc;
    modal.style.display = "flex";
  });
});

// Cerrar modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
