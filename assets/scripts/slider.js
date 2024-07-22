let headerSlider = document.getElementById("headerImagen1")
let index = 0

setInterval(() => {
  let slide = index * -100
  headerSlider.style.transform = `translateY(${slide}%)`
  index++
  if(index > 2) index = 0
}, 3000);