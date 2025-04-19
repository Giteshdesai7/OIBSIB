document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("converter-form");
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = parseFloat(fahrenheitInput.value);

        if (!isNaN(celsius) && fahrenheitInput.value === "") {
            const converted = (celsius * 9/5) + 32;
            fahrenheitInput.value = converted.toFixed(2);
            resultDiv.innerHTML = `${celsius}°C = ${converted.toFixed(2)}°F`;
        } else if (!isNaN(fahrenheit) && celsiusInput.value === "") {
            const converted = (fahrenheit - 32) * 5/9;
            celsiusInput.value = converted.toFixed(2);
            resultDiv.innerHTML = `${fahrenheit}°F = ${converted.toFixed(2)}°C`;
        } else {
            resultDiv.innerHTML = "Please enter a value in only one field.";
        }
    });
});
