document.addEventListener("DOMContentLoaded", function(){
    let nmb = document.getElementById("number1");
    let nmb2 = document.getElementById("number2");
    let btnSum = document.getElementById("btnSomar");
    let btnSub = document.getElementById("btnSubtrair");
    let btnMult = document.getElementById("btnMultiplicar");
    let btnDiv = document.getElementById("btnDividir");
    let limpar = document.getElementById("btnLimpar");
    let res = document.getElementById("resultado");

    btnSum.addEventListener("click", function (){
        let num1 = Number(nmb.value);
        let num2 = Number(nmb2.value);

        if(isNaN(num1) || isNaN(num2)){
            alert("Por favor, insira apenas números.");
        } else {
            let resultado = num1 + num2;
            res.textContent = "Resultado: " + resultado;
        }
    })
    btnSub.addEventListener("click", function (){
        let num1 = parseFloat(nmb.value);
        let num2 = parseFloat(nmb2.value);

        if(isNaN(num1) || isNaN(num2)){
            alert("Por favor, insira apenas números.");
        } else {
            let resultado = num1 - num2;
            res.res.textContent = "Resultado: " + resultado;
        }
    })
    btnMult.addEventListener("click", function (){
        let num1 = parseFloat(nmb.value);
        let num2 = parseFloat(nmb2.value);

        if(isNaN(num1) || isNaN(num2)){
            alert("Por favor, insira apenas números.");
        } else {
            let resultado = num1 * num2;
            res.textContent = "Resultado: " + resultado;
        }
    })
    btnDiv.addEventListener("click", function (){
        let num1 = parseFloat(nmb.value);
        let num2 = parseFloat(nmb2.value);

        if(isNaN(num1) || isNaN(num2)){
            alert("Por favor, insira apenas números.");
        } else if (num2 === 0) {
            alert("Divisão por zero não é permitida.");
        } else {
            let resultado = num1 / num2;
            res.textContent = "Resultado: " + resultado;
        }
    })
    limpar.addEventListener("click", function (){
        nmb.value = "";
        nmb2.value = "";
        res.textContent = "Resultado: ";
    })
})