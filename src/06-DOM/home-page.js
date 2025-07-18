export function homePage() {
  const container = document.querySelector(".container");

  const homePageOption = document.createElement("div");
  homePageOption.classList.add("home-page-option");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title");
  titleDiv.textContent = "Battleship";

  homePageOption.appendChild(titleDiv);

  container.appendChild(homePageOption);
}
