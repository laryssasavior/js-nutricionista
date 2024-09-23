
// Função para calcular o IMC
function calculateIMC() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const imc = weight / (height * height);
    document.getElementById("imcResult").innerText = `Seu IMC é: ${imc.toFixed(2)}`;
}
