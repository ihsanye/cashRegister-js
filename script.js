const cashMoney = document.getElementById("cash");
const changeMoney = document.getElementById("change-due");
const purchaseMoney = document.getElementById("purchase-btn");

let price = 1.87;
let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
];

purchaseMoney.addEventListener("click", () => {
    const currUnits = {
        "ONE HUNDRED": 100,
        "TWENTY": 20,
        "TEN": 10,
        "FIVE": 5,
        "ONE": 1,
        "QUARTER": 0.25,
        "DIME": 0.1,
        "NICKEL": 0.05,
        "PENNY": 0.01
    };

    let cash = cashMoney.value;
    if (cash < price) {
        alert("Customer does not have enough money to purchase the item");
    }
    else if (cash == price) {
        changeMoney.innerText = "No change due - customer paid with exact cash";
    }
    else {
        for (let i = cid.length - 1; i >= 0; i--) {
            let currUnitsName = cid[i][0];
            let currUnitsTotal = cid[i][1];
            let coinAmount = Math.round(currUnitsTotal / currUnits[currUnitsName]);
            console.log(coinAmount);
        }
    }
})

const statusInfo = () => {
    let change = 335.41;
    let total = 0;
    for (let i = 0; i < cid.length; i++) {
        total += cid[i][1] * 100;
    }
    total /= 100;
    if (total < change) {
        return "Status: INSUFFICIENT_FUNDS";
    }
    else if (total == change) {
        return "Status: CLOSED";
    }
    else if (total > change) {
        return "Status: OPEN";
    }
}