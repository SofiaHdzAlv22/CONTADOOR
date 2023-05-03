let increment = 0;

let show = document.querySelector('.show')
let cuerpo = document.querySelector('.contenedor')

document.addEventListener('click',(e)=>{
 console.log(e)

 if(e.target.matches('#mermar')){
    increment--
    show.innerHTML = increment
    cuerpo.style.backgroundColor = 'rgb(122, 199, 235)'
     }


    else if(e.target.matches('#resetear')){
       increment=0
       show.innerHTML = increment
       cuerpo.style.backgroundColor= 'rgb(122, 14, 14)'
     }


   
    else if(e.target.matches('#aumentar')){
       increment++
       show.innerHTML = increment
       cuerpo.style.backgroundColor= 'rgb(60, 97, 49)'
     }

   
})
