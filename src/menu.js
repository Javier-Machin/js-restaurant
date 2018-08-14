import { selectTab } from './tabselector'

function renderMenu() {
  const container = document.getElementById("content");
  const navbarLinks = document.getElementsByClassName("nav-link");
  const header = document.createElement("header");;
  const menu = document.createElement("section");
  let food = "";
  

  //Selects correct tab
  selectTab(1);
  
  food = document.createElement("article");
  food.innerHTML = "Fresh fish 🐠";
  menu.appendChild(food);

  food = document.createElement("article");
  food.innerHTML = "Fresh meat 🍖";
  menu.appendChild(food);

  food = document.createElement("article");
  food.innerHTML = "Salad 🥗";
  menu.appendChild(food);

  food = document.createElement("article");
  food.innerHTML = "Mom's Spaghetti 🍝";
  menu.appendChild(food);

  food = document.createElement("article");
  food.innerHTML = "Fresh fish 🐟";
  menu.appendChild(food);

  food = document.createElement("article");
  food.innerHTML = "Fresh meat 🥩";
  menu.appendChild(food);

  food = document.createElement("article");
  food.innerHTML = "Potato salad 🥗";
  menu.appendChild(food);

  food = document.createElement("article");
  food.innerHTML = "Mom's Spaghetti 🍝";
  menu.appendChild(food);
  
  header.classList.add("header");
  menu.classList.add("menu");

  container.appendChild(header);
  container.appendChild(menu);
}

export { renderMenu } 