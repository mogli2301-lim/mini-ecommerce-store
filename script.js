const products = [
    { id: 1, name: "Shoes", price: 899 },
    { id: 2, name: "T-shirt", price: 499 },
    { id: 3, name: "Watch", price: 1599 }
];

let cart = [];

function loadProducts() {
    const container = document.getElementById("products");
    products.forEach(p => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        `;
        container.appendChild(div);
    });
}

function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateCart();
}

function updateCart() {
    const list = document.getElementById("cartItems");
    const total = document.getElementById("total");

    list.innerHTML = "";
    let sum = 0;

    cart.forEach(i => {
        const li = document.createElement("li");
        li.textContent = `${i.name} - ₹${i.price}`;
        list.appendChild(li);
        sum += i.price;
    });

    total.textContent = sum;
}

loadProducts();
