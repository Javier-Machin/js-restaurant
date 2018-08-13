function renderHome() {
  const container = document.getElementById("content");
  const header = document.createElement("header");
  const description = document.createElement("section");
  const text = document.createElement("p");
  
  text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit" +
                   "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." + 
                   "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" + 
                   "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in" +
                   "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla" + 
                   "pariatur. Excepteur sint occaecat cupidatat non proident," + 
                   "sunt in culpa qui officia deserunt mollit anim id est laborum."
  
  header.classList.add("header");
  description.appendChild(text);
  description.classList.add("description");
  container.appendChild(header);
  container.appendChild(description);
}

export { renderHome } 