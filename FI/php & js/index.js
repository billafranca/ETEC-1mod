document.addEventListener("DOMContentLoaded", function(){
    const idade = document.getElementById("idUser");
    let nome = document.getElementById("nameUser")
    const btn = document.getElementById("logarUser")

    if (idade > 100 && idade < 0){
        idade = number(idade.value);
        alert("inválido")

    }
    btn.addEventListener("click", function(){
        if (idade > 100 && idade < 0){
            idade = number(idade.value);
            alert("inválido")
        }   
        alert(`olá, ${nome}. Você tem ${idade} anos!\n
        redirecionando...`)
        window.location.href = 'pag2.html';
    })  
})