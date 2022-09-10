export default function sortHP(characters) {
  return characters.sort((a, b) => a.health > b.health ? -1 : 1);
}
