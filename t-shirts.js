const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2
  }
];

function displayStore() {
  const store = document.getElementById("store");
  store.innerHTML = ""; // Clear previous content

  tshirts.forEach((shirt, index) => {
    const tshirtCard = document.createElement("div");
    tshirtCard.classList.add("tshirt-card");

    tshirtCard.innerHTML = `
      <h2>${shirt.title}</h2>
      <img src="images/${shirt.image}" alt="${shirt.title}">
      <p>Price: $${shirt.price.toFixed(2)}</p>
      <p>Stock: ${shirt.stock > 0 ? shirt.stock : "<span class='out-of-stock'>Out of Stock</span>"}</p>
      <div class="tshirt-footer"></div>
    `;

    const footer = tshirtCard.querySelector(".tshirt-footer");

    if (shirt.stock > 0) {
      const quantitySelect = document.createElement("select");
      for (let i = 1; i <= shirt.stock; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        quantitySelect.appendChild(option);
      }

      const buyButton = document.createElement("button");
      buyButton.textContent = "Buy";
      buyButton.addEventListener("click", () => {
        const quantity = parseInt(quantitySelect.value);
        if (shirt.stock >= quantity) {
          tshirts[index].stock -= quantity;
          displayStore();
        }
      });

      footer.appendChild(quantitySelect);
      footer.appendChild(buyButton);
    } else {
      footer.innerHTML = `<span class="out-of-stock-message">Not available</span>`;
    }

    store.appendChild(tshirtCard);
  });
}

// Initial display
displayStore();
