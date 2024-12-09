const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/css/style.css",  "/css/style1.css",

  "/images/coffee01.gif",  "/images/coffee03.gif",
  "/images/coffee03.gif",  "/images/coffee04.gif",
  "/images/coffee05.gif",  "/images/coffee06.gif",

  "/images/coffee01.webp",   "/images/coffee02.webp",  
  "/images/coffee03.webp",  "/images/coffee04.webp",  
  "/images/coffee05.webp",  "/images/coffee06.webp",  

  "/images/icons/icon-32x32.png", 
  "/images/icons/icon-72x72.png", 
  "/images/icons/icon-96x96.png", 
  "/images/icons/icon-128x128.png", 
  "/images/icons/icon-144x144.png", 
  "/images/icons/icon-152x152.png", 
  "/images/icons/icon-192x192.png", 
  "/images/icons/icon-384x384.png", 
  "/images/icons/icon-512x512.png", 

   "/js/app.js",  
   "/js/app1.js",  

  "/qr/img/icono-1.gif",  "/qr/img/icono-2.gif",
  "/qr/img/icono-3.gif",  "/qr/img/icono-4.gif",
  "/qr/img/icono-5.gif",  "/qr/img/icono-6.gif",
  "/qr/img/icono-7.gif",  "/qr/img/icono-8.gif",

  "/qr/img/javier-1.gif",  "/qr/img/javier-2.gif",

  "/qr/1.html",  "/qr/2.html",  "/qr/3.html",
  "/qr/style.css",  "/qr/script.js",

  "/lk1.html",  "/index.html",  "/omn1.html",
  "/manifest.json",  "/serviceWorker.js",

  "/new/css/_bg1.css",  "/new/css/bootstrap1.css",
  "/new/css/style.css",  "/new/css/web-app1.css",

  "/new/images/img/btn1.png",  "/new/images/img/btn2.png",
  "/new/images/img/btn3.png",  "/new/images/img/btn4.png",
  "/new/images/img/btn5.png",  "/new/images/img/btn6.png",
  "/new/images/img/btn7.png",  "/new/images/img/btn8.png",
  "/new/images/img/btn9.png",  "/new/images/img/btn10.png",

  "/new/images/img/btn11.png",  "/new/images/img/btn12.png",
  "/new/images/img/btn13.png",  "/new/images/img/btn14.png",
  "/new/images/img/btn15.png",  "/new/images/img/btn16.png",
  "/new/images/img/btn17.png",  "/new/images/img/btn18.png",
  "/new/images/img/btn19.png",  "/new/images/img/btn20.png",


  "/new/images/coffee1.svg",  "/new/images/coffee2.svg",  "/new/images/coffee3.svg",
  "/new/images/coffee4.svg",  "/new/images/coffee5.svg",  "/new/images/coffee6.svg",
  "/new/images/coffee7.svg",  "/new/images/coffee8.svg",  "/new/images/coffee9.svg",

  "/new/images/coffee10.svg",  "/new/images/coffee11.svg",  "/new/images/coffee12.svg",
  "/new/images/coffee13.svg",  "/new/images/coffee14.svg",  "/new/images/coffee15.svg",
  "/new/images/coffee16.svg",  "/new/images/coffee17.svg",  "/new/images/coffee18.svg",

  "/new/images/coffee19.svg",  "/new/images/coffee20.svg",  "/new/images/coffee21.svg",
  "/new/images/coffee22.svg",  "/new/images/coffee23.svg",  "/new/images/coffee24.svg",
  "/new/images/coffee25.svg",  "/new/images/coffee26.svg",  "/new/images/coffee27.svg",

  "/new/img/icono-1.gif",  "/new/img/icono-2.gif",  "/new/img/icono-3.gif",
  "/new/img/icono-4.gif",  "/new/img/icono-5.gif",  "/new/img/icono-6.gif",
  "/new/img/icono-7.gif",  "/new/img/icono-8.gif",  "/new/img/icono-9.gif",

  "/new/js/app.js",
  "/new/js/app.js",
  "/new/js/app.js",
  "/new/js/app.js",

  "/new/pg1.html",
  "/new/ini.html"

];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
