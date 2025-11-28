const botonMenu = document.getElementById("btn-share");
const iconShare = document.querySelector(".icono-share");
const menu = document.getElementById("menu-share");

botonMenu.addEventListener("click", function () {
  if (menu.style.display === "none") {
    menu.style.display = "flex";
    botonMenu.style.backgroundColor = "#6e8098";
    iconShare.style.fill = "#ffffff";
  } else {
    menu.style.display = "none";
    botonMenu.style.backgroundColor = "#ecf2f8";
    iconShare.style.fill = "#6e8098";
  }
});
