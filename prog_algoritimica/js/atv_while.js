var sum = 0;
var num;

do{
    num = parseFloat(prompt("Digite um número: "));
    sum += num;
} while (num !== 0);

console.log("A soma de todos os números digitados é: " + sum);

