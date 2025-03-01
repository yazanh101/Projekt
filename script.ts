
function calculateBMI(weight: number, height: number): number {
    const heightMeters = height / 100;
    return weight / (heightMeters * heightMeters);
}

function calculateIdealWeight(height: number): string {
    const minBMI = 18.5;
    const maxBMI = 24.9;
    const minHeight = 100;
    const maxHeight = 220;

    if (height < minHeight || height > maxHeight) {
        return "Invalid height";
    }

    const minWeight = minBMI * (height / 100) ** 2;
    const maxWeight = maxBMI * (height / 100) ** 2;

    return `Ideal weight range: ${minWeight.toFixed(2)}kg - ${maxWeight.toFixed(2)}kg`;
}


const weightInput = document.getElementById('weight') as HTMLInputElement;      //يلي بالاخضر هو الشي المربوط بين html , Type
const heightInput = document.getElementById('height') as HTMLInputElement;
const resultDiv = document.getElementById('result') as HTMLDivElement;
const calculateButton = document.getElementById('calculate') as HTMLButtonElement;


calculateButton.addEventListener('click', () => {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height)) {
        resultDiv.textContent = 'Please enter valid weight and height.';
    } else {
        const bmi = calculateBMI(weight, height);
        const ideal = calculateIdealWeight(height);
        resultDiv.textContent = `Your BMI: ${bmi.toFixed(2)}. ${ideal}`;
    }
});
