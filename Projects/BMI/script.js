const form = document.querySelector("form")

form.addEventListener("submit", function (e) {

    e.preventDefault()

    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    let bmiError

    // Validate inputs
    if (weight == '' || height == '') {
        bmiError = document.getElementById('bmiResult')
        bmiError.innerHTML = 'Please enter both weight and height.';
        bmiError.style.color = "red"
        return;
    }

    // Convert inputs to float
    weight = parseFloat(weight);
    height = parseFloat(height);


    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        bmiError = document.getElementById('bmiResult')
        bmiError.innerHTML = 'Please enter valid numbers for weight and height.';
        bmiError.style.color = "red"
        return;
    }

    // Calculate BMI
    var bmi = weight / (height * height);

    // Display result
    var resultText = 'Your BMI is ' + bmi.toFixed(2) + '. ';
    if (bmi < 18.5) {
        resultText += 'You are underweight.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultText += 'You have a normal weight.';
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultText += 'You are overweight.';
    } else {
        resultText += 'You are obese.';
    }
    document.getElementById('bmiResult').innerHTML = resultText;

})

