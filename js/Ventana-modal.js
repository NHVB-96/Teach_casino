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

/* AGREGAR ALUMNO AL ARCHIVO GRUPO-1 HTML */

// selecciona todos los botones de la ventana modal
let botonesGrupo = document.querySelectorAll('.caja-modal button');

//recorre cada boton y agrega un evento de click 
botonesGrupo.forEach(boton => {
    boton.addEventListener('click' , (event) => {
     //verificar si es el boton del grupo 1 
     if (event.target.textContent === "Grupo 1"){
        // encontrar div con la clase caja-contendeor-alumnos
        let cajaAlumno = boton.closest('.caja-alumnos-botones').querySelector('.cajas-alumnos');

        //encuentra y oculta el boton verde
        let botonVerde = cajaAlumno.querySelector('.boton-verde');
        if (botonVerde){
            botonVerde.style.display = 'none'; //oculta el boton verde

        }

        //Guarda los elementos en el local storage(navegador)
        let alumnosGuardados = localStorage.getItem('alumnos') || '[]';
        let alumnosArray = JSON.parse(alumnosGuardados);
        alumnosArray.push(cajaAlumno.outerHTML);
        localStorage.setItem('alumnos',JSON.stringify(alumnosArray));

        //Redirige a otro archivo donde se mostrara el contenido
        window.location.href='Grupo-1.html';

     }
    })
    
})


        //Redigir a otro archivo donde se mostrara el contenido
        let alumnosGuardados = localStorage.getItem('alumnos');

        // espacio entre cada div que aparece en grupo-1.html


        if(alumnosGuardados){
            let contenedor = document.getElementById('alumno-container');
            let alumnosArray = JSON.parse(alumnosGuardados);
            alumnosArray.forEach(alumno=>{
                let div = document.createElement('div');
                div.classList.add('alumno-contenedor');
                div.innerHTML = alumno;
                contenedor.appendChild(div);


            })
        }