const linkIcons = document.querySelectorAll("#icon--link");
const navView = document.querySelector(".nav-view ");
const closeBtn = document.querySelector(".fa-xmark ");
linkIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    navView.classList.toggle("view");
    closeBtn.style.display = "block";
  });
});
closeBtn.addEventListener("click", () => {
  navView.classList.remove("view");
});
function activeLink() {
  linkIcons.forEach((item) => item.classList.remove("active-link"));
  this.classList.add("active-link");
}
linkIcons.forEach((item) => item.addEventListener("click", activeLink));
