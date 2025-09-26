function calcularCorrugados() {
    const paresInput = document.getElementById('paresInput');
    const pares = parseFloat(paresInput.value);

    // Verifica se a entrada é um número válido
    if (isNaN(pares) || pares < 0) {
        alert("Por favor, digite um número válido de pares.");
        document.getElementById('resultado1').innerText = 0;
        document.getElementById('resultado2').innerText = 0;
        document.getElementById('corrugados').innerText = 0;
        return;
    }
    
    // Calcula o primeiro resultado (80%)
    const resultado1 = pares * 0.8;
    document.getElementById('resultado1').innerText = resultado1.toFixed(0);
    
    // Calcula o segundo resultado (30%)
    const resultado2 = resultado1 * 0.3;
    document.getElementById('resultado2').innerText = resultado2.toFixed(0);
    
    // Calcula o número de corrugados (divisão por 8)
    const corrugados = resultado2 / 8;
    document.getElementById('corrugados').innerText = Math.ceil(corrugados);
}