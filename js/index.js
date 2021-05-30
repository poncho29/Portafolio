import formulario from "./formulario.js";
import menu from "./menu.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  menu(".menu-btn", ".menu", ".menu a");
  formulario(".contact-form", ".contact-form-loader", ".contact-form-response");
})

