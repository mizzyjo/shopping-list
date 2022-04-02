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
const deleteBtn = document.querySelectorAll(".item__delete");
const itemRow = document.querySelectorAll(".item__row");
const item = document.querySelector(".item__delete");
console.log("-=---");
// console.log(item.dataset.delcnt);

let cnt = 0;
deleteBtn.forEach((element) => console.log(element));
itemRow.forEach((element) => console.log(element));

for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", (event) => {
    console.log("del btn is clicked");
    console.log(itemRow[i].dataset.rowcnt);
    console.log(deleteBtn[i].dataset.delcnt);
    removeItem(cnt, i);
    // if (itemRow[cnt].dataset.rowCnt == deleteBtn[cnt].dataset.delCnt) {
    //   deleteBtn[i].parentElement.parentElement.remove();
    //   console.log(deleteBtn[i].parentElement.parentElement);
    // }
  });
}

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
  // console.log(event.currentTarget);
  // console.log(event.target);
  // event.currentTarget.value = "";
  event.target.value = "";
}

function removeItem(cnt) {
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", (event) => {
      console.log("del btn is clicked");
      console.log(itemRow[i].dataset.rowcnt);
      console.log(deleteBtn[i].dataset.delcnt);
      // removeItem(cnt, i);
      if (itemRow[cnt].dataset.rowCnt == deleteBtn[cnt].dataset.delCnt) {
        deleteBtn[i].parentElement.parentElement.remove();
        console.log(deleteBtn[i].parentElement.parentElement);
      }
    });
  }
  // if (itemRow[cnt].dataset.rowCnt == deleteBtn[cnt].dataset.delCnt) {
  //   deleteBtn[i].parentElement.parentElement.remove();
  //   console.log(deleteBtn[i].parentElement.parentElement);
  // }
}
removeItem(cnt);
function start() {}
