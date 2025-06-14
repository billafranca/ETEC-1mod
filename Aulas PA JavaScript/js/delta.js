    let x1 = parseFloat(prompt("digite o valor de a: "));
    let x2 = parseFloat(prompt("digite o valor de b: "));
    let x3 = parseFloat(prompt("digite o valor de c: "));

        function calcularBhaskara(a, b, c) { 
            if (isNaN(a) || isNaN(b) || isNaN(c)) { 
                return 'Por favor, insira números válidos para a, b e c.'; 
            }
            const delta = b * b - 4 * a * c;
            if (delta < 0) {
                return 'sem raízes reais';
            } else if (delta === 0) {
                const raiz = -b / (2 * a); 
                return `Uma raiz real: ${raiz}`;
            } else {
                const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
                const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
                return `Duas raízes reais: ${raiz1} e ${raiz2}`;
            }
        }

        console.log("x1: " + x1, "x2: " + x2, "x3: " + x3, "\n", "Resultado: " + calcularBhaskara(x1, x2, x3));
