// Initializing 3 arrays with the menu items
const breakfastMenu = ["Pancakes", "Eggs Benedict", "Oatmeal", "Frittata"];
const mainCourseMenu = ["Steak", "Pasta", "Burger", "Salmon"];
const dessertMenu = ["Cake", "Ice Cream", "Pudding", "Fruit Salad"];

// Iterating through the breakfastMenu using map method
const breakfastMenuItemsHTML = breakfastMenu.map(
    (item, index) => `<p>Item ${index + 1}: ${item}</p>`
).join("");
document.getElementById("breakfastMenuItems").innerHTML = breakfastMenuItemsHTML;

// Traversing through the mainCourseMenu using forEach method
let mainCourseItem = "";
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById("maincourseMenuItems").innerHTML = mainCourseItem;

// Iterating through the dessertMenu using for loop
let dessertItem = "";
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById("dessertMenuItems").innerHTML = dessertItem;