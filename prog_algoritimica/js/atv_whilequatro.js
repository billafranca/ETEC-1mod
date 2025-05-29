let age = -1;

while (age < 0 || age > 120) {
    console.log("idade inválida");
    age = parseInt(prompt("Digite uma idade entre 0 e 120:"));
}
