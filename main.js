// Variablen
const buchstaben = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split('')
const buchstabenReverse = buchstaben.toReversed()
let ergebnis =[]

// inputs und buttonss
const input = document.querySelector('input')
const inputButton = document.getElementById('input-button')
const toggleButton = document.getElementById('toggle-button')
const text = document.getElementById('result')

// false = entschlüsseln und true = verschlüsseln
let toggleStatus = true
let inputWert 
let liste

// Funktionen
const toggle = () => {
    toggleStatus = !toggleStatus
        if(toggleStatus){
        toggleButton.innerHTML = "Verschlüsseln Aktiv"
    } else if (!toggleStatus){
        toggleButton.innerHTML = "Entschlüsseln Aktiv"
    }
    console.log(toggleStatus)
}

toggleButton.addEventListener("click", toggle)

function mod(n, p) {
  return (n % p + p) % p;
}

const verschluesseln = () => {
    for(const element of liste){
   

      const index =  buchstaben.findIndex(e => e == element)
        
      const verschluesselterBuchstabe = buchstaben[index +3 < (buchstaben.length) ? index + 3 :  mod(index +3 ,buchstaben.length)]
      ergebnis.push(element == " "? " ": verschluesselterBuchstabe)
      
          text.innerHTML = ergebnis.join('')
    } 
      ergebnis = []
}

const entschluesseln = () => {
    
    for(const element of liste){
     
      const index =  buchstaben.findIndex(e => e == element)

      const modulo = mod(index -3, buchstaben.length)
   
      const verschluesselterBuchstabe = buchstaben[index - 3 > (buchstaben.length) ? index - 3 :  modulo]
          ergebnis.push(element == " "? " ": verschluesselterBuchstabe)

          text.innerHTML = ergebnis.join('') 
          
      console.log( verschluesselterBuchstabe )
    }
     ergebnis = []
}

inputButton.addEventListener('click',() => {
    inputWert = input.value.toLowerCase()

    liste = inputWert.split('') 
    toggleStatus ? 
    inputWert == undefined ? alert("Gebe was ein zum verschlüsseln!") :verschluesseln()
        :inputWert == undefined ? alert("Gebe was ein zum entschlüsseln!") :entschluesseln()
        
} )

// Logik

if(toggleStatus){
    toggleButton.innerHTML = "Verschlüsseln Aktiv"
} else if (!toggleStatus){
    toggleButton.innerHTML = "Entschlüsseln Aktiv"
}



