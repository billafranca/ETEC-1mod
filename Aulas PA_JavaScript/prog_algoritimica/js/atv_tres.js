let media = 0; 
let totalNotas = 0; 

for (let i = 0; i < 4; i++) {
    let notas = parseFloat(prompt("Digite suas notas: "));

    while (notas < 0 || notas > 10 || isNaN(notas)) {
        alert("Média inválida. Digite uma nota entre 0 e 10.");
        notas = parseFloat(prompt("Digite suas notas: ")); 
    }

    totalNotas += notas; 
}


media = totalNotas / 4;

if (media < 5) {
    alert("Reprovado");
} else if (media <= 7) {
    alert("Recuperação");
} else {
    alert("Aprovado!");
}

alert("Sua média é: " + media);
