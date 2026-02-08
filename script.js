let currentPage = 0;
let pages = [];

window.onload = function () {
  pages = document.querySelectorAll(".page");
};

function nextPage() {
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.remove("active");
    currentPage++;
    pages[currentPage].classList.add("active");
  }
}

function yesClicked() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "0";
    heart.style.fontSize = "22px";
    heart.style.animation = "rise 4s linear";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }
}
