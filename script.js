const cross = document.querySelectorAll(".cross");
const cont = document.querySelector(".pt2-container");
const budget = document.querySelector(".budget");
const budgetCal = document.querySelector(".budget-cal");
const enter = document.querySelector(".arrow");
const budgetContainer = document.querySelector(".budget-input2");
const edit = document.querySelector(".edit");
const form = document.querySelector(".form-control");
const foodItems = document.querySelector(".food-items");
const part1 = document.querySelector(".part1");
let isError = false;

function cleanInputString(str) {
  const regex = /[+\s]/g;
  return str.replace(regex, "");
}

function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

function addItem(e) {
  const parent = e.target.closest(".part1");
  const name = parent.querySelector(".title").textContent;
  const foodContainer = document.querySelector(`.${name}`);

  let html = `<div class="part2">
  <div class="add-name">
    <label for="name">Name: </label>
    <input id="name" type="'text" required />
  </div>
  <div class="add-calories">
    <label for="name">Calories: </label>
    <input id="name" type="'number" required />
  </div>
  <div class="icons">
    <div class="icons2">
      <img class="x" src="./pictures/x.png" />
      <img class="check" src="./pictures/check.png" />
    </div>
  </div>
 </div>`;

  foodContainer.insertAdjacentHTML("beforeend", html);

  const x_buttons = document.querySelectorAll(".x");
  x_buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const part2 = e.target.closest(".part2");
      part2.classList.toggle("hidden");
    });
  });
}

cross.forEach((btn) => btn.addEventListener("click", addItem));

enter.addEventListener("click", function (e) {
  e.preventDefault();
  let value = cleanInputString(budget.value);
  const invalid = isInvalidInput(value);
  if (value === "" || value <= 0 || value > 20000) {
    budgetCal.innerHTML = "Invalid Input";
    budget.value = "";
  } else {
    budgetCal.innerHTML = `Budget: ${value} calories`;
    budgetContainer.classList.add("hidden");
    edit.classList.remove("hidden");
    form.style.marginRight = "300px";
  }
});

edit.addEventListener("click", function (e) {
  e.preventDefault();
  budgetContainer.classList.toggle("hidden");
  form.style.marginLeft = "100px";
});
