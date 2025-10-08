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

// PRUEBA



    const cursos = ["HTML","CSS","JS"]
localStorage.setItem("cursos",JSON.stringify(cursos))


const cursosRecuperados = JSON.parse(localStorage.getItem("cursos"))
console.log(cursosRecuperados)


guardarCursos()
recuperarCursos()