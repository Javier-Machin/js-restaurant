function selectTab(tab) {
  const navbarLinks = document.getElementsByClassName("nav-link");

  navbarLinks[0].classList.add("unselected");
  navbarLinks[1].classList.add("unselected");
  navbarLinks[2].classList.add("unselected");

  navbarLinks[tab].classList.remove("unselected");
}

export { selectTab } 