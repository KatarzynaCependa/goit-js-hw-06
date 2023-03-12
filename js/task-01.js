const numberOfCategories = document.querySelectorAll(".item").length;
console.log(`Number of categories:`, numberOfCategories);

const items = document.querySelectorAll(".item");
for (const item of items) {
  const headerText = item.querySelector("h2").textContent;
  const numberofElements = item.querySelectorAll("li").length;

  console.log(`Category: ${headerText}\nElements: ${numberofElements}`);
}
