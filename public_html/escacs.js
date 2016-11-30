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
        var i = 0, j = 0, x = 0, y = 0;
        for(i; i < 8; i++){//Num de caselles
            for(j; j < 8; j++){//Num de caselles
                if(j%2>0){
                   casella(color.value, x, y, escacs.width/8, escacs.height/8); 
                }
                x += escacs.width/8;
            }
            x = 0;
            y += escacs.height/8;
            console.log(y);
        }
    }
    
    function casella(farcit, x, y, amp, alc) {
        ctx.fillStyle = farcit;
        ctx.fillRect (x, y, amp, alc); 
    }
}
 



