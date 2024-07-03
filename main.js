

    // BOTONES 
    const btnTexto = document.getElementById("btn-texto") // btn de mostrar aside de text
    const btnImagen = document.getElementById("btn-imagen") // btn de mostar aside de img
    const btnToggle = document.getElementById("btn-toggle") //Modo oscuro
    const btnCancelar = document.getElementById("cancelar") // btn de salir de aside text
    const btnSalir = document.getElementById("salir") // btn de salir de aside img
    const btnDescarga = document.getElementById("download-meme-button") // btn de descargar meme
    const btnRestablecer = document.getElementById("btn-restablecer") // btn de restablecer filtros (aside img)
    const btnNoTextSup = document.getElementById("sin-text-superior") // btn sin texto superior(aside text)
    const btnNoTextInf = document.getElementById("sin-text-inferior") // btn sin texto inferior(aside text)
    const btnSinFondo = document.getElementById("sin-fondo") // input de sin fondo de texto (aside text)
    const btnNinguno = document.getElementById("bnt-ninguno") // btn de ninguno de contorno (aside text)
    const btnClaro = document.getElementById("bnt-claro") // btn de claro de contorno (aside text)
    const btnOscuro = document.getElementById("bnt-oscuro") // btn de oscuro de contorno (aside text)
    

             // ELEMENTOS 
const header = document.querySelector("header") // header
const web = document.getElementById("contenedor-web") // contenedor web
const textImg = document.getElementById("text-meme") // etiqueta p que toma el value de input superior
const img = document.getElementById("div-img") // div contenedor de img
const textImg2 = document.getElementById("text2-meme") // etiqueta p que toma el value de input inferior 
const asideImg = document.getElementById("aside-img") // aside img
const inputImagen = document.getElementById("url") // input de url, para la img (aside img)
const fondoImg = document.getElementById("fondo-img"); // input tipo color (aside img)
const spanFondoImg = document.getElementById("span-fondo-img") // span de fondo de imagen (aside img)
const selectFondo = document.getElementById("select-fondo") // selector de fondo de color (aside img)
const rangoBrillo = document.getElementById("brillo") // input tipo rango del filtro brillo (aside img)
const rangoOpacidad = document.getElementById("opacidad") // input tipo rango del filtro opacidad (aside img)
const rangoContraste = document.getElementById("contraste") // input tipo rango del filtro contraste (aside img)
const rangoDesenfoque = document.getElementById("desenfoque") // input tipo rango del filtro desenfoque (aside img)
const escalasDeGrises = document.getElementById("grises") // input tipo rango del filtro escala de grises (aside img)
const rangoSepia = document.getElementById("sepia") // input tipo rango del filtro sepia (aside img)
const rangoHue = document.getElementById("hue") // input tipo rango del fritro hue (aside img)
const rangoSaturno = document.getElementById("saturno") // input tipo rango del fritro saturno (aside img)
const rangoNegativo = document.getElementById("negativo") // input tipo rango de flitro negativo (aside img)
const asideText = document.getElementById("aside-text") // aside text
const inputSuperior = document.getElementById("superior") // input superior que pinta su value en la etiqueta p (aside text)
const inputInferior = document.getElementById("inferior") // input inferior que pinta su value en la etiqueta p (aside tex)
const selectText = document.getElementById("fuente-text") // font-family (aside text)
const fontSize = document.getElementById("font-size") // font-size (aside text)
const alignCenter = document.getElementById("align-center") // align-center (aside text)
const alignRight = document.getElementById("align-right") // align-right (aside text)
const alignLeft = document.getElementById("align-left") // align-left (aside text)
const inputColor = document.getElementById("color-text-input") // input de color para texto (aside text)
const inputFondo = document.getElementById("fondo-text-input") // input de fondo para texto (aside text)
const colorText = document.getElementById("color-text") // span de color de texto (aside text)
const fondoText = document.getElementById("fondo-text") // span de fondo de texto (aside text)
const padding = document.getElementById("padding-text") // input de espaciado de texto (aside text)
const interlineado = document.getElementById("interlineado") // select de interlineado de texto (aside text)


  // OCULTAR Y MOSTAR (JUNTO CON HEADER Y ASIDE)
  btnTexto.addEventListener(`click`, () =>{
    asideImg.classList.add("oculto")
    asideText.classList.remove("oculto")
})
btnImagen.addEventListener(`click`, () =>{
    asideText.classList.add("oculto")
    asideImg.classList.remove("oculto")
})

  // TOGGLE DE MODO OSCURO
  btnToggle.addEventListener("click", ()  => {
    web.classList.toggle("web-black")
    header.classList.toggle("header-black")
    asideText.classList.toggle("aside-black")
    asideImg.classList.toggle("aside-black")
    selectText.classList.toggle("fuente-text")
    colorText.classList.toggle("span-black")
    fondoText.classList.toggle("span-black")
    spanFondoImg.classList.toggle("span-black")
    btnImagen.classList.toggle("letra-white")
    btnTexto.classList.toggle("letra-white")
    btnToggle.classList.toggle("letra-white")
  }) 

  // BOTON DE SALIR/OCULTAR DEL ASIDE 
