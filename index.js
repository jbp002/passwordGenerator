const alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const special = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let pass1El = document.getElementById("generated1-btn-el")
let pass2El = document.getElementById("generated2-btn-el")

let slider = document.getElementById("myRange")
let passLen = document.getElementById("pass-len-el")

let numEl = document.getElementById("num-switch").checked
let stdEl = document.getElementById("std-switch").checked
let specialEl = document.getElementById("special-switch").checked
let errorEl = document.getElementById("error-el")

passLen.textContent = slider.value

slider.oninput = function() {
    passLen.textContent = this.value;
} 
function generatePasswords(){
    numEl = document.getElementById("num-switch").checked
    stdEl = document.getElementById("std-switch").checked
    specialEl = document.getElementById("special-switch").checked
    pass1El.textContent = ""
    pass2El.textContent = ""
    errorEl.textContent = ""

    let characters = generateCharacterSet(numEl, stdEl, specialEl)

    if (!numEl && !stdEl && !specialEl){
        console.log("Right Place")
        errorEl.textContent = "At least one character group must be selected!"
    }else{
        pass1El.textContent = passwordGenerator(characters)
        pass2El.textContent = passwordGenerator(characters)
    }
    
    
}

function generateCharacterSet(numEl, stdEl, specialEl){
    let temp = []

    if(numEl){
        temp = temp.concat(number)
    }
    
    if(specialEl){
        temp = temp.concat(special)
    }

    if(stdEl){
        temp = temp.concat(alpha)
    }

    return temp
}
function passwordGenerator (characters){
    let password = ""
    for (i=0; i<slider.value; i++){
        password += characters[Math.floor(Math.random() * characters.length)]
    }
    return password
}

function copyText(buttonID){
    let button = document.getElementById(buttonID)
    let text = button.textContent

    navigator.clipboard.writeText(text)
    alert("Copied the password to clipboard: " + text);
}


