var a;
//a.addEventListener('onclick', function(){alertar();});
//a.innerHTML = "jdkjsjd";
function inici() {
    a = document.getElementById('boto');
    a.addEventListener('click', function(){alertar();});//No es dispara automaticament
}

function alertar() {
    alert("a");
}

