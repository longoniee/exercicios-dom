let votar = document.getElementById("votar")
 let imagemG = document.getElementById("generico")
 
 document.addEventListener("click",function(){
     let pergunta = Number(prompt("Em qual canidato você quer votar: \n(12)gabriel \n(21)Otto\n(8)renan \n(24)muriel"))
    switch (pergunta){
         case 12:
             let confirmar1 = prompt("Você deseja confirmar seu voto no candidato gabriel: (S/N)")
             if (confirmar1 == 'S'){
                 alert("Você votou no candidato gabriel")  
                 
             }
             else{
             alert("Reinicie a pagina e escolha outro candidato")    
         }
         break
         case 21:
         let confirmar2 = prompt("Você deseja confirmar seu voto no candidato Otto: (S/N)")
         if(confirmar2 == 'S'){
             alert("Você votou no candidato Otto")
             
        }    
         else{
             alert("Reinicie a pagina e escolha outro candidato")    
             }
         break
             case 8:
         let confirmar3 = prompt("Você deseja confirmar seu voto no candidato renan: (S/N)")
         if(confirmar3 == 'S'){
             alert("Você votou no candidato renan")
             
         }    
         else{
             alert("Reinicie a pagina e escolha outro candidato")    
             }
         break
             case 24:
         let confirmar4 = prompt("Você deseja confirmar seu voto no candidato muriel: (S/N)")
         if(confirmar4 == 'S'){
             alert("Você votou no candidato renan")
             
         }    
         else{
            alert("Reinicie a pagina e escolha outro candidato")    
             }
         break
            }
        }
 )
        

