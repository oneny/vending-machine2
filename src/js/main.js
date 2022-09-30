import cola from "./dummy/cola.js";
import cartList from "./dummy/cartList.js";
import myColaList from "./dummy/myColaList.js";
import toKRW from "./utils/toKRW.js";
import toNum from "./utils/toNum.js";
import "../style/style.css";

const state = {
  cola,
  cartList,
  myColaList,
  myOwnMoney: 0, // 소지금
  myBalance: 0, // 잔액
  currentPage: 0,
};

const contListsEl = document.querySelector(".cont-lists");
const listCartEl = document.querySelector(".list-cart");
const contMyColaList = document.querySelector(".cont-myColaList");
const btnGetEl = document.querySelector(".btn-get");
const btnMyMoneyEl = document.querySelector(".btn-mymoney");
const txtMyMoneyEl = document.querySelector(".txt-mymoney");
const txtBalanceEl = document.querySelector(".txt-balance");
const inpCreditEl = document.querySelector(".inp-credit");
const btnCreditEl = document.querySelector(".btn-credit");
const btnBalanceEl = document.querySelector(".btn-balance");
const btnLeftEl = document.querySelector(".btn-left");
const btnRightEl = document.querySelector(".btn-right");

// 자판기 콜라 렌더링
function renderColaList(colas) {
  removeChildNodes(contListsEl);

  for (let i = state.currentPage * 6; i < state.currentPage * 6 + 6; i++) {
    const el = colas[i];
    if (!el) break;

    const colaItem = document.createElement("li");

    const colaBtn = document.createElement("button");
    colaBtn.classList.add("btn-item");
    colaBtn.addEventListener("click", addCartItem(el));
    colaItem.appendChild(colaBtn);

    const colaImg = document.createElement("img");
    colaImg.setAttribute("src", el.source);
    colaImg.classList.add("img-item");

    const colaName = document.createElement("strong");
    colaName.classList.add("txt-name");
    colaName.textContent = el.name;

    const colaPrice = document.createElement("span");
    colaPrice.classList.add("txt-price");
    colaPrice.textContent = el.price;

    colaBtn.append(colaImg, colaName, colaPrice);

    // 품절 시 이미지 요소 추가 및 버튼 클릭 불가
    if (el.quantity <= 0) {
      const soldOutImg = document.createElement("img");
      soldOutImg.setAttribute("src", "./src/img/beverageImg/Sold-out.png");
      soldOutImg.setAttribute("alt", "품절");
      colaBtn.classList.add("sold-out");
      soldOutImg.classList.add("img-soldOut");
      colaBtn.appendChild(soldOutImg);
      colaBtn.setAttribute("disabled", "");
    }

    contListsEl.appendChild(colaItem);
  }
}

