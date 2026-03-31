function calcular() {
    let valor = prompt("Digite o valor da prestação:");
    let taxa = prompt("Digite a taxa de juros (%):");
    let tempo = prompt("Digite o tempo de atraso (dias):");

    valor = Number(valor);
    taxa = Number(taxa);
    tempo = Number(tempo);

    let parcela = valor + (valor * ((taxa * taxa) / 100) * tempo);

    alert("Valor da parcela: " + parcela);
}