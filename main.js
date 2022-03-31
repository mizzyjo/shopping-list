"use strict";

//input new items
const input = document.querySelector(".footer__input");
let inputValue = null;

const items = document.querySelector(".items");

input.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
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
      <div class="itme__divider"></div>
    `;

    items.append(item__row);
    console.log(event.currentTarget);
    console.log(event.target);
    // event.currentTarget.value = "";
    event.target.value = "";
  }
});
