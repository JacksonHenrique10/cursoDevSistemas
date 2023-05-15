function calculoAreaTriangulo(){
    let base = parseFloat (document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);

    let area = (base*altura)/2
    
    if(area<=100){
        alert("A area do Triangulo =" +area+"este pertence ao Grupo 01");
    }else if((area>100)&&(area<=400)){
        alert("A area do Triangulo =" +area+"este pertence ao Grupo 02");

    }else if((area>401)&&(area<=600)){
        alert("A area do Triangulo =" +area+"este pertence ao Grupo 03");
    }else if((area>601)&&(area<=1000)){
        alert("A area do Triangulo =" +area+"este pertence ao Grupo 04");
    }else{
        alert("A area do Triangulo =" +area+"este pertence ao Grupo 05");
    }
}

function calculoAreaCirculo(){
    let raio = parseFloat(document.getElementById("raio").value);
    let resultado = (raio*raio)*3.14;

    alert("A area do circulo é igual a "+resultado);

    if(resultado<=100){
        alert("A area do Circulo =" +resultado+" este pertence ao Grupo 01");
    }else if((resultado>100)&&(resultado<=400)){
        alert("A area do Circulo =" +resultado+" este pertence ao Grupo 02");
    }else if((resultado>401)&&(resultado<=600)){
        alert("A area do Circulo =" +resultado+" este pertence ao Grupo 03");
    }else if((resultado>601)&&(resultado<=1000)){
        alert("A area do Circulo =" +resultado+" este pertence ao Grupo 04");
    }else{
        alert("A area do Circulo =" +resultado+" este pertence ao Grupo 05");
    }

}