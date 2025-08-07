// Пример товаров с описанием и изображением
const products = [
  {
    id: 1,
    name: "Тёплая кофта",
    price: 1500,
    image: "images/hoodie.png",
    description: "Стильная тёплая кофта из 100% хлопка. Подходит для прохладной погоды.",
    category: "Одежда"
  },
  {
    id: 2,
    name: "Шерстяная шапка",
    price: 800,
    image: "images/hat.png",
    description: "Шапка из натуральной шерсти. Удерживает тепло даже при минусовой температуре.",
    category: "Аксессуары"
  },
  {
    id: 3,
    name: "Тёплые перчатки",
    price: 600,
    image: "images/gloves.png",
    description: "Перчатки с влагоотводящей подкладкой. Подходят для активного отдыха.",
    category: "Аксессуары"
  }
];

// Корзина
let cart = [];
let cartButton;

// Текущая страница
let currentPage = 'products';

// Инициализация
Telegram.WebApp.ready();
Telegram.WebApp.expand();

cartButton = document.querySelector('#products-page .btn-primary');

// === Функции навигации ===
function showProducts() {
  document.getElementById("products-page").classList.add("active");
  document.getElementById("cart-page").classList.remove("active");
  document.getElementById("product-detail-page").classList.remove("active");
  currentPage = 'products';
  updateCartButton();
}

function showCart() {
  document.getElementById("products-page").classList.remove("active");
  document.getElementById("cart-page").classList.add("active");
  document.getElementById("product-detail-page").classList.remove("active");
  currentPage = 'cart';
  renderCart();
}

function showProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const detailPage = document.getElementById("product-detail-page");
  document.getElementById("products-page").classList.remove("active");
  document.getElementById("cart-page").classList.remove("active");
  detailPage.classList.add("active");
  currentPage = 'detail';

  detailPage.querySelector("h2").textContent = product.name;
  detailPage.querySelector(".product-image").src = product.image;
  detailPage.querySelector(".product-price").textContent = `${product.price} ₽`;
  detailPage.querySelector(".product-description").textContent = product.description;
  detailPage.querySelector(".product-category").textContent = `Категория: ${product.description}`;

  // Обновляем кнопку "Добавить в корзину"
  const addButton = detailPage.querySelector(".btn-add-to-cart");
  addButton.onclick = () => addToCart(product);
}

// === Корзина ===
function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCartButton();
  Telegram.WebApp.HapticFeedback.impactOccurred("light"); // вибрация (на iOS)
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartButton();
  renderCart();
}

function updateCartButton() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartButton) {
    cartButton.textContent = `Корзина (${count})`;
  }
}

function renderCart() {
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("total-price");

  if (cart.length === 0) {
    container.innerHTML = "<p>Корзина пуста</p>";
    totalEl.textContent = "0";
    return;
  }

  container.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const cost = item.price * item.quantity;
    total += cost;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div>
        <strong>${item.name}</strong> ×${item.quantity}<br>
        <small>${item.price} ₽ × ${item.quantity}</small>
      </div>
      <div style="text-align: right;">
        <div><strong>${cost} ₽</strong></div>
        <button class="btn-remove" onclick="removeFromCart(${item.id})">×</button>
      </div>
    `;
    container.appendChild(div);
  });

  totalEl.textContent = total;
}

// === Оформление заказа ===
function sendOrder() {
  if (cart.length === 0) return;

  const user = Telegram.WebApp.initDataUnsafe.user;
  const userName = user ? (user.first_name + (user.last_name ? " " + user.last_name : "")) : "Неизвестный";

  const message = {
    action: "order",
    user: userName,
    userId: user.id,
    items: cart.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity
    })),
    total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  };

  Telegram.WebApp.sendData(JSON.stringify(message));
}

// === Рендер товаров ===
function renderProducts() {
  const container = document.getElementById("products-list");
  container.innerHTML = ""; // очистим

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-thumb">
      <h3>${product.name}</h3>
      <p class="product-price">${product.price} ₽</p>
      <button class="btn-view" onclick="showProductDetail(${product.id})">Подробнее</button>
    `;
    container.appendChild(card);
  });
}

// Запуск при загрузке
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  showProducts();
});
