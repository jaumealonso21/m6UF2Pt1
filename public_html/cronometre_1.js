//------------------------Cronómetre----------------------

function crono(segonsEnt, milEnt, iniciEnt, pausaEnt, marquesEnt) {
    var d = new Date(0, 0, 0, 0, 0, 0, 0);
    var miInterval;//Temporitzador dels mil.lèssimes
    var pausa = 0;//Estat del crono:0-Inicial/1-Arrencat/2-Pausat
    var marquesFiles = "";//Contenedor de les marques
    var cont = 0;//Conta les marques
    
    var segons = document.getElementById(segonsEnt);
    segons.innerHTML = d.getSeconds();
    var mil = document.getElementById(milEnt);
    mil.innerHTML = d.getMilliseconds();
    var inici = document.getElementById(iniciEnt);
    inici.addEventListener("click", iniciReinici);
    var pausa = document.getElementById(pausaEnt);
    pausa.addEventListener("click", function(){pausaContinua();});
  
  function iniciReinici () {
        d.setSeconds(0, 0);//Torna a reiniciar

        switch(pausa) {
        case 0://Estat inicial
            miInterval = setInterval(function(){ temp(segonsEnt, milEnt); }, 1);
            console.log("djkjd");
            pausa = 1;//Arrenca el crono (desde de 0,0)
            inici.value = "Reinicia";
            break;
        case 1://Crono arrencat
            //No fa res
            break;
        case 2://Crono pausat
            miInterval = setInterval(function(){ temp(segonsEnt, milEnt); }, 1);
            pausa = 1;//Torna a arrencar (desde de 0,0)
            break;
        default:
            break;
        } 
    }
  
    function temp() {
        var dataActual = new Date();

        d.setMilliseconds(dataActual.getMilliseconds());
        console.log(dataActual.getSeconds());

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
            //console.log(miInterval);
            break;
        case 2://Esta aturat
            miInterval = setInterval(function(){ temp(segonsEnt, milEnt); }, 1);
            pausa = 1;//Arrenca
            //console.log(miInterval); 
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
  
  
  
  
}



