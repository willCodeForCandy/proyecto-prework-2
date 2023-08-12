const productList = [
  {
    name: "Corsair K60 RGB Pro",
    price: 149.99,
    discount: 0.34,
    stars: 5,
    reviews: 94,
    seller: "PcComponentes",
    img: "./assets/1883-corsair-k60-rgb-pro-low-profile-teclado-gaming-cherry-mx-low-profile-speed.webp",
    promos: { sponsored: true, freeShipping: true, trending: false },
  },
  {
    name: "Tempest Apocalypse Combo Teclado + Raton + Auriculares",
    price: 52.99,
    discount: false,
    stars: 4,
    reviews: 2653,
    seller: "PcComponentes",
    img: "assets/132-tempest-apocalypse-combo-gaming-teclado-raton-auriculares-alfombrilla-comprar.webp",
    promos: { sponsored: false, freeShipping: true, trending: true },
  },
  {
    name: "Corsair K95 RGB Platinum",
    price: 219.99,
    discount: 0.13,
    stars: 5,
    reviews: 429,
    seller: "PcComponentes",
    img: "/assets/e2.webp",
    promos: { sponsored: true, freeShipping: true, trending: false },
  },
  {
    name: "Forgeon Clutch RGB",
    price: 104.99,
    discount: false,
    stars: 5,
    reviews: 116,
    seller: "PcComponentes",
    img: "assets/1227-forgeon-clutch-teclado-gaming-rgb-60-switch-brown-comprar.webp",
    promos: { sponsored: false, freeShipping: true, trending: false },
  },
  {
    name: "Speedlink Ferus Negro/Rojo",
    price: 19.98,
    discount: false,
    stars: 4,
    reviews: 326,
    seller: "CROSSTALK MEDIA",
    img: "assets/1297-speedlink-ferus-teclado-gaming-negro-rojo.webp",
    promos: { sponsored: true, freeShipping: false, trending: false },
  },
  {
    name: "Tempest Cataclysm Combo Teclado + Raton + Alfombrilla",
    price: 21.99,
    discount: false,
    stars: 4,
    reviews: 1855,
    seller: "PcComponentes",
    img: "assets/1548-tempest-cataclysm-combo-3-en-1-gaming-teclado-raton-alfombrilla-cfdbbc7d-b7f1-4790-9fcd-96ed0a09d067.webp",
    promos: { sponsored: false, freeShipping: false, trending: true },
  },
  {
    name: "HyperX Alloy Origins Blanco Rosa Teclado Mecánico RGB",
    price: 119.99,
    discount: 0.16,
    stars: 5,
    reviews: 4,
    seller: "PcComponentes",
    img: "assets/1759-hyperx-alloy-origins-60-rosa-teclado-mecanico-gaming-rgb-hx-red-ingles-usa.webp",
    promos: { sponsored: false, freeShipping: true, trending: false },
  },
  {
    name: "Tempest Diablo Teclado Mecánico RGB",
    price: 62.99,
    discount: false,
    stars: 5,
    reviews: 666,
    seller: "PcComponentes",
    img: "assets/tempest-diablo-teclado-mecanico-gaming-rgb-switch-red-52769723-1c9e-484a-822d-35d37be7d06a.webp",
    promos: { sponsored: false, freeShipping: true, trending: false },
  },
  {
    name: "Tempest K11 Ogre RGB",
    price: 36.99,
    discount: false,
    stars: 4,
    reviews: 172,
    seller: "PcComponentes",
    img: "assets/1810-tempest-k11-ogre-teclado-mecanico-gaming-rgb-negro.webp",
    promos: { sponsored: false, freeShipping: false, trending: false },
  },
  {
    name: "Speedlink Ludicium Negro",
    price: 19.98,
    discount: false,
    stars: false,
    reviews: 0,
    seller: "CROSSTALK MEDIA",
    img: "assets/1111-speedlink-ludicium-teclado-gaming-negro.webp",
    promos: { sponsored: true, freeShipping: false, trending: false },
  },
];
let filteredProducts = [];
const main$$ = document.querySelector("main");
// Función para crear el esqueleto básico de la tarjeta para cada producto, usando template literals
const createProductCard = (product) => {
  return `
        <article class="product-card">
        <div class="product-img-container">
            <img src="${product.img}" alt="${product.name}">
        </div>
        <div class="product-description">
            <h3>${product.name}</h3>
            <p class="product-price">${product.price}€</p>
            <div class="stats">
                <span class="rating"></span>
                <p class="reviews">(${product.reviews})</p>
            </div>
            <span class="seller">Vendido por <strong>${product.seller}</strong></p>
        </div>
    </article>`;
};
// Función para crear e inyectar las estrellas en base a la clave 'stars' de cada producto
const createStars = (product, parent) => {
  if (product.stars) {
    for (let j = 1; j <= 5; j++) {
      const star = document.createElement("img");
      if (j <= product.stars) {
        star.src = "assets/star-yellow.png";
      } else {
        star.src = "assets/star-gray.png";
      }
      star.classList.add("icon");
      parent.append(star);
    }
  }
};
// Función para crear e inyectar carteles por cada promo que tiene aplicado el producto
const addPromos = (product, parent) => {
  const promosDiv = document.createElement("div");
  promosDiv.className = "promos-container";

  parent.prepend(promosDiv);

  if (product.promos.freeShipping) {
    const freeShippingDiv = document.createElement("div");
    freeShippingDiv.classList.add("free-shipping");
    freeShippingDiv.innerText = "Envío gratis";
    promosDiv.appendChild(freeShippingDiv);
  }

  if (product.promos.sponsored) {
    const sponsoredDiv = document.createElement("div");
    sponsoredDiv.classList.add("sponsored");
    sponsoredDiv.innerText = "Patrocinado";
    promosDiv.appendChild(sponsoredDiv);
  }

  if (product.promos.trending) {
    const trendingDiv = document.createElement("div");
    trendingDiv.classList.add("trending");
    trendingDiv.innerText = "Trending";
    const infoIcon = document.createElement("img");
    infoIcon.src = "assets/info.svg";
    infoIcon.classList.add("icon");
    trendingDiv.appendChild(infoIcon);
    promosDiv.appendChild(trendingDiv);
  }
};
// Función para pintar las tarjetas básicas
const renderStore = (productList) => {
  for (const product of productList) {
    main$$.innerHTML += createProductCard(product);
  }
};
// Función para agregar a las tarjetas los modificadores de estellas y promociones
const renderPromos = () => {
  const cardRatings = document.querySelectorAll(".rating");
  const descriptionDivs = document.querySelectorAll(".product-description");
  for (let i = 0; i < productList.length; i++) {
    createStars(productList[i], cardRatings[i]);
    addPromos(productList[i], descriptionDivs[i]);
  }
};
// Pinto las tarjetas recorriendo el array
renderStore(productList);
// Agrego modificadores una vez que las tarjetas están creadas
renderPromos();

const asideTag = document.querySelector("aside");

const select = document.querySelector("#ventaja");
const input = document.querySelector("#precio");

input.max = productList.sort((a, b) => a.price - b.price).at(-1).price;
input.min = productList.sort((a, b) => a.price - b.price).at(0).price;

const filtrarPrecio = () => {
  productosFiltrados.splice(0);
  div.innerHTML = "";
  // tenemos muchas cosas y quedo únicamente con las que cumplan la condición que yo quiero
  for (const product of productList) {
    if (product.price <= input.value) {
      productosFiltrados.push(product);
    }
  }
  for (const product of productosFiltrados) {
    div.innerHTML += createProductCard(product);
  }
};

const filtrarTipo = () => {
  div.innerHTML = "";
  productosFiltrados = productList.filter(
    (product) => product[select.value] === true
  );
  for (const product of productosFiltrados) {
    div.innerHTML += createProductCard(product);
  }
};

input.addEventListener("change", filtrarPrecio);
select.addEventListener("change", filtrarTipo);
