function exercicio1() 
{
    let numero = Number( document.getElementById("numero").value);

    var celsius = Number(numero - 32) * 5/9;

    document.getElementById("resultado").innerHTML=
    "<p> Atemperatura em Celcius é " + celsius + "<p>"
}
    