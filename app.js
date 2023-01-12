//-----------------------------------------------------------//-----------------------------------------------------------//

let productsCountEl = document.getElementById("product-count");
let addToCartButton = document.querySelectorAll(".btn2");

for (let i = 0; i < addToCartButton.length; i++) {
  addToCartButton[i].addEventListener("click", function () {
    productsCountEl.innerHTML++;
  });
}

let likeBtn = document.getElementById("like-toggle");

function likeToggle() {
  if (likeBtn.style.backgroundColor == "red") {
    likeBtn.style.backgroundColor == "green";
  } else {
    likeBtn.style.backgroundColor == "red";
  }
}

function likeToggle() {
  document.getElementById("like-toggle").classList.toggle("active");
}
