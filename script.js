var productsContainer = document.querySelector(".products-container");

// Sample products data
var productsData = [
  {
    id: 1,
    title: "Floral T-Shirt (ID: 011021)",
    image: "img/p1.jpg",
    description: "Available Size: S, M, L, XL, XXL",
    link: "https://example.com/product1",
  },
  {
    id: 2,
    title: "Parrot T-shirt (ID: 0181901)",
    image: "img/p2.jpg",
    description: "Available Size: S, M, L, XL, XXL",
    link: "https://example.com/product2",
  },
  {
    id: 3,
    title: "White Flower T-Shirt (ID: 0617161)",
    image: "img/p3.jpg",
    description: "Available Size: S, M, L, XL, XXL",
    link: "https://example.com/product3",
  },
  {
    id: 4,
    title: "White Pink Lotus T-Shirt (ID: 7166181",
    image: "img/p4.jpg",
    description: "Available Size: S, M, L, XL",
    link: "https://example.com/product4",
  },
];

// Create a product card for each product and append it to the products container
function renderProducts(products) {
  productsContainer.innerHTML = "";
  products.forEach(function(product) {
    var productCard = `
      <div class="product-card">
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <div class="buttons">
          <button class="share-button"><i class="fa fa-share"></i>Share</button>
          <button class="edit-button"><i class="fa fa-edit"></i>Edit</button>
          <button class="integrate-button"><i class="fa fa-plus"></i>Integrate</button>
        </div>
      </div>
    `;
    productsContainer.insertAdjacentHTML("beforeend", productCard);
  });
}

// Render the initial set of products
renderProducts(productsData);

// Increment the product ID by 1 and add a new product
function addProduct() {
  var newProduct = {
    id: productsData.length + 1,
    title: `Product ${productsData.length + 1}`,
    image: "https://picsum.photos/300/200",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://example.com",
  };
  productsData.push(newProduct);
  renderProducts(productsData);
}

// Attach the add product function to the Add Product button
var addProductButton = document.querySelector(".add-product-button");
addProductButton.addEventListener("click", addProduct);
