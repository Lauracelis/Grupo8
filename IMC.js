var peso = 67;
var altura = 1.85;
var imc = peso/(Math.pow(altura, 2));
const resultado = "Su indice de masa corporal es: "

if(imc<18.5) {
    console.log(resultado+Math.round(imc)+" Usted está bajo de peso");
}else{
    if((imc>=18.5) && (imc<24.9)){
        console.log(resultado+Math.round(imc)+" Usted está en peso normal");
    }else {
        if((imc>=25) && (imc<29.9)) {
            console.log(resultado+Math.round(imc)+" "+"sobrepeso");
        }else {
            if((imc>=30) && (imc<34.9)) {
                console.log(resultado+Math.round(imc)+" "+"obesidad I");
            }else {
                if((imc>=35) && (imc<39.9)) {
                    console.log(resultado+Math.round(imc)+" "+"obesidad II")
                }else {
                    if(imc>=40){
                        console.log(resultado+Math.round(imc)+" "+"obesidad III")
                    }
                }
            }
        }
    }
}
