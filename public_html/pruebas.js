//--------------------------
var d = new Date();
var miInterval;//Temporitzador
var pausa;//Estat del crono:0-Inicial/1-Arrencat/2-Pausat
var marquesFiles;//Contenedor de les marques
var cont;//Conta les marques

function iniciCrono(segonsEnt, milEnt) {
    var segonsEnt = segonsEnt;//Evita error 'null' 
    var milEnt = milEnt;//Evita error 'null'
    var segons = document.getElementById(segonsEnt);
    var mil = document.getElementById(milEnt);
    
    d.setSeconds(0, 0);
    pausa = 0;//Estat inicial del crono
    marquesFiles = "";//Evita 'undefined'
    cont = 0;
    
    segons.innerHTML = d.getSeconds();
    mil.innerHTML = d.getMilliseconds();
}

function iniciReinici (segonsEnt, milEnt) {
    d.setSeconds(0, 0);
    
    switch(pausa) {
    case 0://Estat inicial
        miInterval = setInterval(function(){ temp(segonsEnt, milEnt); }, 1);
        pausa = 1;//Arrenca el crono (desde de 0,0)
        break;
    case 1://Crono arrencat
        
        break;
    case 2://Crono pausat
        miInterval = setInterval(function(){ temp(segonsEnt, milEnt); }, 1);
        pausa = 1;//Torna a arrencar (desde de 0,0)
        break;
    default:
        break;
    }
    
    console.log(miInterval);
    
}

function temp(segonsEnt, milEnt) {
    var segonsEnt = segonsEnt;//Evita error 'null' 
    var milEnt = milEnt;//Evita error 'null'
    var segons = document.getElementById(segonsEnt);
    var mil = document.getElementById(milEnt);
    
    d.setMilliseconds(d.getMilliseconds() + 1);
    
    segons.innerHTML = d.getSeconds();
    mil.innerHTML = d.getMilliseconds();
}

function pausaContinua(segonsEnt, milEnt) {
    var segonsEnt = segonsEnt;//Evita error 'null' 
    var milEnt = milEnt;//Evita error 'null'
    var segons = document.getElementById(segonsEnt);
    var mil = document.getElementById(milEnt);
    
    switch(pausa) {
        case 0://Estat inicial
            //No fa res
            break;
        case 1://Esta arrancat
            clearInterval(miInterval);
            marca();
            pausa = 2;//Pausa
            console.log(miInterval);
            break;
        case 2://Esta aturat
            miInterval = setInterval(function(){ temp(segonsEnt, milEnt); }, 1);
            pausa = 1;//Arrenca
            console.log(miInterval); 
            break;
        default:
            break;
    }
        
    segons.innerHTML = d.getSeconds();
    mil.innerHTML = d.getMilliseconds();
}

function marca() {
    var taula = document.getElementById('marques');
    cont++;
    
    marquesFiles += "<tr><td>Marca:</td><td><span>" + cont +"</span></td><td>--</td>\n\
<td><span>" + d.getSeconds() + "," + d.getMilliseconds() + "</span></td></tr>";
    
    taula.hidden = "";
    taula.innerHTML = marquesFiles;
}