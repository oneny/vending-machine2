import cola from "./dummy/cola.js";
import cartList from "./dummy/cartList.js";
import myColaList from "./dummy/myColaList.js";

const state = {
  cola,
  cartList,
  myColaList,
  myOwnMoney: 0, // 소지금
  myBalance: 0, // 잔액
};

const contListsEl = document.querySelector(".cont-lists");
const listCartEl = document.querySelector(".list-cart");
const contMyColaList = document.querySelector(".cont-myColaList");

// 자판기 콜라 렌더링
function renderColaList(colas) {
  colas.forEach((el) => {
    const colaItem = document.createElement("li");

    const colaBtn = document.createElement("button");
    colaBtn.classList.add("btn-cola");
    colaItem.appendChild(colaBtn);

    const colaImg = document.createElement("img");
    colaImg.setAttribute("src", el.source);
    colaImg.setAttribute("alt", el.alt);
    colaImg.classList.add("img-cola");

    const colaName = document.createElement("strong");
    colaName.classList.add("txt-name");
    colaName.textContent = el.name;

    const colaPrice = document.createElement("span");
    colaPrice.classList.add("txt-price");
    colaPrice.textContent = el.price;

    colaBtn.append(colaImg, colaName, colaPrice);

    // 품절 시 이미지 요소 추가 및 버튼 클릭 불가
    const soldOutImg = document.createElement("img");
    soldOutImg.classList.add("sold-out");
    if (el.quantity <= 0) {
      colaItem.appendChild(soldOutImg);
      colaBtn.setAttribute("disabled", "");
    }
    contListsEl.appendChild(colaItem);
  });
}

// 콜라 음료수 버튼 이벤트 추가
function addColaItemEvent() {
  document
    .querySelectorAll(".btn-cola")
    .forEach((el) => el.addEventListener("click", addCartItem(el)));
}

// 콜라 카트 추가
function addCartItem(el) {
  return function () {
    console.log(el);
  };
}

// 카트 리스트 렌더링
function renderCartList(cartItems) {
  removeChildNodes(listCartEl);

  cartItems.forEach((el) => {
    const cartItem = document.createElement("li");

    const cartItemBtn = document.createElement("button");
    cartItemBtn.classList.add("btn-cart");
    cartItem.appendChild(cartItemBtn);

    const cartItemImg = document.createElement("img");
    cartItemImg.setAttribute("src", el.source);
    cartItemImg.setAttribute("alt", el.alt);
    cartItemImg.classList.add("img-cart");
    
    const cartItemName = document.createElement("strong");
    cartItemName.classList.add("txt-cartName");
    cartItemName.textContent = el.name;

    const cartItemQuantity = document.createElement("span");
    cartItemQuantity.classList.add("txt-cartPrice");
    cartItemQuantity.textContent = el.quantity;

    cartItemBtn.append(cartItemImg, cartItemName, cartItemQuantity);

    listCartEl.appendChild(cartItem);
  });
}

function renderMyColaList(myColas) {
  console.log(myColaList);

  myColas.forEach((el) => {
    const myColaItem = document.createElement("li");
    myColaItem.classList.add("item-myCola");

    const myColaItemImg = document.createElement("img");
    myColaItem.classList.add("img-myCola");
    myColaItemImg.setAttribute("src", el.source);
    myColaItemImg.setAttribute("alt", el.alt);

    const myColaItemName = document.createElement("strong");
    myColaItemName.classList.add("txt-myColaName");
    myColaItemName.textContent = el.name;

    const myColaItemQuantity = document.createElement("span");
    myColaItemQuantity.classList.add("txt-myColaQuantity");
    myColaItemQuantity.textContent = el.quantity;

    myColaItem.append(myColaItemImg, myColaItemName, myColaItemQuantity);

    contMyColaList.appendChild(myColaItem);
  });
}

function removeChildNodes(el) {
  while (el.hasChildNodes()) {
    el.removeChild(el.firstChild);
  }
}

function init() {
  renderColaList(state.cola);
  addColaItemEvent();
  renderCartList(state.cartList);
  renderMyColaList(state.myColaList);
}

init();
