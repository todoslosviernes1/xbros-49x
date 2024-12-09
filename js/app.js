const container = document.querySelector(".container");
const coffees = [
  {
    name: "Productos/Accesorios",
    image: "images/coffee04.gif",
	ir: "new/pg1.html"

  },
  {
    name: "Baterias/Garantias",
    image: "images/coffee05.gif",
	ir: "new/pg1.html"
  },
  {
    name: "Ofertas Semanales",
    image: "images/coffee06.gif",
	ir: "new/pg1.html"
  },
  
    {
    name: "Liquidos/LubrimarKet",
    image: "images/coffee01.gif",
	ir: "new/pg1.html"

  },
  {
    name: "Clasificados/Automoviles",
    image: "images/coffee02.gif",
	ir: "new/pg1.html"
  },
  {
    name: "Servicios Adicionales",
    image: "images/coffee03.gif",
	ir: "new/pg1.html"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image, ir }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href=${ir}>Visitar</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
