const passwordLength = 15

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const gBtn = document.getElementById("genBtn")
const cBtn = document.getElementById("clearBtn")

const firstP = document.getElementById("pass1")
const secondP = document.getElementById("pass2")


gBtn.addEventListener("click", function () {
    generatePassword()
                         
    
})

function getRandom(){
        let randomArray = Math.floor(Math.random() * characters.length)
          return characters[randomArray]  
    }

function generatePassword(){
       firstP.textContent = password();
        secondP.textContent = password()
    }

    function password(){ 
        let characters = "";
        for(let i = 0 ;  i < passwordLength ; i++){
           characters += getRandom()
            }
         
           return characters
        }

cBtn.addEventListener("click", function() {
           firstP.textContent = ""
           secondP.textContent= ""
           
        })


document.querySelector('#pass1').addEventListener('click', async event => {
    if (!navigator.clipboard) {
      // Clipboard API not available
      return
    }
    const text = event.target.innerText
    try {
      await navigator.clipboard.writeText(text)
      event.target.textContent = 'Copied to clipboard'
    } catch (err) {
      console.error('Failed to copy!', err)
    }
  })

  
document.querySelector('#pass2').addEventListener('click', async event => {
  if (!navigator.clipboard) {
    // Clipboard API not available
    return
  }
  const text = event.target.innerText
  try {
    await navigator.clipboard.writeText(text)
    event.target.textContent = 'Copied to clipboard'
  } catch (err) {
    console.error('Failed to copy!', err)
  }
})
