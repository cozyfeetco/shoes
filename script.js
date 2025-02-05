const list = document.querySelectorAll(".list");

function activeLink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}

list.forEach((item) => item.addEventListener("click", activeLink));

document.addEventListener("DOMContentLoaded", () => {
    let totalPairs = 0;
    let totalPrice = 0;
    let productNames = [];

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            let price = parseInt(button.getAttribute("data-price"));
            let productName = button.getAttribute("data-product-name"); // Assuming the product name is stored in this attribute
            totalPairs++;
            totalPrice += price;

            // Add product name to the list of selected products
            productNames.push(productName);

            // Update Billing Section
            document.getElementById("totalPairs").textContent = totalPairs;
            document.getElementById("totalPrice").textContent = totalPrice;
            document.getElementById("selectedProducts").textContent = productNames.join(", ");
        });
    });
});

// image slider in home page
let images = ["image1.png", "image2.png"];
let currentIndex = 0;
let slider = document.getElementById("slider");

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    slider.src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    slider.src = images[currentIndex];
}

// Automatically change images every 3 seconds
setInterval(nextImage, 3000);


// AI BOT 
const answers = [
    "Our shoes are crafted using high-quality, full-grain leather, known for its durability, natural texture, and ability to develop a beautiful patina over time. We also offer options made with genuine leather and suede, depending on the style, to ensure a perfect blend of comfort and elegance.",
    
    "To keep your shoes in great condition:\n- For leather shoes, wipe gently with a damp cloth and use a leather conditioner. Avoid direct heat.\n- For suede or nubuck, brush with a soft-bristle brush and use a specialized protector spray.\n- For fabric or mesh, spot-clean with mild soap and water, or machine-wash (if permitted) in cold water.\n- Always air-dry shoes away from sunlight and use shoe trees to maintain shape.",

    "Yes! We specialize in bringing your ideas to life. Whether you're a brand, retailer, or individual with a unique design, we offer custom manufacturing services. Share your sketches, materials preferences, or technical plans with our team, and we’ll collaborate closely to create a prototype that matches your vision. For bulk orders or bespoke projects, please contact us directly.",

    "We offer a wide variety of footwear to suit every need and style! Browse categories like:\n- Casual shoes (sneakers, loafers, slip-ons)\n- Formal shoes (oxfords, derbies, dress boots)\n- Athletic shoes (running, hiking, gym trainers)\n- Seasonal footwear (sandals, snow boots, rain shoes)\n- Specialty options (vegan, eco-friendly, or wide-fit styles). Use our website’s filters to explore by size, color, or material.",

    "Hello! I'm here to help you find the perfect pair of shoes! How can i assist you today?",
    
    "Explore our diverse collection of stylish and affordable footwear! Here are some of our popular products available in our website or Visit our shop in Ambur for the best products to satisfy your desires.",

    "Welcome to our user - friendly platform! Here's a quick guide: 1. Home page: Features a stylish image slider and banner showing our brand logo, 2. Shop Section:  Browser premium, exclusive products, add items to your cart and enjoy seamless checkout, 3. Comments, 4. Contact Us, 5. AI Bot Assitant",

    "Go To Shop Select Your Desired Product, Add To Cart, Checkout: Navigate to your cart, choose your size, and confirm the shoe details, Place Order",

    "No, we are not manufacturing shoes to keep in stock. We only sell fresh pieces and make custom shoes, which is why we do not maintain an inventory."
];

function showAnswer(index) {
    const answerBox = document.getElementById("answer-box");
    answerBox.innerText = answers[index];
    answerBox.style.display = "block";
}

//CUBE
let currentFace = 0;

function changeImages() {
    const faces = document.querySelectorAll('.face img');
    faces[currentFace % 6].src = extraImages[currentFace % 2]; 
    currentFace++;
}

// Change images every 5 seconds to display all 8 images
setInterval(changeImages, 5000);

//cube rotating
let cube = document.querySelector('.cube');
let angleX = 0;
let angleY = 0;
let rotationSpeed = 28; // Adjust speed of manual rotation

// Automatic rotation (every 10 seconds)
cube.style.animation = `rotateCube ${rotationSpeed}s infinite linear`;

// Button event listeners for manual control
document.querySelector('.rotate-left').addEventListener('click', () => {
  angleY -= 90; // Rotate left by 90 degrees
  rotateCube();
});

document.querySelector('.rotate-right').addEventListener('click', () => {
  angleY += 90; // Rotate right by 90 degrees
  rotateCube();
});


function rotateCube() {
  // Apply the rotation manually based on the angle
  cube.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
}


