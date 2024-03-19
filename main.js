const catalogo = ["Vinos Tintos", "Vinos Blancos"]
const vinoTinto = ["Malbec", "Cabernet Sauvignon", "Merlot", "Pinot Noir"]
const vinoBlanco = ["Chardonnay", "Sauvignon Blanc", "Torrontés"]
let nombre = prompt ("¿Cuál es tu nombre?")

function bienvenida(){
    alert("Bienvenid@ " + nombre)
}

function ver(item){
    for (let i=0; i< item.length; i++){
        alert(item[i])
    }
}

bienvenida()

let verCatalogo = confirm ("¿Quiere ver nuestro catálogo de productos?")
const productos = []

if (verCatalogo == true){
    ver(catalogo)
    let cepas = confirm( "¿Quiere ver qué cepas tenemos de los Vinos Tintos y Vinos Blancos?")
    if (cepas == true){
        ver(vinoTinto)
        ver(vinoBlanco)
        let comprar = confirm ("¿Quiere comprar alguno?")
        if (comprar == true){
            let productoAComprar = prompt ("¿Cuál desea comprar (Malbec, Cabernet Sauvignon, Merlot, Pinot Noir, Chardonnay, Sauvignon Blanc, Torrontes)?")
            while(comprar){
                switch(productoAComprar){
                    case "Malbec":
                        productos.push("Malbec")
                        break
                    case "Cabernet Sauvignon":
                        productos.push("Cabernet Sauvignon")
                        break
                    case "Merlot":
                        productos.push("Merlot")
                        break
                    case "Pinot Noir":
                        productos.push("Pinot Noir")
                        break
                    case "Chardonnay":
                        productos.push("Chardonnay")
                        break
                    case "Sauvignon Blanc":
                        productos.push("Sauvignon Blanc")
                        break
                    case "Torrontes":
                        productos.push("Torrontes")
                        break                  
                    default:
                        alert("Ese producto no lo tenemos")
                }
                comprar = confirm("¿Quiere seguir comprando?")
                if (comprar == true){
                    productoAComprar = prompt ("¿Cuál desea comprar (Malbec, Cabernet Sauvignon, Merlot, Pinot Noir, Chardonnay, Sauvignon Blanc, Torrontes?")
                }
            }
            console.log(productos)    
            let compraFinal = productos.sort()
            alert("El usuario quiere comprar lo siguiente: " + compraFinal.join(", ") + ".")

            console.log(compraFinal)

            let unicosElementos = []
            let almacenadorDeVecesRepetidas = []
            let contador = 1

            for (let j=0; j< compraFinal.length; j++){
                if(compraFinal[j+1] === compraFinal[j]){
                    contador++
                }else{
                    unicosElementos.push(compraFinal[j])
                    almacenadorDeVecesRepetidas.push(contador)
                    contador = 1
                } 
            }

            console.log(unicosElementos)
            console.log(almacenadorDeVecesRepetidas)

            for(let k = 0; k < unicosElementos.length; k++){
                console.log ("Usted quiere comprar " + almacenadorDeVecesRepetidas[k] + " botella/s de la cepa " + unicosElementos[k])
            }
        }else {
            alert("Esta bien " + nombre + ", nos vemos en otro momento.")
        }
    }else{
        alert("Gracias por visitarnos " + nombre + ". Estaré aquí para cuando desees ver los productos que tenemos.")
    }
}else {
    alert("Adiós " + nombre + ". Te esperamos la próxima!")
}












