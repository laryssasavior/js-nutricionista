
// Função para calcular o IMC
function calculateIMC(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (weight > 0 && height > 0) {
        const imc = weight / (height * height);
        let resultText;

        if (imc < 18.5) {
            resultText = "Você está abaixo do peso.";
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultText = "Você está com o peso ideal.";
        } else {
            resultText = "Você está acima do peso.";
        }

        document.getElementById("result").textContent = `Seu IMC é ${imc.toFixed(2)}. ${resultText}`;
    } else {
        document.getElementById("result").textContent = "Por favor, insira valores válidos.";
    }
}
