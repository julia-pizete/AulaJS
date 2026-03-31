function calcular() {
    let numero = prompt("Digite um número:");

    numero = Number(numero);

    let quadrado = numero * numero;
    let cubo = numero * numero * numero;

    alert("Quadrado: " + quadrado);
    alert("Cubo: " + cubo);
}