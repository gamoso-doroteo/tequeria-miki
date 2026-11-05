// CONFIGURACIÓN: cambia estos datos por los reales de tu taquería.
const WHATSAPP_NUMBER = "5215512345678"; // Código de país + número, sin + ni espacios. Ejemplo México: 5215512345678
const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  tiktok: "https://www.tiktok.com/"
};

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
  });
}

document.querySelectorAll("[data-social]").forEach((link) => {
  const network = link.dataset.social;
  link.href = SOCIAL_LINKS[network] || "#";
  link.target = "_blank";
  link.rel = "noopener";
});

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  link.href = `https://wa.me/${WHATSAPP_NUMBER}`;
});

document.querySelectorAll("[data-whatsapp-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const nombre = data.get("nombre")?.toString().trim() || "";
    const correo = data.get("correo")?.toString().trim() || "";
    const mensaje = data.get("mensaje")?.toString().trim() || "";
    const texto = `Hola, soy ${nombre}.\\nCorreo: ${correo}\\nMensaje: ${mensaje}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
});
