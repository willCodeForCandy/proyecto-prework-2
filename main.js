const productList = [
  {
    name: "Corsair K60 RGB Pro",
    price: 149.99,
    discount: 0.34,
    stars: 5,
    reviews: 94,
    seller: "PcComponentes",
    img: "./assets/1883-corsair-k60-rgb-pro-low-profile-teclado-gaming-cherry-mx-low-profile-speed.webp",
    sponsored: true,
    freeShipping: true,
    trending: false,
  },
  {
    name: "Tempest Apocalypse Combo Teclado + Raton + Auriculares",
    price: 52.99,
    discount: false,
    stars: 4,
    reviews: 2653,
    seller: "PcComponentes",
    img: "assets/132-tempest-apocalypse-combo-gaming-teclado-raton-auriculares-alfombrilla-comprar.webp",
    sponsored: false,
    freeShipping: true,
    trending: true,
  },
  {
    name: "Corsair K95 RGB Platinum",
    price: 219.99,
    discount: 0.13,
    stars: 5,
    reviews: 429,
    seller: "PcComponentes",
    img: "/assets/e2.webp",
    sponsored: true,
    freeShipping: true,
    trending: false,
  },
  {
    name: "Forgeon Clutch RGB",
    price: 104.99,
    discount: false,
    stars: 5,
    reviews: 116,
    seller: "PcComponentes",
    img: "assets/1227-forgeon-clutch-teclado-gaming-rgb-60-switch-brown-comprar.webp",
    sponsored: false,
    freeShipping: true,
    trending: false,
  },
  {
    name: "Speedlink Ferus Negro/Rojo",
    price: 19.98,
    discount: false,
    stars: 4,
    reviews: 326,
    seller: "CROSSTALK MEDIA",
    img: "assets/1297-speedlink-ferus-teclado-gaming-negro-rojo.webp",
    sponsored: true,
    freeShipping: false,
    trending: false,
  },
  {
    name: "Tempest Cataclysm Combo Teclado + Raton + Alfombrilla",
    price: 21.99,
    discount: false,
    stars: 4,
    reviews: 1855,
    seller: "PcComponentes",
    img: "assets/1548-tempest-cataclysm-combo-3-en-1-gaming-teclado-raton-alfombrilla-cfdbbc7d-b7f1-4790-9fcd-96ed0a09d067.webp",
    sponsored: false,
    freeShipping: false,
    trending: true,
  },
  {
    name: "HyperX Alloy Origins Blanco Rosa Teclado Mecánico RGB",
    price: 119.99,
    discount: 0.16,
    stars: 5,
    reviews: 4,
    seller: "PcComponentes",
    img: "assets/1759-hyperx-alloy-origins-60-rosa-teclado-mecanico-gaming-rgb-hx-red-ingles-usa.webp",
    sponsored: false,
    freeShipping: true,
    trending: false,
  },
  {
    name: "Tempest Diablo Teclado Mecánico RGB",
    price: 62.99,
    discount: false,
    stars: 5,
    reviews: 666,
    seller: "PcComponentes",
    img: "assets/tempest-diablo-teclado-mecanico-gaming-rgb-switch-red-52769723-1c9e-484a-822d-35d37be7d06a.webp",
    sponsored: false,
    freeShipping: true,
    trending: false,
  },
  {
    name: "Tempest K11 Ogre RGB",
    price: 36.99,
    discount: false,
    stars: 4,
    reviews: 172,
    seller: "PcComponentes",
    img: "assets/1810-tempest-k11-ogre-teclado-mecanico-gaming-rgb-negro.webp",
    sponsored: false,
    freeShipping: false,
    trending: false,
  },
  {
    name: "Speedlink Ludicium Negro",
    price: 19.98,
    discount: false,
    stars: false,
    reviews: 0,
    seller: "CROSSTALK MEDIA",
    img: "assets/1111-speedlink-ludicium-teclado-gaming-negro.webp",
    sponsored: true,
    freeShipping: false,
    trending: false,
  },
];
const main$$ = document.querySelector("main");

const createStars = (product) => {};

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
            <span class="seller">Vendido por ${product.seller}</p>
        </div>
    </article>`;
};

const createStore = (productList) => {
  for (const product of productList) {
    main$$.innerHTML += createProductCard(product);
  }
};

createStore(productList);

const cardRatings = document.querySelectorAll(".rating");
const descriptionDivs = document.querySelectorAll(".product-description");

for (let i = 0; i < productList.length; i++) {
  if (productList[i].stars) {
    for (let j = 1; j <= 5; j++) {
      const star = document.createElement("img");
      if (j <= productList[i].stars) {
        star.src = "assets/star-yellow.png";
      } else {
        star.src = "assets/star-gray.png";
      }
      star.classList.add("icon");
      cardRatings[i].append(star);
    }
  }
  const promosDiv = document.createElement("div");
  promosDiv.className = "promos-container";
  descriptionDivs[i].prepend(promosDiv);
  if (productList[i].freeShipping) {
    const freeShippingDiv = document.createElement("div");
    freeShippingDiv.classList.add("free-shipping");
    freeShippingDiv.innerText = "Envío gratis";
    promosDiv.appendChild(freeShippingDiv);
  }
  if (productList[i].sponsored) {
    const sponsoredDiv = document.createElement("div");
    sponsoredDiv.classList.add("sponsored");
    sponsoredDiv.innerText = "Patrocinado";
    promosDiv.appendChild(sponsoredDiv);
  }
  if (productList[i].trending) {
    const trendingDiv = document.createElement("div");
    trendingDiv.classList.add("trending");
    trendingDiv.innerText = "Trending";
    const infoIcon = document.createElement("img");
    infoIcon.src = "assets/info.svg";
    infoIcon.classList.add("icon");
    trendingDiv.appendChild(infoIcon);
    promosDiv.appendChild(trendingDiv);
  }
}
