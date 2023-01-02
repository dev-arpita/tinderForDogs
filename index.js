import { dogs } from "./data.js";
import {Dog} from "./Dog.js"

let isWaiting = false
let currentDog= getNewDog()

/*Returns next dog*/
function getNewDog() {
     const nextDog= dogs.shift()
    return nextDog ?  new Dog(nextDog) : false
}

/* Render dog data */
function render() {
    if(currentDog) {
    document.getElementById("main-content").innerHTML = currentDog.getDogsHtml()
    }
    else{
        document.body.innerHTML = renderEndMessage()
    }
}

 function renderEndMessage() {
    const endMessage = `
                <div class="end-message">
                    <p>There are no more 🐶 in your area right now! Come back later ❤️</p>
                </div>
            `
    return endMessage
}

   function like() {
        if(!isWaiting) {
            document.getElementById("like-badge").style.display = "inline"
            document.getElementById("nope-badge").style.display = "none"
            currentDog.setMatchStatus(true)
            currentDog = getNewDog()
            isWaiting = true
            setTimeout(()=> {
                render()
                isWaiting = false
            }, 800)
        }
    }

   function dislike() {
        if(!isWaiting) {
            document.getElementById("nope-badge").style.display = "inline"
            document.getElementById("like-badge").style.display = "none"
            currentDog.setMatchStatus(false)
            currentDog = getNewDog()
            isWaiting = true
            setTimeout(()=> {
                render()
                isWaiting = false
            }, 800)
        }
    }

document.getElementById("like-btn").addEventListener('click', like)
document.getElementById("dislike-btn").addEventListener('click', dislike)

render()
