(function () {
    "use strict";

    let form = document.forms.namedItem("converter"),
        bynValueElem = form.elements.namedItem("bynValue"),
        selectedCurrencyElem = form.elements.namedItem("selectedCurrency"),
        outputElem = form.elements.namedItem("result"),
        currencyData = new Map();
    selectedCurrencyElem.addEventListener("change", () => {
        let currencyCode = selectedCurrencyElem.value;
        if (!currencyData.has(currencyCode)) {
            nbApi(`Rates/${currencyCode}?ParamMode=2`,
                (err, currency) => {
                    if (!err) {
                        currencyData.set(currencyCode, currency);
                    }
                    inputData();
                }
            );
        }
        outputElem.textContent = bynValueElem.textContent;
    });
    function inputData(){
        let byn = bynValueElem;
        byn.addEventListener("input", function(){
        convert();
        })
    }

    function convert() {
        let bynValue = bynValueElem.valueAsNumber || 0,
            {
                Cur_Scale: scale,
                Cur_OfficialRate: rate
            } = currencyData.get(selectedCurrencyElem.value);
        let result = bynValue / rate * scale;
        outputElem.textContent = result.toFixed(2);

    }

    function nbApi(type, callback) {
        let request = new XMLHttpRequest();
        request.open("GET", `http://www.nbrb.by/API/ExRates/${type}`, true);
        request.responseType = "json";
        request.onload = () => callback(false, request.response);
        request.onerror = () => callback(true, null);
        request.send();
    }
    nbApi("Currencies", (error, currencies) => {
        if (error) {
            return;
        }
        fillOptions(currencies);
        selectedCurrencyElem.dispatchEvent(new Event("change"))
    });

    function fillOptions(currencies) {
        selectedCurrencyElem.append(currencies.reduce((fragment, currency) => {
            let currencyExpireDate = new Date(currency.Cur_DateEnd);
            if (currencyExpireDate.getTime() >= Date.now()) {
                let option = document.createElement("option");
                option.textContent = currency.Cur_Name;
                option.value = currency.Cur_Abbreviation;
                fragment.append(option);
            }
            return fragment;
        }, document.createDocumentFragment()));
    }


})();
