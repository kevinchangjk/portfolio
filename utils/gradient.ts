export const originalColors = [
  "#13B0F5", // original blue
  "#E70FAA", // original pink
];

export const colors = [
  "#F4845F", // Coral
  "#F25C54", // Bittersweet
  "#BA274A", // Rose red
  "#F96900", // Pumpkin
  "#FFA552", // Sandy brown
  "#F7B267", // Fawn
  "#FCDE9C", // Peach yellow
  "#f9DC5C", // Naples yellow
  "#BCD979", // Pistachio
  "#C4D6B0", // Tea green
  "#62C370", // Emerald
  "#68A691", // Cambridge blue
  "#2F9C95", // Persian green
  "#15E6CD", // Turqoise
  "#13B0F5", // original blue
  "#3185FC", // Azure
  "#84BCDA", // Carolina blue
  "#D6EEFF", // Columbia blue
  "#8D909B", // Cool gray
  "#BFB5AF", // Silver
  "#ECE2D0", // Bone
  "#FFE5D4", // Champagne pink
  "#EFC7C2", // Tea rose
  "#EFBCD5", // Fairy tale
  "#E574BC", // Sky Magenta
  "#E70FAA", // original pink
  "#8F3985", // Plum
  "#8332AC", // Grape
  "#C792DF", // Wisteria
  "#582C4D", // Violet
  "#403F4C", // Onyx
  "#3E442B", // Drab dark brown
  "#573D1C", // Cafe noir
  "#BA5624", // Burnt orange
  "#A26769", // Rose Taupe
];

export function getGradient(colors: string[], direction: string) {
  const res = `linear-gradient(${direction}, ${colors[0]}, ${colors[1]})`;
  return res;
}

export function getGradientFlow(colors: string[], direction: string) {
  const res = `linear-gradient(${direction}, ${colors[0]}, ${colors[1]}, ${colors[0]}, ${colors[1]})`
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
