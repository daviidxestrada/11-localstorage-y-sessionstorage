const guardarAlumno = ()=>{
    const alumno = {
        nombre: "Ana",
        edad: 20,
        curso: "JS"
    }
    localStorage.setItem("alumno",JSON.stringify(alumno))
    }


const recuperarAlumno = ()=>{
      const alumnoRecuperado = JSON.parse(localStorage.getItem("alumno"))
      console.log(alumnoRecuperado)
}

guardarAlumno()
recuperarAlumno()