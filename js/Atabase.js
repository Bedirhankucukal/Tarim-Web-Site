
var bodyDOM = document.querySelector("body")
var CarSetDOM = document.querySelector("#carstart")
var mainDOM = document.querySelector("#main1")
var mainDOM2 = document.querySelector("#main2")

var mql = window.matchMedia("screen and (min-width: 800px)")

function genislik(){
    if (mql.matches){ // medya sorguları eşleşiyorsa true döner
        
        mainDOM.classList.add("tabaseclogo1")
        mainDOM2.classList.add("tabloclasstaba")

       }
       else{
        bodyDOM.classList.add("col-12");
        CarSetDOM.classList.remove('carsett');
        
        
       }

}



genislik()
