const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.getElementById("ingredients");

for (const ingredient of ingredients) {
  const newListElement = document.createElement("li");
  newListElement.textContent = ingredient;
  newListElement.classList.add("item");
  list.append(newListElement);
}
