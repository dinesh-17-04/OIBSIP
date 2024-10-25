// Function to validate input
function validateInput(value) {
  return !isNaN(value) && value.trim() !== "";
}

// Temperature conversion functions
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

function celsiusToKelvin(celsius) {
  return parseFloat(celsius) + 273.15;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
  return celsiusToKelvin(fahrenheitToCelsius(fahrenheit));
}

function kelvinToFahrenheit(kelvin) {
  return celsiusToFahrenheit(kelvinToCelsius(kelvin));
}

// Event listener for Convert button
document.getElementById("convertBtn").addEventListener("click", function() {
  const tempInput = document.getElementById("tempInput").value;
  const unitInput = document.getElementById("unitInput").value;
  const resultArea = document.getElementById("convertedTemp");

  if (!validateInput(tempInput)) {
    resultArea.textContent = "Please enter a valid number.";
    return;
  }

  let temperature = parseFloat(tempInput);
  let convertedTemp = "";
  let targetUnit = "";

  // Conversion logic based on user input
  switch (unitInput) {
    case "Celsius":
      convertedTemp = `${celsiusToFahrenheit(temperature).toFixed(2)}°F, ${celsiusToKelvin(temperature).toFixed(2)}K`;
      targetUnit = "Fahrenheit & Kelvin";
      break;
    case "Fahrenheit":
      convertedTemp = `${fahrenheitToCelsius(temperature).toFixed(2)}°C, ${fahrenheitToKelvin(temperature).toFixed(2)}K`;
      targetUnit = "Celsius & Kelvin";
      break;
    case "Kelvin":
      convertedTemp = `${kelvinToCelsius(temperature).toFixed(2)}°C, ${kelvinToFahrenheit(temperature).toFixed(2)}°F`;
      targetUnit = "Celsius & Fahrenheit";
      break;
    default:
      convertedTemp = "Invalid unit selected.";
  }

  // Display the result
  resultArea.textContent = `Converted to ${targetUnit}: ${convertedTemp}`;
});
