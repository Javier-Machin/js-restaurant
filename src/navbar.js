function renderNavbar() {
  const container = document.getElementById("navbar");
  const homeLink = document.createElement("a");
  const menuLink = document.createElement("a");
  const contactLink = document.createElement("a");

  homeLink.innerHTML = "HOME";
  homeLink.classList.add("nav-link");
  menuLink.innerHTML = "MENU";
  menuLink.classList.add("nav-link");
  menuLink.classList.add("unselected");
  contactLink.innerHTML = "CONTACT";
  contactLink.classList.add("nav-link");
  contactLink.classList.add("unselected");

  container.appendChild(homeLink);
  container.appendChild(menuLink);
  container.appendChild(contactLink);
}

export { renderNavbar }