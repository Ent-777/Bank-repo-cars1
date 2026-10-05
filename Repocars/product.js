const params = new URLSearchParams(window.location.search);
const carId = Number(params.get("id"));
const car = cars.find(function(car) {
    return car.id === carId;
});
console.log(car);
document.getElementById("product-image").src = car.image;
document.getElementById("product-name").textContent = car.name;
document.getElementById("product-price").textContent = car.price;
document.getElementById("product-description").textContent = car.description;
document.getElementById("product-mileage").textContent = car.mileage;
document.getElementById("product-body").textContent = car.bodyStyle;
document.getElementById("product-drive").textContent = car.driveType;
document.getElementById("product-transmission").textContent = car.transmission;
document.getElementById("product-engine").textContent = car.engine;
document.getElementById("product-fuel").textContent = car.fuel;
const gallery = document.getElementById("product-gallery");
car.images.forEach(function(image) {
    const img = document.createElement("img");
    img.src = image;
    img.alt = car.name;
    img.addEventListener("click", function() {
        document.getElementById("product-image").src = image;
    });
    gallery.appendChild(img);

});
const orderButton = document.getElementById("order-button");

orderButton.addEventListener("click", function () {

    const message = `Hello 👋

I am interested in this vehicle:

🚗 Model: ${document.getElementById("product-name").textContent}
💰 Price: ${document.getElementById("product-price").textContent}

I would like to purchase.

Thank you.`;

    const whatsappNumber = "14028480111";

    const whatsappURL =
        "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
});