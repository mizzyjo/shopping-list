"use strict";

//input new items by Enter
const input = document.querySelector(".footer__input");
let inputValue = null;

const items = document.querySelector(".items");

input.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    addItem(event);
  }
});

// input new items by button
const plusBtn = document.querySelector(".footer__button");
plusBtn.addEventListener("click", (event) => {
  addItem(event);
});

// remove items
const deleteBtn = document.querySelector(".item__delete");
deleteBtn.addEventListener("click", (event) => {
  deleteBtn.parentElement.parentElement.remove();
  console.log(event.currentTarget);
});

function addItem(event) {
  inputValue = input.value;
  console.log(inputValue);
  const item__row = document.createElement("li");
  item__row.className = "item__row";
  item__row.innerHTML = `
      <div class="item">
        <span class="item__name">${inputValue}</span>
        <button class="item__delete">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
      <div class="item__divider"></div>
    `;

  items.append(item__row);
  // console.log(event.currentTarget);
  // console.log(event.target);
  // event.currentTarget.value = "";
  event.target.value = "";
}
