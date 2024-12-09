import { navbar } from "../Component/navbar.js";
import { footer } from "../Component/footer.js";
let header = document.getElementById("Home-headerEl");
header.innerHTML = navbar();
let footerEl = document.getElementById("home-footer");
footerEl.innerHTML = footer();


var micon = document.getElementById('mIcon');
var mIconInner1 = document.querySelector(".barsimgouter") //I 
var mIconInner2 = document.querySelector(".closeimgouter") //I 
var menu = document.querySelector(".menu")
micon.addEventListener("click", () => {
  menu.classList.toggle('activeMenu');
  mIconInner1.classList.toggle('d_block')
  mIconInner2.classList.toggle('d_block')
})

const cartCountInfo = document.getElementById("cart-count-info");
let count = JSON.parse(localStorage.getItem("cart"))??[];
cartCountInfo.textContent = count.length;


