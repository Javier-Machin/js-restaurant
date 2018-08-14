import { selectTab } from './tabselector'

function renderContact() {
  const container = document.getElementById("content");
  const navbarLinks = document.getElementsByClassName("nav-link");
  const header = document.createElement("header");
  const description = document.createElement("section");
  let text = document.createElement("p");
  const map = document.createElement("iframe")
  
  map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1922.1837284108021!2d-149.8104390836551!3d61.19878578235156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x56c896f8de88dcc7%3A0xa3921f971c7a311d!2sE+Northern+Lights+Blvd%2C+Anchorage%2C+AK%2C+USA!5e0!3m2!1sen!2ses!4v1534246690955"
  map.width="100%"; 
  map.height="450";   
  map.style="border: 0; margin-top: 20px;";

  //Selects correct tab
  selectTab(2);
  
  text.innerHTML = "Call us! 1234-123-123"
  description.appendChild(text);

  text = document.createElement("p");
  text.innerHTML = "Northern Lights Boulevard, Anchorage, Alaska"
  description.appendChild(text);

  header.classList.add("header");
  description.classList.add("contact");
  container.appendChild(header);
  container.appendChild(description);
  container.appendChild(map);
}

export { renderContact } 