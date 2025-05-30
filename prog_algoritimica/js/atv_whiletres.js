var numSecreto = Math.floor(Math.random() * 11);
let advinha;

do {
    advinha = parseInt(prompt("acerte o número secreto (entre 0 e 10): "));
    if (advinha < numSecreto) {
        console.log("tente um número maior");
    } else if (advinha > numSecreto) {
        console.log("tente um número menor");
    }
}while (advinha !== numSecreto);

console.log("fez o impossível");

