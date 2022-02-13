function plusMinusBTN(inORdec, isIncrease, mobileOrCase, ismobile) {
    const inputValue = document.getElementById(inORdec);
    const inputFieldText = inputValue.value;
    let x = parseInt(inputFieldText);
    if (isIncrease == true) {
        inputValue.value = x + 1;
    }
    else {
        if (x > 0) {
            inputValue.value = x - 1;
        }
        else {
            alert("Please add to purchase");
        }
    }
    let newX = parseInt(inputValue.value);
    const mobileOrCasePrice = document.getElementById(mobileOrCase);
    if (ismobile == true) {
        mobileOrCasePrice.innerText = newX * 1219;
    }
    else {
        mobileOrCasePrice.innerText = newX * 59;
    }

}

function totalWithTax(mobileprice, caseprice) {
    const mobilePrice = document.getElementById(mobileprice);
    let mobilePriceAmount = parseInt(mobilePrice.innerText);
    const casePrice = document.getElementById(caseprice);
    let casePriceAmount = parseInt(casePrice.innerText);

    // set sub total
    let subTotal = document.getElementById('subtotal');
    subTotal.innerText = mobilePriceAmount + casePriceAmount;
    let subTotalAmount = parseInt(subTotal.innerText);

    // set tax
    let tax = document.getElementById('tax');
    tax.innerText = (subTotalAmount * 10) / 100;
    let taxAmount = parseFloat(tax.innerText);

    // set total
    let total = document.getElementById('total');
    total.innerText = subTotalAmount + taxAmount;
}

document.getElementById('input-plus-1').addEventListener('click', function () {
    plusMinusBTN('input-value-1', true, 'mobile-price', true);
    totalWithTax('mobile-price', 'case-price');
});

document.getElementById('input-minus-1').addEventListener('click', function () {
    plusMinusBTN('input-value-1', false, 'mobile-price', true);
    totalWithTax('mobile-price', 'case-price');
});

document.getElementById('input-plus-2').addEventListener('click', function () {
    plusMinusBTN('input-value-2', true, 'case-price', false);
    totalWithTax('mobile-price', 'case-price');
});

document.getElementById('input-minus-2').addEventListener('click', function () {
    plusMinusBTN('input-value-2', false, 'case-price', false);
    totalWithTax('mobile-price', 'case-price');
});

