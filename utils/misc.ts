export const colors = [
  "#13B0F5",
  "#E70FAA",
  "#fc67fa",
  "#f7ff00",
  "#A5FECB",
  "#5433FF",
  "#20BDFF",
  "#BA8B02",
  "#ffa751",
  "#ffe259",
  "#FF0080",
  "#fd1d1d",
  "#bdc3c7",
  "#9a8478",
  "#93F9B9",
  "#ACB6E5",
  "#74ebd5",
  "#6D6027",
  "#D3CBB8",
  "#7303c0",
  "#fdeff9",
  "#ADA996",
  "#f05053",
  "#e1eec3",
  "#fdbb2d",
  "#22c1c3",
  "#fdbb2d",
  "#C9D6FF",
  "#d9a7c7",
  "#20e3b2",
  "#0f9b0f",
  "#FFAF7B",
  "#D76D77",
  "#283c86",
  "#EF3B36",
  "#8e44ad",
  "#000046",
  "#1CB5E0",
];

export function getGradient(colors: string[], direction: string) {
  const res = `linear-gradient(${direction}, ${colors[0]}, ${colors[1]})`;
  return res;
}

function choose<T>(choices: T[]) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

export function randomGradient() {
  const firstColor = choose(colors);
  let secondColor;
  do {
    secondColor = choose(colors);
  } while (secondColor === firstColor);
  return [firstColor, secondColor];
}
