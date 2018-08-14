import { renderHome } from './home'
import { renderMenu} from './menu'
import { renderContact } from './contact'
import { resetContent } from './reset'

function renderNavbar() {
  const container = document.getElementById("navbar");
  const homeLink = document.createElement("a");
  const menuLink = document.createElement("a");
  const contactLink = document.createElement("a");

  homeLink.innerHTML = "HOME";
  homeLink.classList.add("nav-link", "unselected");
  homeLink.addEventListener("click", () => { 
    resetContent();
    renderHome(); 
  })

  menuLink.innerHTML = "MENU";
  menuLink.classList.add("nav-link","unselected");
  menuLink.addEventListener("click", () => { 
    resetContent();
    renderMenu(); 
  })

  contactLink.innerHTML = "CONTACT";
  contactLink.classList.add("nav-link","unselected");
  contactLink.addEventListener("click", () => { 
    resetContent();
    renderContact() 
  })

  container.appendChild(homeLink);
  container.appendChild(menuLink);
  container.appendChild(contactLink);
}

export { renderNavbar }