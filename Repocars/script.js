console.log("SCRIPT JS FONCTIONNE");
console.log(cars);
const container = document.getElementById("cars-container");

cars.forEach(function(car) {
    const card = document.createElement("div");
    card.classList.add("car-card");
    card.innerHTML = `
        <img src="${car.image}" alt="${car.name}">
        <h2>${car.name}</h2>
        <p>${car.price}</p>
        <p>${car.shortDescription}</p>
    `;
    card.addEventListener("click", function() {
    window.location.href = `product.html?id=${car.id}`;
});
    container.appendChild(card);
});