import { playerSelection } from "./game-mode-selection";

export function homeEvents(play1Btn, play2Btn) {
  play1Btn.addEventListener("click", () => {
    playerSelection(1);
  });

  play2Btn.addEventListener("click", () => {
    playerSelection(2);
  });
}
