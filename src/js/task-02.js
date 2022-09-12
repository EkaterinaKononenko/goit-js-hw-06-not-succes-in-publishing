/*Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul#ingredients.*/

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// Создание 'li' с классом 'item' и текстом из массива ingredients:

let parent = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i += 1) {
  let li = document.createElement("li");
  li.className = "item";
  li.textContent = ingredients[i];
  parent.appendChild(li);
}
