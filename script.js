//Les variables dont on a besoin
var sp , btn_start , btn_stop , t , ms , s ,  mn , h ;

//fonction pour initialiser les variables dont la page se charge
window.onload = function() {
    sp = document.getElementsByTagName("span") ;
    btn_start = document.getElementById('start') ;
    btn_stop = document.getElementById('stop') ;
    t;
    
    ms = 0 , s= 0 , mn = 0 , h=0 ;
    
   
    
    
    
    
}

//mettre en place le compteur
function update_chromo() {
    ms+=1 ;
    if (ms==10) {
        ms=1 ;
        s+=1 ;
    }
    if (s==60) {
        s=0 ;
        mn+=1 ;
    }
    if (mn==60) {
        mn=0;
        h+=1 ;
    }
    
    //insertion des valeurs  dans les spans
    //[0] permet de selectionner le premier span
    //[1] permet de selectionner le 2 éme span etc...
     sp[0].innerHTML = h + "h:" ;
     sp[1].innerHTML = mn + "min:" ;
     sp[2].innerHTML = s + "s:" ;
     sp[3].innerHTML = ms + "ms" ;
   

}

//mettre en place la fonction du boutton start
function start() {
    //cette ligne de code execute la function updatechromo()
    //toutes les 100ms
    t = setInterval(update_chromo,100) ;
    btn_start.disabled = true
}

//stopper le chronometre
function stop() {
    clearInterval(t) ; //suppression de l'intervall t que nous avions crée
    btn_start.disabled = false ;
}

//Initialiser les valeurs du compteur
function reset() {
    clearInterval(t) ;
    btn_start.disabled = false ;
    ms = 0 , s = 0 , mn = 0 , h = 0 ;
    //insérer les nouvelles valeurs dans les spans
    sp[0].innerHTML = h + "h:" ;
    sp[1].innerHTML = mn + "min:" ;
    sp[2].innerHTML = s + "s:" ;
    sp[3].innerHTML = ms + "ms" ;

}
