let agregarAlumnos = document.querySelectorAll('.boton-verde');
let cerrarModal = document.querySelectorAll('.boton-rojo');
agregarAlumnos.forEach( agregarAlumno =>{
    agregarAlumno.addEventListener('click',()=>{
        let cajaAlumnoBotones = agregarAlumno.closest('.caja-alumnos-botones');
        let modal = cajaAlumnoBotones.querySelector('.no-mostrar');

        if(modal){
            modal.style.display='block';
        }
    })
    
 
} )
cerrarModal.forEach( cerrar =>{
    cerrar.addEventListener('click',()=>{
        let cajaAlumnoBotones2 = cerrar.closest('.caja-alumnos-botones');
        let desaparecerModal = cajaAlumnoBotones2.querySelector('.no-mostrar');

        if(desaparecerModal){
            desaparecerModal.style.display='none';
        }
    })
    
 
} )

