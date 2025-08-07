// === ЖДЁМ ЗАГРУЗКИ DOM ===
document.addEventListener("DOMContentLoaded", function () {
  console.log("Страница загружена");

  // === ТОВАРЫ ===
  const products = [
    {
      id: 1,
      name: "Серый органайзер ПО-2",
      price: 2500,
      image: "images/po2-gray.png",
      description: "Органайзер на рабочий стол в виде символа эпохи — известного каждому советского забора серии ПО-2, разработанного архитектором Бориса Лахмана.\n\nПросто, лаконично, со вкусом.\n\nВыполнено из серого гипсобетона, снизу — пробковая подложка, чтобы не царапать поверхность.\n\nВнешний диаметр: 108 мм\nВнутренний диаметр: 90 мм\nВысота: 105 мм\n\nДоступен и в белом варианте!"
    },
    {
      id: 2,
      name: "Белый органайзер ПО-2",
      price: 2500,
      image: "images/po2-white.png",
      description: "Белый органайзер на рабочий стол в виде символа эпохи — известного каждому советского забора серии ПО-2, разработанного архитектором Бориса Лахмана.\n\nПросто, лаконично, со вкусом.\n\nВыполнено из белого гипсобетона, снизу — пробковая подложка, чтобы не царапать поверхность.\n\nВнешний диаметр: 108 мм\nВнутренний диаметр: 90 мм\nВысота: 105 мм\n\nДоступен и в сером варианте!"
    },
    {
      id: 3,
      name: "Магнитик «Гостиница Русь»",
      price: 900,
      image: "images/rus-hotel-magnet.png",
      description: "Магнитик на холодильник в виде фасада знаменитой бруталистской гостиницы «Русь».\n\nГостиница расположена в Санкт-Петербурге. Это один из тех объектов, мимо которых трудно пройти. Строгий ритм фасада, никаких излишеств — всё как мы любим.\n\nИзделие выполнено из гипсобетона, размер: 10×6 см.\n\nСзади приклеены 2 магнита-шайбочки.\n\nДоступны в разных расцветках."
    },
    {
      id: 4,
      name: "Президиум РАН",
      price: 6000,
      image: "images/ras.png",
      description: "Модель главного корпуса Президиума Российской академии наук (РАН) — архитектурной доминанты Москвы, которую заботливо называют \"Золотые мозги\".\n\nБелый гипсобетон, пробковая подложка, \"корона\" выполнена из пластика с золотой покраской.\n\nВысота — 15 см, вес — 850 г. Пробковая подложка."
    },
    {
      id: 5,
      name: "Чувашский театр оперы и балета",
      price: 3500,
      image: "images/chuvash-opera.png",
      description: "Бетонная модель бренда «Конкретика» в виде одного из самых брутальных сооружений, сохранившихся на постсоветском пространстве — Чувашского государственного театра оперы и балета.\n\nМожно использовать как подсвечник.\n\nВысота изделия составляет 15,5 см.\nВес — порядка 2,5 кг.\n\nВозможно исполнение как в сером, так и в белом вариантах.\n\nСверху предусмотрено место для установки чайной свечи диаметром 4 см. Снизу — пробковая подложка."
    },
    {
      id: 6,
      name: "НПП «Радуга»",
      price: 3500,
      image: "images/raduga.png",
      description: "Модель доминанты Выборгского района Петербурга от «Конкретика».\n\nЗдание построено в 1990 году специально для ОКБ «Радуга» по проекту малоизвестной архитектурной мастерской.\n\nДлина: 70 мм\nШирина: 60 мм\nВысота: 154 мм\n\nСерый гипсобетон, пробковая подложка.\n\nДоступна к заказу в белом и сером цветах."
    },
    {
      id: 7,
      name: "Градирня - подставка под благовония",
      price: 3000,
      image: "images/cooling-tower.png",
      description: "Подставка под благовония в виде градирни.\nСерый гипсобетон, 3 составных элемента, в том числе крышка.\nБлаговоние в комплекте.\n\nПринцип действия простой:\n▪️ Поджигаем благовоние\n▪️ Размещаем его на подставке\n▪️ Сверху ставим трубу\n▪️ Наслаждаемся видом дымящей градирни и ароматом\n▪️ Когда закончили — накрываем крышкой и идём по своим делам\n\nДлина: 94 мм\nШирина: 94 мм\nВысота: 112 мм\n\nДоступно в белом варианте."
    },
    {
      id: 8,
      name: "Подсвечник Дом Советов",
      price: 3000,
      image: "images/kaliningrad-duma.png",
      description: "Подсвечник в виде самого известного советского недостроя — Дома советов, который до недавних пор располагался в центре Калининграда.\n\nЗнаковый памятник архитектуры уже снесён, но память о нём жива.\n\nМы предлагаем поставить свечу за Дом Советов!\n\nДлина - 100 мм\nШирина - 77 мм\nВысота - 107 мм\n\nСерый гипсобетон, пробковая подложка.\n\nВозможно исполнение в белом варианте."
    },
    {
      id: 9,
      name: "Серый органайзер ПО-3",
      price: 2000,
      image: "images/po3-gray.png",
      description: "Органайзер на рабочий стол серого цвета в виде советского забора серии ПО-3.\n\nВыполнено из серого гипсобетона, снизу — пробковая подложка, чтобы не царапать поверхность.\n\nВнешний диаметр: 108 мм\nВнутренний диаметр: 90 мм\nВысота: 105 мм\n\nДоступен и в белом варианте!"
    },
    {
      id: 10,
      name: "Белый органайзер ПО-3",
      price: 2000,
      image: "images/po3-white.png",
      description: "Органайзер на рабочий стол белого цвета в виде советского забора серии ПО-3.\n\nВыполнено из белого гипсобетона, снизу — пробковая подложка, чтобы не царапать поверхность.\n\nВнешний диаметр: 108 мм\nВнутренний диаметр: 90 мм\nВысота: 105 мм"
    },
    {
      id: 11,
      name: "Архив ВМФ",
      price: 3000,
      image: "images/vmf-archive.png",
      description: "Модель в виде высотки Российского государственного архива Военно-Морского Флота. Одна из первых моделей «Конкретика».\n\nПо изначальному плану 22-этажное здание хотели возвести в Санкт-Петербурге к 1975 году, но из-за бюрократических проволочек строительство постоянно откладывалось, в итоге архив в том виде, в котором он существует сейчас, завершили лишь к 2006 году.\n\nДлина: 60 мм\nШирина: 60 мм\nВысота: 146 мм\n\nСерый гипсобетон. Пробковая подложка."
    },
    {
      id: 12,
      name: "Подсвечники ПО-2",
      price: 3000,
      image: "images/po2-candleholders.png",
      description: "Подсвечники в виде известных каждому заборов серии ПО-2 архитектора Бориса Лахмана.\n\nПросто, красиво и со вкусом. Свечи и подставка — в комплекте.\n\nРазмеры подставки / самих подсвечников:\n\nДлина - 175 мм / 59 мм\nШирина - 90 мм / 59 мм\nВысота - 15 мм / 54 мм"
    }
  ];

  let cart = [];
  let cartButton = document.querySelector('#products-page .btn-primary');

  // === ФУНКЦИИ ===
  function showProducts() {
    document.getElementById("products-page").classList.add("active");
    document.getElementById("cart-page").classList.remove("active");
    document.getElementById("product-detail-page").classList.remove("active");
    updateCartButton();
  }

  function showCart() {
    document.getElementById("products-page").classList.remove("active");
    document.getElementById("cart-page").classList.add("active");
    document.getElementById("product-detail-page").classList.remove("active");
    renderCart();
  }

  function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
      console.error("Товар не найден:", productId);
      return;
    }

    document.getElementById("detail-title").textContent = product.name;
    document.getElementById("detail-price").textContent = `Цена: ${product.price} ₽`;
    document.getElementById("detail-description").textContent = product.description;
    const img = document.querySelector(".product-image");
    img.src = product.image;
    img.onerror = () => console.error("Не удалось загрузить изображение:", product.image);

    document.getElementById("products-page").classList.remove("active");
    document.getElementById("cart-page").classList.remove("active");
    document.getElementById("product-detail-page").classList.add("active");

    document.querySelector(".btn-add-to-cart").onclick = () => addToCart(product);
  }

  function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    updateCartButton();
    Telegram.WebApp.HapticFeedback?.impactOccurred?.("light");
  }

  function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartButton();
    renderCart();
  }

  function updateCartButton() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartButton) {
      cartButton.textContent = `КОРЗИНА (${count})`;
    }
  }

  function renderCart() {
    const container = document.getElementById("cart-items");
    const totalEl = document.getElementById("total-price");

    if (!container || !totalEl) return;

    if (cart.length === 0) {
      container.innerHTML = "<p>КОРЗИНА ПУСТА</p>";
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

  function sendOrder() {
    if (cart.length === 0) return;

    const user = Telegram.WebApp.initDataUnsafe.user;
    const userName = user ? `${user.first_name}${user.last_name ? " " + user.last_name : ""}` : "Неизвестный";

    const message = {
      action: "order",
      brand: "Конкретика",  // ← Исправлено
      user: userName,
      userId: user?.id,
      items: cart.map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    };

    Telegram.WebApp.sendData(JSON.stringify(message));
  }

  function renderProducts() {
    const container = document.getElementById("products-list");
    if (!container) {
      console.error("Контейнер товаров не найден");
      return;
    }

    container.innerHTML = "";

    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-thumb">
        <h3>${product.name}</h3>
        <p class="product-price">${product.price} ₽</p>
        <button class="btn-add" onclick="addToCartFromCard(event, ${product.id})">➕ В КОРЗИНУ</button>
      `;
      card.onclick = (e) => {
        if (e.target.closest('.btn-add')) return;
        showProductDetail(product.id);
      };
      container.appendChild(card);
    });

    console.log("Товары отрендерены:", products.length);
  }

  window.addToCartFromCard = function(event, productId) {
    event.stopPropagation();
    const product = products.find(p => p.id === productId);
    if (product) {
      addToCart(product);
    }
  };

  // === ЗАПУСК ===
  Telegram.WebApp.ready();
  Telegram.WebApp.expand();

  renderProducts();
  showProducts();
});
