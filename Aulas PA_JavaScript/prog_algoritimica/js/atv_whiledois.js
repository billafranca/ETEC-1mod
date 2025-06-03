var senha = 1234;

do {
    let tentativaSenha = parseInt(prompt("digite a senha:"));
    if (tentativaSenha !== senha) {
        console.log("errado");
    } else {
        console.log("boa!");
        break; 
    }
} while (true);
