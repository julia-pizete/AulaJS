document.write("<h1>Aula 01- Exercicio2</h1>");

var fahrenheit = prompt("Digite a temperatura em Fahrenheit:");

var celsius = (fahrenheit - 32)*5 / 9;

document.write("<p> A temperatura digitada foi " + fahrenheit +"°F </p>");
document.write("<p style= 'color: red'> A temperatura em celsius é " + celsius +" °C </p>");