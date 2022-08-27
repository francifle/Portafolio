/* Para mostrar menu responsive*/
function responsiveMenu(){
    var x = document.getElementById("nav");
    if  (x.className===""){
        x.className = "responsive"
    }   else{
        x.className = "";
    }
}

/*Animacion Barra*/
window.onscroll = function(){
    efectoHabilidades()
};

/*Aplica la animacion de la barra*/
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300 && distancia_skills <=1200){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("php").classList.add("barra-progreso4");
    }
    else {
        document.getElementById("html").classList.remove("barra-progreso1");
        document.getElementById("js").classList.remove("barra-progreso2");
        document.getElementById("bd").classList.remove("barra-progreso3");
        document.getElementById("php").classList.remove("barra-progreso4");
    }
};
