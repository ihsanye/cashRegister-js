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
        let changeArr = [];
        let change = cash - price;
        let totalCID = 0;
        for (let i = 0; i < cid.length; i++) {
            totalCID += cid[i][1] * 100;
        }
        totalCID /= 100;

        for (let i = cid.length - 1; i >= 0; i--) {
            let currUnitsName = cid[i][0];//TWENTY
            let currUnitsTotal = cid[i][1];//60
            let currUnitsValue = currUnits[currUnitsName];//20
            let coinAmount = Math.round(currUnitsTotal / currUnitsValue);//3
            let howManyCoin = 0;

            while (change >= currUnitsValue && coinAmount > 0) {
                change = (change * 100) / 100;
                change -= currUnitsValue;
                coinAmount--;
                howManyCoin++;
            }
            if (howManyCoin != 0) {
                changeArr.push([`${currUnitsName}: $${howManyCoin * currUnitsValue}`]);
            }
        }
        if (totalCID < change) {
            changeMoney.innerText = `Status: INSUFFICIENT_FUNDS`;
        }
        else if (totalCID == change) {
            changeMoney.innerText = `Status: CLOSED ${changeArr}`.replaceAll(",", " ");
        }
        else if (totalCID > change) {
            changeMoney.innerText = `Status: OPEN ${changeArr}`.replaceAll(",", " ");
        }
    }
})