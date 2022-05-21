function calcular() {    

    let distancia1 = document.getElementById("dist1").value;
    let distancia2 = document.getElementById("dist2").value;
    let distancia3 = document.getElementById("dist3").value;

    maior = " ";
    if(distancia1 < distancia2) {
        maior = distancia2;
    } else if (distancia1 < distancia3) {
        maior = distancia3;
    } else {
        maior = distancia1;
    }

    result.innerHTML = maior;
 
}