export default function menu(menu_btn, menu, menuLink) {
  const d = document;

  d.addEventListener("click", (e) => {
    if(e.target.matches(menu_btn) || e.target.matches(`${menu_btn} *`)) {
      d.querySelector(menu_btn).firstElementChild.classList.toggle("none");
      d.querySelector(menu_btn).lastElementChild.classList.toggle("none");
      d.querySelector(menu).classList.toggle("is-active");
    }

    if(e.target.matches(menuLink)) {
      d.querySelector(menu_btn).firstElementChild.classList.remove("none");
      d.querySelector(menu_btn).lastElementChild.classList.add("none");
      d.querySelector(menu).classList.remove("is-active");
    }
  })
}