let botones = document.querySelectorAll(".botonProyecto")
let botones2 = document.querySelectorAll(".botonProyecto2")
let botones3 = document.querySelectorAll(".botonProyecto3")
let botones4 = document.querySelectorAll(".botonProyecto4")
let botones5 = document.querySelectorAll(".botonProyecto5")

let imagen = document.createElement("img")

let contenedor1 = document.getElementById("proyectoContenedor1")
let estilo = window.getComputedStyle(contenedor1)
let contenedor2 = document.getElementById("proyectoContenedor2")
let contenedor3 = document.getElementById("proyectoContenedor3")
let contenedor4 = document.getElementById("proyectoContenedor4")
let contenedor5 = document.getElementById("proyectoContenedor5")

let botonCerrar = document.querySelector(".botonCerrar")
let dialog = document.querySelector(".dialog")
const proyecto1 = ["assets/img/proyecto/productos/nazca/dos.webp","assets/img/proyecto/prefabricadoCinco.webp", "assets/img/proyecto/prefabricadoSeis.webp"]

botones.forEach((boton, index)=>{
    boton.addEventListener("mouseover", ()=>{
        contenedor1.style.backgroundImage = `url(${proyecto1[index]})`
    })
})
botones2.forEach((boton, index)=>{
    boton.addEventListener("mouseover", ()=>{
        contenedor2.style.backgroundImage = `url(${proyecto1[index]})`
    })
})
botones3.forEach((boton, index)=>{
    boton.addEventListener("mouseover", ()=>{
        contenedor3.style.backgroundImage = `url(${proyecto1[index]})`
    })
})
botones4.forEach((boton, index)=>{
    boton.addEventListener("mouseover", ()=>{
        contenedor4.style.backgroundImage = `url(${proyecto1[index]})`
    })
})
botones5.forEach((boton, index)=>{
    boton.addEventListener("mouseover", ()=>{
        contenedor5.style.backgroundImage = `url(${proyecto1[index]})`
    })
})

contenedor1.addEventListener("click", ()=>{
    imagen.style.content = estilo.backgroundImage
    dialog.append(imagen)
    dialog.showModal()
})
botonCerrar.addEventListener("click", ()=>{
    
    dialog.close()
})