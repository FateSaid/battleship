function playerMenu() {
  const playerOne = document.querySelector(".player-one");

  const onePlayerDiv = document.createElement("div");
  onePlayerDiv.classList.add("button-menu");
  const onePlayerBtn = document.createElement("button");
  onePlayerBtn.setAttribute("id", "player-one-button");
  onePlayerBtn.textContent = "1 Player";
  onePlayerDiv.appendChild(onePlayerBtn);

  playerOne.appendChild(onePlayerDiv);

  const playerTwo = document.querySelector(".player-two");

  const twoPlayerDiv = document.createElement("div");
  twoPlayerDiv.classList.add("button-menu");
  const twoPlayerBtn = document.createElement("button");
  twoPlayerBtn.setAttribute("id", "player-two-button");
  twoPlayerBtn.textContent = "2 Player";
  twoPlayerDiv.appendChild(twoPlayerBtn);

  playerTwo.appendChild(twoPlayerDiv);
}

function menuButtonEvent() {
  const playerOneButton = document.getElementById("player-one-button");
  const playerTwoButton = document.getElementById("player-two-button");

  playerOneButton.addEventListener("click", (e) => {
    e.preventDefault();
    createPlayerForm("one");
    playerBtn();
  });

  playerTwoButton.addEventListener("click", (e) => {
    e.preventDefault();
    createPlayerForm("one");
    createPlayerForm("two");
    playerBtn();
  });
}

function createPlayerForm(status) {
  const playerDiv = document.querySelector(`.player-${status}`);
  playerDiv.textContent = "";

  const form = document.createElement("form");

  const label = document.createElement("label");
  label.setAttribute("for", `player-${status}-menu`);

  const input = document.createElement("input");
  input.setAttribute("id", `player-${status}-menu`);

  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(playerBtn);

  playerDiv.appendChild(form);
}

function playerBtn() {
  const form = document.querySelector("form");
  const playerBtn = document.createElement("button");

  form.appendChild(playerBtn);
}

export { playerMenu };
