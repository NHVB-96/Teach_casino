let numeroGrupo = 3;
let claveAlumnosGrupo = `alumnos_grupo_${numeroGrupo}`;

let alumnosGuardados = localStorage.getItem(claveAlumnosGrupo);

if(alumnosGuardados){
    let contenedor = document.getElementById('alumno-contenedor');
    let alumnosArray = JSON.parse(alumnosGuardados);
    alumnosArray.forEach(alumno => {
       let div = document.createElement('div');
       div.classList.add('alumno-contenedor');
       div.innerHTML = alumno;
       contenedor.appendChild(div);
    });
}