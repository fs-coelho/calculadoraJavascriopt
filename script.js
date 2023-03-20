function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}










    




function typeWrite (elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function() {
            elemento.innerHTML += letra
        }, 100 * i)
    });
}

const titulos = document.querySelector('h3');
typeWrite(titulos);