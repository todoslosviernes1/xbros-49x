const container = document.querySelector(".container");
const coffees = [
  {
    name: "Bacoa_bar",
    image: "images/coffee11.webp",
	ir: "../bacoa/index.html"
  },
  {
    name: "BacoaBar1",
    image: "images/coffee12.webp",
	ir: "../bacoa1/index.html"
  },
  {
    name: "BacoaBar2",
    image: "images/coffee13.webp",
	ir: "../bacoa2/index.html"
  },
  {
    name: "BacoaBar3",
    image: "images/coffee14.webp",
	ir: "../bacoa3/index.html"
  },
  {
    name: "Bosqueserino1",
    image: "images/coffee15.webp",
	ir: "../bosqueserino1/index.html"
  },
  {
    name: "Bosqueserino2",
    image: "images/coffee16.webp",
	ir: "../bosqueserino2/index.html"
  },
  {
    name: "bosqueserino3",
    image: "images/coffee17.webp",
	ir: "../bosqueserino3/index.html"
  },
  {
    name: "bosqueserino4",
    image: "images/coffee18.webp",
	ir: "../bosqueserino4/index.html"
  },
  {
    name: "bunkervzla1",
    image: "images/coffee19.webp",
	ir: "../bunkervzla1/index.html"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image, ir  }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href=${ir}>Vista</a>
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
