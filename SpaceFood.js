let navBarToggle = document.getElementById("js-navbar-toggle");
let mainNav = document.getElementById("js-menu");

navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active")
})

// An array named foods with 5 food names(strings) inside
let foods = [
    'Space Pizza',
    'Pineapple Fruitcake',
    'Apollo Space Food Peaches',
    'Apollo Space Food Beef With Vegetables',
    'Apollo Space Food Spiced Fruit Cereal',
]

function displayFood() {
let index = Math.floor(Math.random()*foods.length);
// This will give a random food
foods[index];

let food = `<div class='card'>
            <p>${foods[index]}</p> 
            </div>`;

let div = document.querySelector("#food");
div.innerHTML = food;
}

document.getElementById("btn");
btn.addEventListener("click", displayFood);


// console.log(food.length)
// console.log(food[2])
// console.log(food[index])