btnCancelar.addEventListener('click', (event) => {asideText.classList.add("oculto")})
btnSalir.addEventListener('click', (event) => {asideImg.classList.add("oculto")})

  // DESCARGAR MEME 
const descargarMeme = () => {
 domtoimage.toBlob(document.getElementById("canvas-meme")).then((blob) =>
  saveAs(blob, 'mi-meme.png'))
}
btnDescarga.addEventListener("click", descargarMeme)



      // IMAGEN
// ---------------------

  // DIV QUE TOME EL VALUE DEL INPUT PARA PINTAR LA IMAGEN 
  inputImagen.addEventListener( "input", (event) => {
    const srcIngresado = event.target.value;
    img.style.backgroundImage = `url("${srcIngresado}")`
})

  //  INPUT QUE PINTE EL VALUE EN EL SPAN Y FONDO DE LA IMAGEN
fondoImg.addEventListener( "input", (event) => {
  spanFondoImg.innerHTML = event.target.value.toUpperCase()
  img.style.backgroundColor = event.target.value
})

selectFondo.addEventListener( "click", (event) => {
  img.style.backgroundBlendMode = event.target.value
})

  // FILTROS PARA LA IMAGEN
const filtros = () => {
  const brillo = rangoBrillo.value
  const opacidad = rangoOpacidad.value
  const contraste = rangoContraste.value
  const desenfoque = rangoDesenfoque.value
  const grises = escalasDeGrises.value
  const hue = rangoHue.value
  const sepia = rangoSepia.value
  const saturno = rangoSaturno.value
  const negativo = rangoNegativo.value
  img.style.filter = `brightness(${brillo}) opacity(${opacidad}) contrast(${contraste}%) blur(${desenfoque}px) 
  grayscale(${grises}%) hue-rotate(${hue}deg) sepia(${sepia}%) saturate(${saturno}%) invert(${negativo})`
}
rangoBrillo.addEventListener('input', filtros)
rangoOpacidad.addEventListener('input', filtros)
rangoContraste.addEventListener('input', filtros)
rangoDesenfoque.addEventListener('input', filtros)
escalasDeGrises.addEventListener('input', filtros)
rangoHue.addEventListener('input', filtros)
rangoSepia.addEventListener('input', filtros)
rangoSaturno.addEventListener('input', filtros)
rangoNegativo.addEventListener('input', filtros)


 // BOTON DE REESTABLECER FILTROS   
 btnRestablecer.addEventListener("click", (event) => {
    const filtroBrillo = rangoBrillo.value = 1
    const filtroOpacidad = rangoOpacidad.value = 1
    const filtroContraste = rangoContraste.value = 100
    const filtroDesenfoque = rangoDesenfoque.value = 0
    const filtroGrises = escalasDeGrises.value = 0
    const filtroHue = rangoHue.value = 0
    const filtroSepia = rangoSepia.value =  0
    const filtroSaturno = rangoSaturno.value = 0 
    const filtroNegativo = rangoNegativo.value = 0
    img.style.filter = `brightness(${filtroBrillo})` 
    img.style.filter = `opacity(${filtroOpacidad})` 
    img.style.filter =  `contrast(${filtroContraste}%)` 
    img.style.filter = `blur(${filtroDesenfoque}px) `
    img.style.filter = `grayscale(${filtroGrises}%) `
    img.style.filter = `hue-rotate(${filtroHue}deg)`
    img.style.filter = `sepia(${filtroSepia}%)`
    img.style.filter = `saturate(${filtroSaturno}%)`
    img.style.filter = `invert(${filtroNegativo})`
  })
  
  // -----------------------------


             // TEXTO
