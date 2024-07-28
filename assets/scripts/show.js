
const producto1 = document.getElementById("producto1")
const producto2 = document.getElementById("producto2")
const producto3 = document.getElementById("producto3")
const contenedor1 = document.getElementById("productosInformacionContenedor1")
const contenedor2 = document.getElementById("productosInformacionContenedor2")
const contenedor3 = document.getElementById("productosInformacionContenedor3")
const contenedor = document.getElementById("contenedorProductosPadre")

contenedor2.remove()
contenedor3.remove()

function agregarSlider(){
    let headerSlider = document.getElementById("productosInformacionSlide")
let prev = document.getElementById("botonPrev")
let next = document.getElementById("botonNext")
let index = 1
let disabled = true
let slide
setInterval(() => {
  if(index > 5){
    index = 0
    next.removeAttribute("disabled")
    prev.setAttribute("disabled", disabled)
  }
  slide = index * -100
  headerSlider.style.transform = `translateX(${slide}%)`
  index++
  if(index == 2){
    prev.removeAttribute("disabled")
  }
  if(index == 6){
    next.setAttribute("disabled", disabled)
  }
}, 3500);

next.addEventListener("click", ()=>{
  prev.removeAttribute("disabled")
  slide = index * -100
  headerSlider.style.transform = `translateX(${slide}%)`
  index++
  if(index > 5){
    next.setAttribute("disabled", disabled)
  }
})
prev.addEventListener("click", ()=>{
  index--
  slide = (index-1) * -100
  headerSlider.style.transform = `translateX(${slide}%)`
  if(index == 1){
    prev.setAttribute("disabled", disabled)
  }
})

}

producto1.addEventListener("click", ()=>{
    contenedor2.remove()
    contenedor3.remove()
    contenedor.appendChild(contenedor1)
    agregarSlider()
})
producto2.addEventListener("click", ()=>{
    contenedor1.remove()
    contenedor3.remove()
    contenedor.appendChild(contenedor2)
    agregarSlider()
})
producto3.addEventListener("click", ()=>{
  contenedor1.remove()
  contenedor2.remove()
  contenedor.appendChild(contenedor3)
  agregarSlider()
})
agregarSlider()