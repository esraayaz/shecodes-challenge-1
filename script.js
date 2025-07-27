// Variable to hold the number of items in the cart
let cartCount = 0;

// Maximum number of items allowed in the cart
const maxCartItems = 10;

// Span element to show the number inside the basket icon
const cartCountElement = document.getElementById("cart-count");

// Selecting the Order button
const orderButton = document.querySelector(".order-btn");

// Click order button
orderButton.addEventListener("click", function () {
  // Check if the cart count is less than the maximum allowed
  if (cartCount < maxCartItems) {
    // Increase basket number by 1
    cartCount++;

    // Update number of baskets
    cartCountElement.textContent = cartCount;

    // Alert
    alert(`You have ${cartCount} servings of pasta in your cart.`);
  } else {
    // Alert if the cart is full
    alert("You have reached the maximum limit of servings in your cart.");
  }
});
