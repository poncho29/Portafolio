export default function formulario(form, loader, response) {
  const d  = document;

  d.addEventListener("submit", (e) => {
    e.preventDefault();
    d.querySelector(loader).classList.remove("none");
    fetch("https://formsubmit.co/ajax/meneses0828@gmail.com", {
      method: "POST",
      body: new FormData(e.target)
    })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      d.querySelector(loader).classList.add("none");
      location.hash = "#gracias";
      d.querySelector(form).reset();
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
      d.querySelector(response).querySelector("h3").innerHTML = `Error ${err.status} : ${message}`;
    }).finally(() => {
      d.querySelector(loader).classList.add("none");
      setTimeout(() => {
        location.hash = "#close";
      }, 3000);
    })
  })
}