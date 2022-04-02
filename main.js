"use strict";

//input new items by Enter
const input = document.querySelector(".footer__input");
let inputValue = null;

const items = document.querySelector(".items");
let cnt = 0;

input.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    addItem(event);
    removeItem(cnt);
  }
});

// input new items by button
const plusBtn = document.querySelector(".footer__button");
plusBtn.addEventListener("click", (event) => {
  addItem(event);
  removeItem(cnt);
});

function addItem(event) {
  inputValue = input.value;
  console.log(inputValue);
  const item__row = document.createElement("li");
  item__row.className = "item__row";
  item__row.innerHTML = `
      <div class="item" data-rowcnt=${cnt}>
        <span class="item__name">${inputValue}</span>
        <button class="item__delete" data-delcnt=${cnt}>
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
      <div class="item__divider"></div>
    `;

  cnt++;
  items.append(item__row);
  event.target.value = "";
}

// remove items
let deleteBtn = null;
let item = null;

function removeItem(cnt) {
  deleteBtn = document.querySelectorAll(".item__delete");
  item = document.querySelectorAll(".item");
  if (deleteBtn === null || item === null) {
    return;
  }
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", (event) => {
      console.log("del btn is clicked");
      console.log(item[i].dataset.rowcnt);
      console.log(deleteBtn[i].dataset.delcnt);
      if (item[i].dataset.rowcnt == deleteBtn[i].dataset.delcnt) {
        deleteBtn[i].parentElement.parentElement.remove();
        console.log(deleteBtn[i].parentElement.parentElement);
      }
    });
  }
}
