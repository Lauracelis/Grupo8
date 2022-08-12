var x = 1
var y = 1
const respuesta = "Se encuentra en el cuadrante:"

if (x>0 && y>0){
    console.log(respuesta + "1")
}else {
    if(x<0 && y>0){
        console.log(respuesta + "2")
    }else {
        if(x<0 && y<0){
            console.log(respuesta + "3")
        }else {
            if (x>0 && y<0) {
                console.log(respuesta + "4")
            }else{
                console.log("esta en el origen")
            }
        }
    }
}