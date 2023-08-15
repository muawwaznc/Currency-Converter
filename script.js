let apiKey = 'e043620bb1c875ab2a6602ca'
const api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
const fromDropDown = document.getElementById('from');
const toDropDown = document.getElementById('to');
const result = document.getElementById('result');


currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
});
currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
});

fromDropDown.value = "USD";
toDropDown.value = "PKR";

let convertCurrency = () => {
    const amount = document.getElementById("amount").value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;

    if (amount.length != 0) {
      fetch(api)
        .then((resp) => resp.json())
        .then((data) => {
          let fromExchangeRate = data.conversion_rates[fromCurrency];
          let toExchangeRate = data.conversion_rates[toCurrency];
          const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
          result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
            2
          )} ${toCurrency}`;
        });
    } else {
        result.innerHTML = "Please fill in the amount";
    }
};

document.getElementById('convert-btn').addEventListener("click", convertCurrency);
// window.addEventListener("load", convertCurrency);