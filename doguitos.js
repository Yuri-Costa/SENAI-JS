dogs = [
    {
        nome: 'Sammy',
        idade: 6,
        raca: 'Samoieda'
    },
    {
        nome: 'Dragão',
        idade: 5,
        raca: 'Spitz Alemão'
    },
    {
        nome: 'Milton',
        idade: 8,
        raca: 'Spitz Alemão'
    },
    {
        nome: 'Penny',
        idade: 6,
        raca: 'Spitz Alemão'
    },
    {
        nome: 'Nenem',
        idade: 4,
        raca: 'Spitz Alemão'
    },
    ];

    //solta seus script brabos aqui

    function soSpitz() {
        window.alert("Penny" )
        window.alert("dragao" )
        window.alert("milton" )
        window.alert("sammy" )
        window.alert("nenem" )
    }
    function idadeReal() {
        var idades = [6, 5, 8, 6, 4]
        var idadesHumana = idades.map(function (num) {
            return alert(num * 7);
            
        })
    }

    function idadeSoma() {
        var idades = [6, 5, 8, 6, 4]
        var somatoria = idades.reduce(function (total, item) {
            return total + item
        }, 0)
            alert(somatoria)
    }

    function mudaTudo(){
        
        document.body.style.background = "red"
        document.getElementsByClassName("site")[0].innerHTML= "SITE DO VITAS"
        document.getElementById("dog1").getElementsByClassName("sammy")[0].innerHTML= "vitas"
        document.getElementById("dog2").getElementsByClassName("dragao")[0].innerHTML= "vitas2"
        document.getElementById("dog3").getElementsByClassName("milton")[0].innerHTML= "vitas3"
        document.getElementById("dog4").getElementsByClassName("penny")[0].innerHTML= "vitas4"
        document.getElementById("dog5").getElementsByClassName("nenem")[0].innerHTML= "vitas5"
        document.getElementById("dog1").getElementsByClassName("imagem1")[0].src = "Ibageins/vitas2.jpg"
        document.getElementById("dog2").getElementsByClassName("imagem2")[0].src = "Ibageins/xu.jpg"
        document.getElementById("dog3").getElementsByClassName("imagem3")[0].src = "Ibageins/images.jpg"
        document.getElementById("dog4").getElementsByClassName("imagem4")[0].src = "Ibageins/índice.jpg"
        document.getElementById("dog5").getElementsByClassName("imagem5")[0].src = "Ibageins/images v.jpg"
        document.getElementsByTagName("h2")[0].style.color = "blue"
        document.getElementsByTagName("h2")[1].style.color = "purple"
        document.getElementsByTagName("h2")[2].style.color = "yellow"
        document.getElementsByTagName("h2")[3].style.color = "black"
        document.getElementsByTagName("h2")[4].style.color = "brown"
        document.getElementsByTagName("h2")[5].style.color = "white"
        
        
    
    }
     function soma() {
        var n1 = Number.parseFloat(window.prompt("digite um numero!"))
        var n2 = Number.parseFloat(window.prompt("digite outro numero para ser somado"))
        var soma = n1 + n2
        window.alert(`opa, o resultado da sua soma é ${soma}`)

     }
     function vezes() {
        var n1 = Number.parseFloat(window.prompt("digite um numero!"))
        var n2 = Number.parseFloat(window.prompt("digite outro numero para ser multiplicado"))
        var soma = n1 * n2
        window.alert(`opa, o resultado da sua multiplicação é ${soma}`)

     }

     //----------------------- fogo do doom -------------------------------------// 

     const firePixelsArray = []
let fireWidth = 60
let fireHeight = 40
let debug = false
const fireColorsPalette = [{"r":7,"g":7,"b":7},{"r":31,"g":7,"b":7},{"r":47,"g":15,"b":7},{"r":71,"g":15,"b":7},{"r":87,"g":23,"b":7},{"r":103,"g":31,"b":7},{"r":119,"g":31,"b":7},{"r":143,"g":39,"b":7},{"r":159,"g":47,"b":7},{"r":175,"g":63,"b":7},{"r":191,"g":71,"b":7},{"r":199,"g":71,"b":7},{"r":223,"g":79,"b":7},{"r":223,"g":87,"b":7},{"r":223,"g":87,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":103,"b":15},{"r":207,"g":111,"b":15},{"r":207,"g":119,"b":15},{"r":207,"g":127,"b":15},{"r":207,"g":135,"b":23},{"r":199,"g":135,"b":23},{"r":199,"g":143,"b":23},{"r":199,"g":151,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":167,"b":39},{"r":191,"g":167,"b":39},{"r":191,"g":175,"b":47},{"r":183,"g":175,"b":47},{"r":183,"g":183,"b":47},{"r":183,"g":183,"b":55},{"r":207,"g":207,"b":111},{"r":223,"g":223,"b":159},{"r":239,"g":239,"b":199},{"r":255,"g":255,"b":255}]


