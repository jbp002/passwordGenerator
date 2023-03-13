const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El = document.getElementById("generated1-btn-el")
let pass2El = document.getElementById("generated2-btn-el")

let slider = document.getElementById("myRange")
let passLen = document.getElementById("pass-len-el")

passLen.textContent = slider.value

slider.oninput = function() {
    passLen.textContent = this.value;
} 
function generatePasswords(){
    pass1El.textContent = passwordGenerator()
    pass2El.textContent = passwordGenerator()
}

function passwordGenerator (){
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