// 카트 리스트 렌더링
function renderCartList(cartItems) {
  removeChildNodes(listCartEl);

  cartItems.forEach((el) => {
    const cartItem = document.createElement("li");

    const cartItemBtn = document.createElement("button");
    cartItemBtn.classList.add("btn-cart");
    cartItemBtn.addEventListener("click", reduceCartItemQuantity(el));
    cartItem.appendChild(cartItemBtn);

    const cartItemImg = document.createElement("img");
    cartItemImg.setAttribute("src", el.source);
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

// 획득한 음료 리스트 렌더링
function renderMyColaList(myColas) {
  removeChildNodes(contMyColaList);

  myColas.forEach((el) => {
    const myColaItem = document.createElement("li");
    myColaItem.classList.add("item-myCola");

    const myColaItemImg = document.createElement("img");
    myColaItemImg.setAttribute("src", el.source);
    myColaItemImg.classList.add("img-myCola");

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

// ---------------------------------------------------------------------------
// 콜라 음료수 버튼 이벤트 추가
function addCartItem(el) {
  return function () {
    const itemInCart = searchCartItemId(el.id);

    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      const { id, name, price, source, alt } = el;
      state.cartList.push({
        colaId: id,
        name,
        price,
        quantity: 1,
        source,
        alt,
      });
    }
    el.quantity -= 1;

    renderColaList(state.cola);
    renderCartList(state.cartList);
  };
}

// 카트 음료수 수량 이벤트 추가
function reduceCartItemQuantity(el) {
  return function () {
    const cola = searchColaItemId(el.colaId);
    cola.quantity += 1;
    el.quantity -= 1;

    if (el.quantity <= 0) {
      state.cartList = state.cartList.filter((v) => v.colaId !== el.colaId);
    }

    renderColaList(state.cola);
    renderCartList(state.cartList);
  };
}

// 콜라 획득 이벤트 추가
function getCola() {
  let totalPrice = 0;
  state.cartList.forEach((item) => {
    totalPrice = totalPrice + item.quantity * item.price;
  });
  if (totalPrice > txtBalanceEl.textContent) return alert("잔액이 부족합니다.");

  state.cartList.forEach((myCola) => {
    const itemInMyCola = searchMyColaId(myCola.colaId);
    if (itemInMyCola) {
      itemInMyCola.quantity += myCola.quantity;
    } else {
      const { colaId, name, price, source } = myCola;
      state.myColaList.push({
        colaId,
        name,
        price,
        source,
        quantity: myCola.quantity,
      });
    }
  });

  txtBalanceEl.textContent = toKRW(
    toNum(txtBalanceEl.textContent) - totalPrice
  );
  state.cartList = []; // 카트 비우기
  renderCartList(state.cartList);
  renderMyColaList(state.myColaList);
}

// 소지금 입력하기
function inputMyOwnMoney() {
  let myMoney = prompt("소지금을 입력해주세요.");

  while (true) {
    // 문자가 들어있는 경우
    if (isNaN(myMoney) && myMoney !== null) {
      alert("금액을 입력해주세요.");
      myMoney = prompt("소지금을 입력해주세요.");
      continue;
    }

    // 취소를 눌렀을 경우
    if (myMoney === null || myMoney.length === 0)
      return (myMoney = txtMyMoneyEl.textContent);
    break;
  }

  txtMyMoneyEl.textContent = toKRW(myMoney);
}

// 입금하기
function deposit() {
  const myMoney = toNum(txtMyMoneyEl.textContent);
  const myBalance = toNum(txtBalanceEl.textContent);
  let inpMoney = inpCreditEl.value;

  if (inpMoney.length <= 0 || isNaN(inpMoney)) {
    alert("금액을 입력해주세요.");
    return (inpMoney = "");
  }

  if (inpMoney > myMoney) {
    const result = confirm(
      "소지금이 부족합니다. 소지금을 입력 및 수정하시겠습니까?"
    );
    if (result) return inputMyOwnMoney();
    else return;
  }
  txtBalanceEl.textContent = toKRW(myBalance + parseInt(inpMoney, 10));
  txtMyMoneyEl.textContent = toKRW(myMoney - inpMoney);
  inpCreditEl.value = "";
}

// 거스름돈 반환
function getMyBalance() {
  const myBalance = toNum(txtBalanceEl.textContent);

  if (myBalance === 0) return;

  const myMoney = toNum(txtMyMoneyEl.textContent);
  txtBalanceEl.textContent = "0";
  txtMyMoneyEl.textContent = toKRW(myBalance + myMoney);
}

function countUp() {
  state.currentPage += 1;
  if (state.currentPage > Math.floor(state.cola.length / 6))
    state.currentPage = 0;
  renderColaList(state.cola);
}

function countDown() {
  state.currentPage -= 1;
  if (state.currentPage < 0)
    state.currentPage = Math.floor(state.cola.length / 6);
  renderColaList(state.cola);
}

// ---------------------------------------------------------------------------

// 자판기 음료id 찾기
function searchColaItemId(id) {
  return state.cola.find((v) => v.id === id);
}

// 카트 음료id 찾기
function searchCartItemId(id) {
  return state.cartList.find((v) => v.colaId === id);
}

// 획득한 음료id 찾기
function searchMyColaId(id) {
  return state.myColaList.find((v) => v.colaId === id);
}

// 자식요소들 제거
function removeChildNodes(el) {
  while (el.hasChildNodes()) {
    el.removeChild(el.firstChild);
  }
}

// ---------------------------------------------------------------------------

function init() {
  renderColaList(state.cola);
  renderCartList(state.cartList);
  renderMyColaList(state.myColaList);
  btnGetEl.addEventListener("click", getCola);
  btnMyMoneyEl.addEventListener("click", inputMyOwnMoney);
  btnCreditEl.addEventListener("click", deposit);
  inpCreditEl.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) deposit();
  });
  btnBalanceEl.addEventListener("click", getMyBalance);
  btnRightEl.addEventListener("click", countUp);
  btnLeftEl.addEventListener("click", countDown);
}

init();
