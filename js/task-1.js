const items = document.querySelectorAll("li.item");
console.log(`Number of categories: ${items.length}`);
items.forEach((item) => {
  item.style.backgroundColor = "#F6F6FE";
  item.style.borderRadius = "8px";
  item.style.width = "392px";

  const itemTitle = item.querySelector("h2").textContent;
  console.log(`Category: ${itemTitle}`);
  const liItems = item.querySelectorAll("li");
  console.log(`Elements: ${liItems.length}`);
});
