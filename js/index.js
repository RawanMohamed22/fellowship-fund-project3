const menuBtn = document.getElementById("Nav-menu");
const sideBar = document.querySelector(".SideBar");
const notiBtn = document.querySelector(".notification-btn");
const notiBox = document.querySelector(".notifications-box");

notiBtn.addEventListener("click", () => {
    notiBox.classList.toggle("hidden");
});


menuBtn.addEventListener("click", () => {
    sideBar.classList.toggle("active");
    sideBar.classList.toggle("side-bar");
});

