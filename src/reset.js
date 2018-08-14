function resetContent() {
  const container = document.getElementById("content");
  const body = document.getElementsByTagName("body")[0]

  body.removeChild(container);
  
  const newContainer = document.createElement("div");
  newContainer.id = "content";
  
  body.appendChild(newContainer);
}

export { resetContent }