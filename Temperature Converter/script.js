function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const unitFrom = document.getElementById("unitFrom").value;
    const unitTo = document.getElementById("unitTo").value;
    const resultElement = document.getElementById("result");

    if (!isNaN(temperatureInput)) {
        if (unitFrom === unitTo) {
            resultElement.innerText = "" + temperatureInput + " " + unitTo;
        } else if (unitFrom === "celsius" && unitTo === "fahrenheit") {
            const result = (temperatureInput * 9/5) + 32;
            resultElement.innerText = "" + result.toFixed(2) + " Fahrenheit";
        } else if (unitFrom === "celsius" && unitTo === "kelvin") {
            const result = temperatureInput + 273.15;
            resultElement.innerText = "" + result.toFixed(2) + " Kelvin";
        } else if (unitFrom === "fahrenheit" && unitTo === "celsius") {
            const result = (temperatureInput - 32) * 5/9;
            resultElement.innerText = "" + result.toFixed(2) + " Celsius";
        } else if (unitFrom === "fahrenheit" && unitTo === "kelvin") {
            const result = (temperatureInput - 32) * 5/9 + 273.15;
            resultElement.innerText = "" + result.toFixed(2) + " Kelvin";
        } else if (unitFrom === "kelvin" && unitTo === "celsius") {
            const result = temperatureInput - 273.15;
            resultElement.innerText = "Result: " + result.toFixed(2) + " Celsius";
        } else if (unitFrom === "kelvin" && unitTo === "fahrenheit") {
            const result = (temperatureInput - 273.15) * 9/5 + 32;
            resultElement.innerText = "Result: " + result.toFixed(2) + " Fahrenheit";
        }
    } else {
        resultElement.innerText = "Invalid input";
    }
}
