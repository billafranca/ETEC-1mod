function idadeDeCamila() {

    let idades = [];
    for (let i = 0; i < 3; i++) {
        idades.push(parseInt(prompt("Digite a idade da irmã " + (i + 1))));
    }


    idades.sort((a, b) => a - b);


    console.log(idades[1]);
}


idadeDeCamila();
