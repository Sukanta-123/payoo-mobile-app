// My Pin & discount coupon

const myPin = 121922;
const discountCoupon = "newUser";
const transactionData = [];

// Toggling feature
let addMoney = document.getElementById("add-button");
let cashOut = document.getElementById("cash-out-button");
let transfer = document.getElementById("transfer-button");
let bonus = document.getElementById("bonus-button");
let payment = document.getElementById("pay-bill");
let transaction = document.getElementById("transactions");

function handleToggle(id) {
  const forms = document.getElementsByClassName("form");

  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

//  function to toggle buttons

function handleBtnToggle(btn) {
  const formBtns = document.getElementsByClassName("form-btn");

  for (let btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  btn.classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  btn.classList.remove("border-gray-300");
}

addMoney.addEventListener("click", (e) => {
  handleToggle("add-money-parent");
  handleBtnToggle(addMoney);
});
cashOut.addEventListener("click", () => {
  handleToggle("withdraw-money-parent");
  handleBtnToggle(cashOut);
});
transfer.addEventListener("click", () => {
  handleToggle("transfer-money-parent");
  handleBtnToggle(transfer);
});

bonus.addEventListener("click", () => {
  handleToggle("get-bonus-parent");
  handleBtnToggle(bonus);
});

payment.addEventListener("click", () => {
  handleToggle("pay-bill-parent");
  handleBtnToggle(payment);
});

transaction.addEventListener("click", () => {
  handleToggle("transactions-parent");
  handleBtnToggle(transaction);
  const transactionContainer = document.getElementById(
    "transactions-container",
  );
  transactionContainer.innerText=''
  for (const data of transactionData) {
    const div = document.createElement("div");
    div.innerHTML = `
      <div
            class="bg-white rounded-2xl p-3 flex justify-between items-center mb-4"
          >
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-[#f4f5f7]">
                <img src="./assets/opt-1.png" class="mx-auto w-[30px]" />
              </div>
              <div class="ml-3">
                <h1 class="font-semibold text-[#080808b3]">${data.name}</h1>
                <p class="text-[#08080880]">${data.date}</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
     `;
    transactionContainer.appendChild(div)
  }
});

// log out btn

const logOutBtn = document.getElementById("log-out-btn");

logOutBtn.addEventListener("click", () => {
  window.location.href = "./index.html";
});

// Transactions Feature with Name and Date

function nameDate(value) {
  const data = {
    name: value,
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
}
// Functions to get input values

function inputValueNumber(id) {
  const inpField = document.getElementById(id);
  const inpFieldValue = inpField.value;
  const inpFieldValueConvert = parseInt(inpFieldValue);
  return inpFieldValueConvert;
}
function inputValue(id) {
  const inpField = document.getElementById(id);
  const inpFieldValue = inpField.value;
  return inpFieldValue;
}
function inputValueInnerText(id) {
  const inpField = document.getElementById(id);
  const inpFieldValueInnerText = inpField.innerText;
  const inpFieldValueConvert = parseInt(inpFieldValueInnerText);
  return inpFieldValueConvert;
}
function btnId(id) {
  const btnId = document.getElementById(id);
  return btnId;
}
function setInnerText(value) {
  const availableBalance = document.getElementById("curr-balance");
  availableBalance.innerText = value;
}

// All Forms

// Cash In
let addMoneyBtn = btnId("add-money-btn");
addMoneyBtn.addEventListener("click", () => {
  const banks = inputValue("banks");
  const acNum = inputValue("account-number");
  const addedMoney = inputValueNumber("add-money");

  if (addedMoney <= 0){
    alert('Invalid amount')
    return
  }

  const pinNum = inputValueNumber("add-pin");
  const currentBalance = inputValueInnerText("curr-balance");

  const totalNewBalance = addedMoney + currentBalance;

  if (acNum.length < 11 || acNum.length > 11) {
    alert("Please provide Ur valid Account Number");
    return;
  } else if (pinNum !== myPin) {
    alert("Provide ur Valid pin");
    return;
  } else if (addedMoney < 100) {
    alert("Please deposit money at least 100 TK");
    return;
  }

  setInnerText(totalNewBalance);

  nameDate('Add Money')
});

// withdraw money

const removeBtn = btnId("remove-money-btn");
removeBtn.addEventListener("click", () => {
  const agentNumb = inputValue("agent-number");
  const withDrawMoney = inputValueNumber("remove-money");
  const currentBalance = inputValueInnerText("curr-balance");

  if(withDrawMoney>currentBalance || withDrawMoney<=0){
    alert('Invalid Amount')
    return
  }
  const pin = inputValueNumber("second-pin");
  

  const totalNewBalance = currentBalance - withDrawMoney;

  if (agentNumb.length < 11 || agentNumb.length > 11) {
    alert("Please provide a valid number");
    return;
  } else if (pin !== myPin) {
    alert("Provide ur valid pin");
    return;
  } else if (withDrawMoney < 100) {
    alert('Please withdraw money at least 100 TK"');
    return;
  }

  setInnerText(totalNewBalance);

  nameDate('Cash Out Money')
});

// Transfer Money

const transferBtn = btnId("send-money-btn");
transferBtn.addEventListener("click", () => {
  const userNumber = inputValue("user-number");
  const transferMoney = inputValueNumber("transfer-money");
  const pin = inputValueNumber("third-pin");
  const currentBalance = inputValueInnerText("curr-balance");

  const totalNewBalance = currentBalance - transferMoney;

  if (userNumber.length < 11 || userNumber.length > 11) {
    alert("Please provide a valid number");
    return;
  } else if (pin !== myPin) {
    alert("Provide ur valid pin");
    return;
  } else if (transferMoney < 100) {
    alert('Please transfer money at least 100 TK"');
    return;
  }

  setInnerText(totalNewBalance);
  
  nameDate('Transfer Money')
});

// Coupon

const couponBtn = btnId("coupon-btn");
couponBtn.addEventListener("click", () => {
  const coupon = inputValue("coupon");

  if (coupon !== discountCoupon) {
    alert("Please provide a valid coupon");
  } else {
    alert("Your discount coupon has added");
  }
});

// Pay Bill

const paymentBtn = btnId("payment-btn");
paymentBtn.addEventListener("click", () => {
  const organizations = inputValue("organizations");
  const acNum = inputValue("ac-number");
  const AmountToPayMoney = inputValueNumber("pay-money");
  const pin = inputValueNumber("fourth-pin");
  const currentBalance = inputValueInnerText("curr-balance");

  const totalNewBalance = currentBalance - AmountToPayMoney;

  if (acNum.length < 11 || acNum.length > 11) {
    alert("Please provide a valid number");
    return;
  } else if (pin !== myPin) {
    alert("Provide ur valid pin");
    return;
  } else if (AmountToPayMoney < 100) {
    alert('Please pay money at least 100 TK"');
    return;
  }

  setInnerText(totalNewBalance);

  nameDate('Pay Bill')
});
