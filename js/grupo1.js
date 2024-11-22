let numeroGrupo = 1;
let claveAlumnosGrupo = `alumnos_grupo_${numeroGrupo}`;

let alumnosGuardados = localStorage.getItem(claveAlumnosGrupo);

if(alumnosGuardados){
    let contenedor = document.getElementsByClassName('alumnos-main-principal');
    let alumnosArray = JSON.parse(alumnosGuardados);
    alumnosArray.forEach(alumno => {
       let div = document.createElement('div');
       div.classList.add("alumno-container")
       div.innerHTML = alumno;
       contenedor.appendChild(div);
    });
}