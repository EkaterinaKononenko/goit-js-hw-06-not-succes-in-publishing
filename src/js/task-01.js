//1. Подсчет колличества категорий в ul#categories

const quantity = document.querySelector("ul#categories").children.length;
li.className = "item";
console.log("Number of categories:", quantity);

//2.Найти категории h2 и колличество элементов в каждой категории
const elements = document.querySelectorAll("h2");
for (const element of elements) {
  console.log("Category:", element.textContent);
  const lengthOfCategory = element.nextElementSibling.children.length;
  console.log("Elements:", lengthOfCategory);
}
// 3. Вывод в консоль
/*Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5*/
