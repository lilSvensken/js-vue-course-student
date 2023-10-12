const rates = {};
const nominal = {};
const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementGBP = document.querySelector('[data-value="GBP"]');
const elementKZT = document.querySelector('[data-value="KZT"]');
const elementAUD = document.querySelector('[data-value="AUD"]');
const elementAZN = document.querySelector('[data-value="AZN"]');
const elementAMD = document.querySelector('[data-value="AMD"]');
const elementBYN = document.querySelector('[data-value="BYN"]');
const elementCNY = document.querySelector('[data-value="CNY"]');


const input = document.querySelector('#amount');
const result = document.querySelector('#result');
const convertButton = document.querySelector('#convertButton');





getCurrencies();
async function getCurrencies() {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result = await data;
    console.log(result);

    rates.RUB = 1;
    rates.USD = result.Valute.USD;
    rates.EUR = result.Valute.EUR;
    rates.GBP = result.Valute.GBP;
    rates.KZT = result.Valute.KZT;
    rates.AUD = result.Valute.AUD;
    rates.AZN = result.Valute.AZN;
    rates.AMD = result.Valute.AMD;
    rates.BYN = result.Valute.BYN;
    rates.CNY = result.Valute.CNY;



    console.log(rates);

    console.log(nominal);

    elementUSD.textContent = rates.USD.Value.toFixed(2);
    elementEUR.textContent = rates.EUR.Value.toFixed(2);
    elementGBP.textContent = rates.GBP.Value.toFixed(2);
    elementKZT.textContent = rates.KZT.Value.toFixed(2);
    elementAUD.textContent = rates.AUD.Value.toFixed(2);
    elementAZN.textContent = rates.AZN.Value.toFixed(2);
    elementAMD.textContent = rates.AMD.Value.toFixed(2);
    elementBYN.textContent = rates.BYN.Value.toFixed(2);
    elementCNY.textContent = rates.CNY.Value.toFixed(2);



    // цвет для информера USD
    if (rates.USD.Value > rates.USD.Previous) {
        elementUSD.classList.add('up');
    } else {
        elementUSD.classList.add('down');
    }
    // цвет для информера EUR
    if (rates.EUR.Value > rates.EUR.Previous) {
        elementEUR.classList.add('up');
    } else {
        elementEUR.classList.add('down');
    }
    // цвет для информера GBP
    if (rates.GBP.Value > rates.GBP.Previous) {
        elementGBP.classList.add('up');
    } else {
        elementGBP.classList.add('down');
    }

    // цвет для информера KZT
    if (rates.KZT.Value > rates.KZT.Previous) {
        elementKZT.classList.add('up');
    } else {
        elementKZT.classList.add('down');
    }
    // цвет для информера AUD
    if (rates.AUD.Value > rates.AUD.Previous) {
        elementAUD.classList.add('up');
    } else {
        elementAUD.classList.add('down');
    }
    // цвет для информера AZN
    if (rates.AZN.Value > rates.AZN.Previous) {
        elementAZN.classList.add('up');
    } else {
        elementAZN.classList.add('down');
    }
    // цвет для информера AMD
    if (rates.AMD.Value > rates.AMD.Previous) {
        elementAMD.classList.add('up');
    } else {
        elementAMD.classList.add('down');
    }
    // цвет для информера BYN
    if (rates.BYN.Value > rates.BYN.Previous) {
        elementBYN.classList.add('up');
    } else {
        elementBYN.classList.add('down');
    }
    // цвет для информера CNY
    if (rates.CNY.Value > rates.CNY.Previous) {
        elementCNY.classList.add('up');
    } else {
        elementCNY.classList.add('down');
    }

}

convertButton.addEventListener('click', () => {
    result.textContent = input.value + ' RUB = ' + ((parseFloat(input.value) * rates[targetCurrency.value].Nominal) / rates[targetCurrency.value].Value).toFixed(2) + ' ' + rates[targetCurrency.value].CharCode;
})


// result.value = parseFloat(input.value) / rates.USD.Value;
// result.classList.add(parseFloat(input.value) / rates.USD.Value)
