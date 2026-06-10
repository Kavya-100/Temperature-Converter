function convertTemperature() {
    const temp = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    const result = document.getElementById("result");

    if (isNaN(temp)) {
        result.innerHTML = "Please enter a valid temperature.";
        return;
    }

    let celsius;

    switch (unit) {
        case "celsius":
            celsius = temp;
            break;

        case "fahrenheit":
            celsius = (temp - 32) * 5 / 9;
            break;

        case "kelvin":
            celsius = temp - 273.15;
            break;

        case "rankine":
            celsius = (temp - 491.67) * 5 / 9;
            break;

        case "reaumur":
            celsius = temp * 1.25;
            break;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;
    const rankine = (celsius + 273.15) * 9 / 5;
    const reaumur = celsius * 0.8;

    result.innerHTML = `
        <strong>Converted Temperatures:</strong><br>
        Celsius: ${celsius.toFixed(2)} °C<br>
        Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
        Kelvin: ${kelvin.toFixed(2)} K<br>
        Rankine: ${rankine.toFixed(2)} °R<br>
        Réaumur: ${reaumur.toFixed(2)} °Ré
    `;
}