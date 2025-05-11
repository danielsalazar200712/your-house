function toggleMenu() {
    document.body.classList.toggle("dark-mode"); // Corrección: `toggle` en lugar de `togggle`
}

const container = document.getElementById("product-container");
const whatsappNumber = "573017116153"; // Reemplaza con el número real (con código de país)

const products = [
    { name: "casa en Pereira", price: 1200, description: "exclusiva y comoda casa", image: "img/images.jpeg" },
    { name: "casa en Medellin", price: 600, description: "curiosa y natural", image: "img/descarga.jpeg" },
    { name: "casa de campo en el santuario", price: 150, description: "ideal para descansar", image: "img/images (1).jpeg" },
    { name: "casa moderna en Manizales", price: 300, description: "exclusiva y moderna", image: "img/images (4).jpeg" },
    { name: "casa en El carmen", price: 90, description: "imponente y atractiva", image: "img/images (5).jpeg" },
    { name: "casa en Cali", price: 60, description:"un ambiente tranquilo y moderno", image: "img/images (6).jpeg" },
    { name: "Casa en Jardin", price: 6, description: "ideal para vacaciones", image: "img/images (7).jpeg" },
    { name: "caasa de campo en La ceja", price: 85000, description: "Ligera y versátil para trabajar", image: "img/images (8).jpeg" },
    { name: "casa de campo en San Geronimo", price: 80000, description: "natural y apasible", image: "img/images (9).jpeg" },
    { name: "casa en El quindio", price: 94800, description: "tradicional y acojedora", image: "img/images (10).jpeg" }
];

products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("col-md-4");

    productElement.innerHTML = `
        <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <p class="text-primary fw-bold">$${product.price}</p>
                <a href="https://wa.me/${whatsappNumber}?text=Hola,%20quiero%20comprar%20${encodeURIComponent(product.name)}%20por%20$${product.price}" class="btn btn-success" target="_blank">Comprar</a>
            </div>
        </div>
    `;

    container.appendChild(productElement);
});
document.getElementById("modoBoton").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    // Guardar la preferencia del usuario en localStorage
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);

    // Cambiar icono según el modo
    this.textContent = isDarkMode ? "🌙" : "☀️";
});

// Cargar la preferencia guardada cuando la página se recarga
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        document.getElementById("modoBoton").textContent = "☀️";
    }
});
