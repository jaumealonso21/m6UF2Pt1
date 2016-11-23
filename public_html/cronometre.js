//Cronòmetre

var data = new Date();
var status;//Estat del crono: true-ences/false-aturat
var segons;
var mil;
var marca = [];
/*var comenca = document.getElementById('comenca');
comenca.addEventListener('click', play);
var pausador = document.getElementById('pausador');
pausador.addEventListener('click', pausa);
var marcador = document.getElementById('marcador');
marcador.addEventListener('click', marcadors);*/
/*comenca.onclick = play();
    pausador.onclick = pausa();
    marcador.onclick = marcadors();*/

function iniciar() {
    //status = false;//Comença aturat
    data.setSeconds(0, 0);
    segons = data.getSeconds();
    mil = data.getMilliseconds();   
    
    document.getElementById('segons').innerHTML = segons;
    document.getElementById('minuts').innerHTML = mil;
    
}

function play() {
    
    function temporitzador () {
        /*var data = new Date();
        segons = data.getSeconds();
        mil = data.getMilliseconds();*/
        data.setMilliseconds(1);
        
        document.getElementById('segons').innerHTML = segons;
        document.getElementById('minuts').innerHTML = mil;
    }
    status = setInterval(temporitzador, 1000);
    
}


function pausa() {
    
    status = clearInterval();
    
}

function marcadors() {
    var marcaTemp = {segons:data.getSeconds(), mil:data.getMilliseconds()};
    var mostrar = "";//Evita undefined
    
    marca.push(marcaTemp);
    for(var i in marca) {
        mostrar += " " + [i] + "º" + " Segons: " + marca[i]['segons'] + " " + marca[i]['mil'] + " <br />\n";
    }
    
    document.getElementById('marca').innerHTML = marca;
}