// حساب مؤشر كتلة الجسم (BMI)
function calculateBMI(weight, height) {
    var heightMeters = height / 100;
    return weight / (heightMeters * heightMeters);
}
// الوزن المثالي
function calculateIdealWeight(height) {
    var minBMI = 18.5;
    var maxBMI = 24.9;
    var minHeight = 100;
    var maxHeight = 220;
    if (height < minHeight || height > maxHeight) {
        return "Invalid height";
    }
    var minWeight = minBMI * Math.pow((height / 100), 2);
    var maxWeight = maxBMI * Math.pow((height / 100), 2);
    return "Ideal weight range: ".concat(minWeight.toFixed(2), "kg - ").concat(maxWeight.toFixed(2), "kg");
}
// العناصر من واجهة المستخدم
var weightInput = document.getElementById('weight');
var heightInput = document.getElementById('height');
var resultDiv = document.getElementById('result');
var calculateButton = document.getElementById('calculate');
// إضافة حدث النقر لزر الحساب
calculateButton.addEventListener('click', function () {
    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value);
    if (isNaN(weight) || isNaN(height)) {
        resultDiv.textContent = 'Please enter valid weight and height.';
    }
    else {
        var bmi = calculateBMI(weight, height);
        var ideal = calculateIdealWeight(height);
        resultDiv.textContent = "Your BMI: ".concat(bmi.toFixed(2), ". ").concat(ideal);
    }
});