function start() {
  createFireDataStructure()
  createFireSource()

  setInterval(calculateFirePropagation, 50)
}

function createFireDataStructure() {
  const numberOfPixels = fireWidth * fireHeight

  for (let i = 0; i < numberOfPixels; i++) {
    firePixelsArray[i] = 0
  }
}

function calculateFirePropagation() {
  for (let column = 0; column < fireWidth; column++) {
    for (let row = 0; row < fireHeight; row++) {
      const pixelIndex = column + ( fireWidth * row )

      updateFireIntensityPerPixel(pixelIndex)
    }
  }

  renderFire()
}

function updateFireIntensityPerPixel(currentPixelIndex) {
  const belowPixelIndex = currentPixelIndex + fireWidth

  // below pixel index overflows canvas
  if (belowPixelIndex >= fireWidth * fireHeight) {
    return
  }

  const decay = Math.floor(Math.random() * 3)
  const belowPixelFireIntensity = firePixelsArray[belowPixelIndex]
  const newFireIntensity =
    belowPixelFireIntensity - decay >= 0 ? belowPixelFireIntensity - decay : 0

  firePixelsArray[currentPixelIndex - decay] = newFireIntensity
}

function renderFire() {
  let html = '<table cellpadding=0 cellspacing=0>'

  for (let row = 0; row < fireHeight; row++) {
    html += '<tr>'

    for (let column = 0; column < fireWidth; column++) {
      const pixelIndex = column + ( fireWidth * row )
      const fireIntensity = firePixelsArray[pixelIndex]
      const color = fireColorsPalette[fireIntensity]
      const colorString = `${color.r},${color.g},${color.b}`

      if (debug === true) {
        html += '<td>'
        html += `<div class="pixel-index">${pixelIndex}</div>`
        html += `<div style="color: rgb(${colorString})">${fireIntensity}</div>`
        html += '</td>'
      } else {
        html += `<td class="pixel" style="background-color: rgb(${colorString})">`
        html += '</td>'
      }
    }

    html += '</tr>'
  }

  html += '</table>'

  document.querySelector('#fireCanvas').innerHTML = html  
}

function createFireSource() {
  for (let column = 0; column <= fireWidth; column++) {
    const overflowPixelIndex = fireWidth * fireHeight
    const pixelIndex = (overflowPixelIndex - fireWidth) + column

    firePixelsArray[pixelIndex] = 36
  }
}

function destroyFireSource() {
  for (let column = 0; column <= fireWidth; column++) {
    const overflowPixelIndex = fireWidth * fireHeight
    const pixelIndex = (overflowPixelIndex - fireWidth) + column

    firePixelsArray[pixelIndex] = 0
  }
}

function increaseFireSource() {
  for (let column = 0; column <= fireWidth; column++) {
    const overflowPixelIndex = fireWidth * fireHeight
    const pixelIndex = (overflowPixelIndex - fireWidth) + column
    const currentFireIntensity = firePixelsArray[pixelIndex]

    if (currentFireIntensity < 36) {
      const increase = Math.floor(Math.random() * 14)
      const newFireIntensity =
        currentFireIntensity + increase >= 36 ? 36 : currentFireIntensity + increase

      firePixelsArray[pixelIndex] = newFireIntensity
    }
  }
}

function decreaseFireSource() {
  for (let column = 0; column <= fireWidth; column++) {
    const overflowPixelIndex = fireWidth * fireHeight
    const pixelIndex = (overflowPixelIndex - fireWidth) + column
    const currentFireIntensity = firePixelsArray[pixelIndex]

    if (currentFireIntensity > 0) {
      const decay = Math.floor(Math.random() * 14)
      const newFireIntensity =
        currentFireIntensity - decay >= 0 ? currentFireIntensity - decay : 0

      firePixelsArray[pixelIndex] = newFireIntensity
    }
  }
}

function toggleDebugMode() {
  if (debug === false) {
    fireWidth = 25
    fireHeight = 17
    debug = true
  } else {
    fireWidth = 60
    fireHeight = 40
    debug = false
  }

  createFireDataStructure()
  createFireSource()
}

start()

