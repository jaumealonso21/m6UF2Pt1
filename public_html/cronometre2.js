//--------------------------Cronòmetre------------

function iniciCrono(segonsEnt, milEnt, iniciEnt, pausaEnt, marquesEnt) {
    var d = new Date();
    d.setSeconds(0, 0);
    var miInterval;//Temporitzador
    var pausa= 0;//Estat del crono:0-Inicial/1-Arrencat/2-Pausat
    var marquesFiles = "";//Contenedor de les marques
    var cont = 0;//Conta les marques

//----------------------Recollida de tags  d'inputs i outputs ------------------------
    var segonsEnt = segonsEnt;//Evita error 'null'
    var segons = document.getElementById(segonsEnt);
    var milEnt = milEnt;//Evita error 'null'
    var mil = document.getElementById(milEnt);
    var marquesEnt = marquesEnt;//Evita error 'null' 
    var taula = document.getElementById(marquesEnt);
    var iniciEnt = iniciEnt;//Evita error 'null' 
    var inici = document.getElementById(iniciEnt);//Botó iniciador
    inici.addEventListener('click', function(){iniciReinici();});//No es dispara automaticament
    var pausaEnt = pausaEnt;//Evita error 'null'
    var pausa = document.getElementById(pausaEnt);//Botó pausa/marques
    pausa.addEventListener('click', function(){pausaContinua();});//No es dispara automaticament
 //---------------------Fin de recollida d'inputs i outputs --------------------------
    segons.innerHTML = d.getSeconds();
    mil.innerHTML = d.getMilliseconds();
    
    function iniciReinici () {
        d.setSeconds(0, 0);

        switch(pausa) {
        case 0://Estat inicial
            miInterval = setInterval(function(){ temp(segonsEnt, milEnt); }, 10);
            pausa = 1;//Arrenca el crono (desde de 0,0)
            document.getElementById("inici").value = "Iniciat";
            break;
        case 1://Crono arrencat
            //No fa res
            break;
        case 2://Crono pausat
            miInterval = setInterval(function(){ temp(); }, 10);
            pausa = 1;//Torna a arrencar (desde de 0,0)
            document.getElementById("inici").value = "Reiniciat";
            break;
        default:
            break;
        }    
    }
    function temp() {

        d.setMilliseconds(d.getMilliseconds() + 10);

        segons.innerHTML = d.getSeconds();
        mil.innerHTML = d.getMilliseconds();
    }
    
    function pausaContinua() {
        
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
                miInterval = setInterval(function(){ temp(); }, 10);
                pausa = 1;//Arrenca
                console.log(miInterval); 
                break;
            default:
                break;
        }
    }
    function marca() {
        cont++;

        marquesFiles += "<tr><td>Marca:</td><td><span>" + cont +"</span></td><td>--</td>\n\
    <td><span>" + d.getSeconds() + "," + d.getMilliseconds() + "</span></td></tr>";

        taula.hidden = "";
        taula.innerHTML = marquesFiles;
    }
}
