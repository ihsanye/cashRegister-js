const cashMoney = document.getElementById("cash");
const changeMoney = document.getElementById("change-due");
const purchaseMoney = document.getElementById("purchase-btn");

purchaseMoney.addEventListener("click", () => {
    if (cashMoney.value) {
        alert("Customer does not have enough money to purchase the item");
    }



})