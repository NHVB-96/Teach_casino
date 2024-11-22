let numeroGrupo = 4;
let claveAlumnosGrupo = `alumnos_grupo_${numeroGrupo}`;

let alumnosGuardados = localStorage.getItem(claveAlumnosGrupo);

if(alumnosGuardados){
    let contenedor = document.getElementsByClassName('caja-alumnos-botones');
    let alumnosArray = JSON.parse(alumnosGuardados);
    alumnosArray.forEach(alumno => {
       let div = document.createElement('div');
       div.innerHTML = alumno;
       contenedor.appendChild(div);
    });
}