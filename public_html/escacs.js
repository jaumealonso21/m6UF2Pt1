//------------------- Escacs 

function escacsJoc() {
 
var escacs = document.getElementById('escacs');
escacs.hidden = true;
var ctx;
var amplada = document.getElementById('amplada');
var alcada = document.getElementById('alcada');
var color = document.getElementById('color');
var botones = document.getElementById('botones');
var boto=document.getElementById('boto');
 //boto.ondblclick = function () {     };
 boto.onclick = function () { inici() ;};
 

    function inici() {
       escacs.hidden = false;
       botones.hidden = true;
       escacs.width = amplada.value;
       escacs.height = alcada.value;
       ctx = escacs.getContext('2d');
       tauler();
    }
    
    function tauler() {
        var amp = escacs.width/8;
        var alc = escacs.height/8;
        var x = 0, y = 0, t = 0;//t controla les caselles par/impar
        for(i = 0; i < 8; i++){//Num de caselles
            for(j = 0; j < 8; j++){//Num de caselles          
                if(t % 2 > 0){
                   casella(color.value, x, y, amp, alc); 
                }
                x += amp;
                t++;
            }
            t = 1;//Comença la casella top/left en blanc
            t += i;
            console.log(t);
            x = 0;
            y += alc;
        }
    }
    
    function casella(farcit, x, y, amp, alc) {
        ctx.fillStyle = farcit;
        ctx.fillRect (x, y, amp, alc); 
    }
}
 



