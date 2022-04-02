function updateProductNumber(product, price, isIncreasing) {
    const ProductInput = document.getElementById(product + '-number');
    let ProductNumber = ProductInput.value;
    if (isIncreasing == true) {
        ProductNumber = parseInt(ProductNumber) + 1;
    }
    else if (ProductNumber > 0) {
        ProductNumber = parseInt(ProductNumber) - 1;
    }
    ProductInput.value = ProductNumber;
    // update total
    const ProductTotal = document.getElementById(product + '-total');
    ProductTotal.innerText = ProductNumber * price;
    // calculate total
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// phone increase decrease event
document.getElementById('phone-plus').addEventListener('click',
    function () {
        updateProductNumber('phone', 1229, true);

    });
document.getElementById('phone-minus').addEventListener('click',
    function () {
        updateProductNumber('phone', 1229, false);
    });
// case increase decrease event
document.getElementById('case-plus').addEventListener('click',
    function () {
        updateProductNumber('case', 59, true);

    });
document.getElementById('case-minus').addEventListener('click',
    function () {
        updateProductNumber('case', 59, false);
    });