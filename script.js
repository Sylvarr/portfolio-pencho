const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const links = document.querySelectorAll(".anchor");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

document.addEventListener("click", (e) => {
  if (!mobileMenu.classList.contains("hidden")) {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      mobileMenu.classList.add("hidden");
    }
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.add("hidden");
  });
});
