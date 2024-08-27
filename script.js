const cashMoney = document.getElementById("cash");
const changeMoney = document.getElementById("change-due");
const purchaseMoney = document.getElementById("purchase-btn");

let price = 19.5;
let cid = [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
];

document.getElementById("total").innerHTML += ` <strong>$${price}</strong>`;
for (let i = 0; i < cid.length; i++) {
    document.getElementById("drawer").innerHTML += `<div>${cid[i]}</div>`.replaceAll(",", ": $");
}

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
        let changeArr = [];
        let change = cash - price;
        let totalCID = 0;
        for (let i = 0; i < cid.length; i++) {
            totalCID += cid[i][1] * 100;
        }
        totalCID /= 100;

        for (let i = cid.length - 1; i >= 0; i--) {
            let currUnitsName = cid[i][0];
            let currUnitsTotal = cid[i][1];
            let currUnitsValue = currUnits[currUnitsName];
            let coinAmount = Math.round(currUnitsTotal / currUnitsValue);
            let howManyCoin = 0;

            while (change >= currUnitsValue && coinAmount > 0) {
                change = Number(change.toFixed(2));
                change -= currUnitsValue;
                coinAmount--;
                howManyCoin++;
            }
            if (howManyCoin != 0) {
                changeArr.push([`${currUnitsName}: $${howManyCoin * currUnitsValue}`]);
            }
        }

        totalCID -= cash - price;

        if (totalCID == change) {
            changeMoney.innerText = `Status: CLOSED ${changeArr}`.replaceAll(",", " ");
        }
        if (totalCID > change && change === 0) {
            changeMoney.innerText = `Status: OPEN ${changeArr}`.replaceAll(",", " ");
        }
        else if (totalCID < change || change != 0) {
            changeMoney.innerText = `Status: INSUFFICIENT_FUNDS`;
        }
    }
})