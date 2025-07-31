// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
amigos = [];
let lista = document.getElementById("listaAmigos");


function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    if(amigo!= null){
        amigos.push(amigo);
        let li = document.createElement("li");
        li.textContent = amigo;    
        lista.appendChild(li);
    }
    else{
        alert("Ingrese un nombre válido");
    }
    amigo = document.getElementById("amigo").value = "";
    
}

function sortearAmigo(){
    let random = Math.floor(Math.random()*amigos.length);
    lista.innerHTML = "";
    let resultado = document.getElementById("resultado");
    if(amigos.length!=0){
        resultado.textContent = `El ganador del sorteo es ${amigos[random]}`;
        setTimeout(()=>{
        resultado.textContent = "";
        amigos = [];
    },3000);
    }
    else{
        alert("No agregaste ningun amigo al sorteo!");
    }
    
}
