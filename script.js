// Пример товаров
const products = [
    { id: 1, name: "Кофта", price: 1500, image: "images/hoodie.png" },
    { id: 2, name: "Шапка", price: 800, image: "images/hat.png" },
    { id: 3, name: "Перчатки", price: 600, image: "images/gloves.png" }
  ];
  
  // Корзина
  let cart = [];
  let cartButton;
  
  // Инициализация
  Telegram.WebApp.ready();
  Telegram.WebApp.expand(); // Раскрыть на весь экран
  
  cartButton = document.querySelector('#products-page .btn-primary');
  
  function showProducts() {
    document.getElementById("products-page").classList.add("active");
    document.getElementById("cart-page").classList.remove("active");
    updateCartButton();
  }
  
  function showCart() {
    document.getElementById("products-page").classList.remove("active");
    document.getElementById("cart-page").classList.add("active");
    renderCart();
  }
  
  function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    updateCartButton();
    renderCart();
  }
  
  function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartButton();
    renderCart();
  }
  
  function updateCartButton() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartButton.textContent = `Корзина (${count})`;
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
          <strong>${item.name}</strong> ×${item.quantity} = ${cost} ₽
        </div>
        <button onclick="removeFromCart(${item.id})">✕</button>
      `;
      container.appendChild(div);
    });
  
    totalEl.textContent = total;
  }
  
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
  
  // Генерация списка товаров
  function renderProducts() {
    const container = document.getElementById("products-list");
    products.forEach(product => {
      const div = document.createElement("div");
      div.className = "product-card";
      div.innerHTML = `
        <div>
          <strong>${product.name}</strong><br>
          ${product.price} ₽
        </div>
        <img src="${product.image}" alt="${product.name}">
        <button onclick="addToCart(${JSON.stringify(product)})">+</button>
      `;
      container.appendChild(div);
    });
  }
  
  // Запуск
  renderProducts();
  showProducts();