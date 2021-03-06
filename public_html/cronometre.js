//--------------------------
var d = new Date();
var miInterval;//Temporitzador
var pausa;//Estat del crono:0-Inicial/1-Arrencat/2-Pausat
var marquesFiles;//Contenedor de les marques
var cont;//Conta les marques

function iniciCrono(segonsEnt, milEnt) {
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
    d.setSeconds(0, 0);//Sempre es posa a 0
    
    switch(pausa) {
    case 0://Estat inicial
        miInterval = setInterval(function(){ temp(segonsEnt, milEnt); }, 10);
        pausa = 1;//Arrenca el crono (desde de 0,0)
        document.getElementById("inici").value = "Iniciat";
        document.getElementById("pausa").hidden = false;
        break;
    case 1://Crono arrencat
        document.getElementById("inici").value = "Reiniciat";
        break;
    case 2://Crono pausat
        miInterval = setInterval(function(){ temp(segonsEnt, milEnt); }, 10);
        pausa = 1;//Torna a arrencar (desde de 0,0)
        document.getElementById("inici").value = "Reiniciat";
        break;
    default:
        break;
    }    
}

function temp(segonsEnt, milEnt) {
    var segons = document.getElementById(segonsEnt);
    var mil = document.getElementById(milEnt);
    
    d.setMilliseconds(d.getMilliseconds() + 10);
    
    segons.innerHTML = d.getSeconds();
    mil.innerHTML = d.getMilliseconds().toString().slice(0, 2);
}

function pausaContinua(segonsEnt, milEnt) {
      
    switch(pausa) {
        case 0://Estat inicial
            //No fa res
            break;
        case 1://Esta arrancat
            clearInterval(miInterval);
            marca();
            pausa = 2;//Pausa
            document.getElementById("pausa").value = "Continua";
            break;
        case 2://Esta aturat
            miInterval = setInterval(function(){ temp(segonsEnt, milEnt); }, 10);
            pausa = 1;//Arrenca
            document.getElementById("pausa").value = "Pausa";
            break;
        default:
            break;
    }
}

function marca() {
    var taula = document.getElementById('marques');
    cont++;
    
    marquesFiles += "<tr><td>Marca:</td><td><span>" + cont +"</span></td><td>--</td>\n\
<td><span>" + d.getSeconds() + "," + d.getMilliseconds().toString().slice(0, 2) + "</span></td></tr>";
    
    taula.hidden = "";
    taula.innerHTML = marquesFiles;
}