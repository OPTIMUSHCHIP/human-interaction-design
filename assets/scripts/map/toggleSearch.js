const searchIcon = $(".search .fa-magnifying-glass");
const searchBar = $(".search-input");
const searchInput = $(".search-input input");
const container = $(".search");

searchIcon.addEventListener("click", () => {
  showSearchBar();
});

function showSearchBar() {
  searchBar.classList.toggle("d-none");
  searchInput.focus();
  container.classList.toggle("overlay");
}
