//-----------------------------------------------------------//-----------------------------------------------------------//

let productsCountEl = document.getElementById("product-count");
let addToCartButton = document.querySelectorAll(".btn2");

for (let i = 0; i < addToCartButton.length; i++) {
  addToCartButton[i].addEventListener("click", function () {
    productsCountEl.innerHTML++;
  });
}
