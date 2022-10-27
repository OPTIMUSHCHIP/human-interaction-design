const $ = document.querySelector.bind(document);

const currentUrl = window.location.pathname.slice(7);
const dashboard = $("li.dashboard"),
  map = $("li.map"),
  history = $("li.history");

const handleActiveNavItem = (url) => {
  if (url === "dashboard.html") {
    dashboard.classList.add("active");
    map.classList.remove("active");
    history.classList.remove("active");
  } else if (url === "map.html") {
    map.classList.add("active");
    dashboard.classList.remove("active");
    history.classList.remove("active");
  } else if (url === "history.html") {
    history.classList.add("active");
    dashboard.classList.remove("active");
    map.classList.remove("active");
  }
};

window.onload = handleActiveNavItem(currentUrl);