// -----------------------------

  // INPUT QUE PINTE EN LA ETIQUETA P 
inputSuperior.addEventListener( "input", (event) => {
    const textoIngresado = event.target.value;
    textImg.innerHTML = textoIngresado
  })
  
  inputInferior.addEventListener( "input", (event) => {
    const textoIngresado = event.target.value;
    textImg2.innerHTML = textoIngresado
  })
  
    // SIN TEXTO SUPERIOR Y INFERIOR
  btnNoTextSup.addEventListener(`click`, () =>{textImg.classList.toggle("oculto");})
  btnNoTextInf.addEventListener(`click`, () =>{textImg2.classList.toggle("oculto");})
  
    // FUENTE (font-family)
  selectText.addEventListener("input", (event) =>{
  const fuente = event.target.value
  textImg.style.fontFamily = fuente
  textImg2.style.fontFamily = fuente
  })
  
    // FUENTE (font-size)
  fontSize.addEventListener("input", (event) =>{
  const tamanio = event.target.value
  textImg.style.fontSize = `${tamanio}px`
  textImg2.style.fontSize = `${tamanio}px`
  })
  
    // ALINEACION DE TEXTO
  alignCenter.addEventListener("click", (event) => { 
  textImg.style.textAlign = "center"
  textImg2.style.textAlign = "center"
  })
  alignRight.addEventListener("click", (event) => { 
  textImg.style.textAlign = "right"
  textImg2.style.textAlign = "right"
  })
  alignLeft.addEventListener("click", (event) => { 
  textImg.style.textAlign = "left"
  textImg2.style.textAlign = "left"
  })
  
    // COLOR DE TEXTO 
  inputColor.addEventListener( "input", (event) => {
  colorText.innerHTML = event.target.value.toUpperCase()
  textImg.style.color = event.target.value
  textImg2.style.color = event.target.value
  })
  
    // FONDO DE TEXTO
  const actualizarFondo =  (event) => {
  if(btnSinFondo.checked){
    textImg.style.backgroundColor = "transparent"
    textImg2.style.backgroundColor = "transparent"
    textImg.style.color = "white"; 
    textImg2.style.color = "white"; 
    textImg.style.position = 'absolute'
    textImg2.style.position = 'absolute'
  } else {
    const color = inputFondo.value
      fondoText.innerHTML = color.toUpperCase()
      textImg.style.backgroundColor = color
      textImg2.style.backgroundColor = color
       textImg.style.color = "black"; 
    textImg2.style.color = "black"; 
      textImg.style.position = 'static'
    textImg2.style.position = 'static'
  }     
  }
  inputFondo.addEventListener("input", actualizarFondo)
  btnSinFondo.addEventListener("click", actualizarFondo)
  
    // CONTORNO
  btnNinguno.addEventListener("click", (event) => {
  textImg.style.textShadow = "none"
  textImg2.style.textShadow = "none"
  })
  
  btnClaro.addEventListener("click", (event) => {
  textImg.style.textShadow = "-2px 2px 2px #fff, 2px -2px 2px #fff, 2px 2px 2px #fff, -2px -2px #fff"
  textImg2.style.textShadow = "-2px 2px 2px #fff, 2px -2px 2px #fff, 2px 2px 2px #fff, -2px -2px #fff"
  })
  
  btnOscuro.addEventListener("click", (event) => {
  textImg.style.textShadow = "-2px 2px 2px #000, 2px -2px 2px #000, 2px 2px 2px #000, -2px -2px #000"
  textImg2.style.textShadow = "-2px 2px 2px #000, 2px -2px 2px #000, 2px 2px 2px #000, -2px -2px #000"
  })
  
    // ESPACIADO
  padding.addEventListener("input", (event) => {
  const valor = padding.value
  textImg.style.padding = `${valor}% 2%`
  textImg2.style.padding = `${valor}% 2%`
  })
  
    // INTERLINEADO
  interlineado.addEventListener("input", (event) => {
  const valor = interlineado.value
  textImg.style.lineHeight = valor
  textImg2.style.lineHeight = valor
  })