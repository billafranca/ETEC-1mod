import java.util.Scanner;

public class Calculadora{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        double num1, num2;
        System.out.print("digite o primeiro termo: ");
        num1 = sc.nextDouble();
        System.out.print("digite o segundo termo: ");
        num2 = sc.nextDouble();

        String forma = System.out.print("digite a operação (- + / * %): ");
        int res;
        switch(forma){
            case "+" -> {
                res = (num1 + num2);
                System.out.println(res);
            
            }
            case "-" -> {
                res = (num1 - num2);
                System.out.println(res);
            }
            case "*" -> {
                res = (num1 * num2);
                System.out.println(res);
            }
            case "/" -> {
                if (num2 == 0){
                    System.out.println("Não é válido divisões por 0!")
                }
                res = (num1 / num2);
                System.out.println(res);
            }
            case "%" -> {
                res = (num1 % num2);
                System.out.println(res);
            }
            
        }
    }
}