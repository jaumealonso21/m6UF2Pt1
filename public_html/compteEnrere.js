//---------------Compte Enrere------------------------------------
//1 Param = elem que recull la data
//2 Param = elem que recull el 'time': hores, segons, min..
//3 Param = elem que recull el botó executor
//4 Param = elem de sortida de dades

function compteEnrere(textDataEnt, textTimeEnt, botonEnt, resultatEnt) {
    var textData = document.getElementById(textDataEnt);
    var textTime = document.getElementById(textTimeEnt);
    var botonStart = document.getElementById(botonEnt);//Botó iniciador
    botonStart.addEventListener('click', function(){inici();});//No es dispara automaticament
    botonStart.addEventListener('dblclick', function(){atura();});
    var resultat = document.getElementById(resultatEnt);
    resultat.hidden = true;
    
    var interBoto;//Contenidor de l'interval del botó, un num ID
    var iniciatBoto = false;//Botó aturat
    var interDataActual;//Contenidor de l'interval de la data actual, un num ID
    var dataRecollida = new Date();//Data objectiu
    var fi = false;//Ha arribat al final del comptador
    
    function inici() {
        if(!iniciatBoto) {//Evita que fen un click torni a executar si ja ha arrencat
            var arrayData = textData.value.split("/");
            var arrayTime = textTime.value.split(":");
            //Primer l'any, desprès el mes(0-11) i, final. el dia
            dataRecollida.setFullYear(arrayData[2], arrayData[1] - 1, arrayData[0]);
            //Primer l'hora(0-23), desprès els mins(0-59) i, final, els segons(0-59
            dataRecollida.setHours(arrayTime[0], arrayTime[1], arrayTime[2]);
            interDataActual = setInterval(function(){comparaDates();}, 1000);
            animaBoto();//Anima el botó
            iniciatBoto = true;//Botó arrencat
            resultat.hidden = false;//Visibilitza el resultat
        }   
    }
    
    function comparaDates() {
        //var fecha=new Date('2012','1','10','21','00','00');
        
        var hoy=new Date();
        var dias=0;
        var horas=0;
        var minutos=0;
        var segundos=0;

        //if (fecha>hoy){
        if (dataRecollida>hoy){
            //var diferencia=(fecha.getTime()-hoy.getTime())/1000;
            var diferencia=(dataRecollida.getTime()-hoy.getTime())/1000;
            //Treballa ----------var days = Math.floor(diff / (1000 * 60 * 60 * 24*));
            anys=Math.floor(diferencia/8);
            meses =Math.floor(diferencia/12);
            dias=Math.floor(diferencia/86400);
            diferencia=diferencia-(86400*dias);
            horas=Math.floor(diferencia/3600);
            diferencia=diferencia-(3600*horas);
            minutos=Math.floor(diferencia/60);
            diferencia=diferencia-(60*minutos);
            segundos=Math.floor(diferencia);

            //document.getElementById(id).innerHTML='Quedan ' + dias + ' D&iacute;as, ' + horas + ' Horas, ' + minutos + ' Minutos, ' + segundos + ' Segundos'

            /*if (dias>0 || horas>0 || minutos>0 || segundos>0){
                setTimeout("countdown(\"" + id + "\")",1000)
            }*/
        }
        else{
            //document.getElementById('restante').innerHTML='Quedan ' + dias + ' D&iacute;as, ' + horas + ' Horas, ' + minutos + ' Minutos, ' + segundos + ' Segundos'
            
        }
        var d = new Date(0);//Data inicial
        Date.parse(d);//A mil.lisegons
        var d2 = Date.now();//Pels mil.lisegons since midnight Jan 1, 1970
        var any, mes, dia, hora, minut, segon;
        
        
        //var comp = Date.parse(dataRecollida) - d2;//Transf. a mil.lisegons   
        //var compDate = new Date(comp);//Transf a format data
        var m = new Date(dataRecollida - d);
        console.log(dataRecollida.getMonth());
        
        any = Math.abs(dataRecollida.getFullYear() - d.getFullYear());
        //any = m.getFullYear();//Any inici contar mil.lisegons
        mes = Math.abs(dataRecollida.getMonth() - d.getMonth());
        //mes = m.getMonth();
        dia = Math.abs(dataRecollida.getDay() - d.getDay());
        //dia = m.getDay();
        hora = Math.abs(dataRecollida.getHours() - d.getHours());
        //hora = m.getHours();
        minut = Math.abs(dataRecollida.getMinutes() - d.getMinutes());
        //minut = m.getMinutes();
        segon = dataRecollida.getSeconds() - d.getSeconds();//Treballa els segons amb un if-------
        //segon = m.getSeconds();
        //segon = compDate.getSeconds();
        
        /*resultat.innerHTML = "Falten: " + any + " any(s), " + mes + " mes(os) i " + dia + " dia(es)<br />\n"
            + hora + " hora(es) " + minut + " minut(s) " + segon + " segon(s)";*/
    resultat.innerHTML = "Falten: " + any + " any(s), " + mes + " mes(os) i " + dias + " dia(es)<br />\n"
            + horas + " hora(es) " + minutos + " minut(s) " + segundos + " segon(s)";
    }/*resultat.innerHTML = "Falten: " + compDate.getFullYear() + " any(s), " + compDate.getMonth() + " mes(os) i " + compDate.getDay() + " dia(es)<br />\n"
            + compDate.getHours() + " hora(es) " + compDate.getMinutes() + " minut(s) " + compDate.getMilliseconds() + " segon(s)";*/
        
    //Animació del botó------------------------------------------
    function animaBoto() {
        var guions = "";
        var numGuions = 0;//Num màxim de guions
        var text = "Comptant";
        interBoto = setInterval(function(){tempBoto();}, 500);

        function tempBoto() {
            if(numGuions < 3){
               guions += ".";
               numGuions++;
               botonStart.value = text + guions; 
            } else {
                botonStart.value = text;
                guions = "";//Torna a començar
                numGuions = 0;//Torna a començar
            }              
        } 
    }
    ////Fi de l'animació del botó------------------------------------- 
    //
    //Atura l'animació del botó--------------------------------------
    function atura() {
        iniciatBoto = false;//Botó aturat
        clearInterval(interBoto);
        botonStart.value = "Start";
        resultat.hidden = true;//Oculta el resultat
        //resultat.innerHTML = "";//Buida el text del resultat
    }
     //Fi Atura l'animació del botó----------------------------------   
}



