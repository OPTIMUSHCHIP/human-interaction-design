const $ = document.querySelector.bind(document);

const currentUrl = window.location.pathname.slice(7);
const dashboard = $("li.dashboard"),
  forecast = $("li.forecast"),
  map = $("li.map"),
  history = $("li.history");

const removeActiveClass = (element = []) => {
  element.map((e) => e.classList.remove("active"));
};

const handleActiveNavItem = (url) => {
  if (url === "dashboard.html") {
    removeActiveClass([map, history, forecast]);
    dashboard.classList.add("active");
  } else if (url === "map.html") {
    removeActiveClass([dashboard, history, forecast]);
    map.classList.add("active");
  } else if (url === "history.html") {
    removeActiveClass([map, dashboard, forecast]);
    history.classList.add("active");
  } else if (url === "forecast.html") {
    removeActiveClass([map, history, dashboard]);
    forecast.classList.add("active");
  }
};

window.onload = handleActiveNavItem(currentUrl);

// SIDEBAR
const bar = $("i.fa-bars");
const sidebar = $(".sidebar");
const closeBtn = $("button.close");
if (sidebar) {
  bar.addEventListener("click", () => {
    sidebar.classList.toggle("d-none");
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("d-none");
  });
}
