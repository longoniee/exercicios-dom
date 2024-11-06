 let forma = document.getElementById('forma')
 forma.addEventListener('click',function(){
     if(forma.style.backgroundColor == 'blue'){
         forma.style.backgroundColor = 'black'
     } else {
         forma.style.backgroundColor = 'blue'     }

})
 
 let forma2 = document.getElementById('forma2')
 forma2.addEventListener('click',function(){
     if(forma2.style.backgroundColor == 'red'){
         forma2.style.backgroundColor = 'gray'
     } else {
         forma2.style.backgroundColor = 'red'
     }
 })
 let forma3 = document.getElementById('forma3')
 forma3.addEventListener('click',function(){
     if(forma3.style.backgroundColor == 'green'){
         forma3.style.backgroundColor = 'purple'
     } else {
         forma3.style.backgroundColor = 'green'
     }
 })