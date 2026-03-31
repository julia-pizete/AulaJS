function calcular() {
    let base = prompt("Digite o valor da base do triângulo:");
    let altura = prompt("Digite o valor da altura do triângulo:");

    base = Number(base);
    altura = Number(altura);

    let area = (base * altura) / 2;

    alert("Área do triângulo: " + area);
}