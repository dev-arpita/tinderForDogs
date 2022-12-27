
import { dogs } from "./data.js";
import {Dog} from "./charecter.js"

let currentDogIndex = 0
let dogsArray= ["Rex",  "Bella", "Teddy"]

function getNewDog() {
    currentDogIndex+=1
//    console.log(currentDog = new Dog(dogs[currentDogIndex]))
 const nextDog= dogs[dogsArray.shift()]

console.log("nextDog:", nextDog)
    render()
     return nextDog ?  new Dog(nextDog) : {}

    // endMessage()
}
// function getNewDog() {
//     const nextDog = dogs[dogsArray.shift()]
//     return nextDog ? new Character(nextDog) : {}

// }

 const endMessage = ()=> {
    const endEmoji = "🐶"
    const endMessage = `There are no more ${endEmoji} in your area`
    document.body.innerHTML = `
                <div class="end-game">
                    <h3>${endMessage}</h3>
                </div>
                `
    }
   function like() {
    if(dogs.length > 0){

        document.getElementById("like-badge").style.display = "inline"
        document.getElementById("nope-badge").style.display = "none"
         setTimeout(function(){

        currentDog.setMatchStatus(true)
        getNewDog()
          render()
         }, 1000)
    }
    // else{ currentDog.endMessage()}
 }

   function dislike() {
            document.getElementById("nope-badge").style.display = "inline"
            document.getElementById("like-badge").style.display = "none"
             setTimeout(function(){
                currentDog.setMatchStatus(true)
                getNewDog()
                   render()
            }, 1000)

    }
document.getElementById("like-btn").addEventListener('click', like)

document.getElementById("dislike-btn").addEventListener('click', dislike)


function render() {
    document.getElementById("main-content").innerHTML = currentDog.getDogsHtml()
}
let currentDog = new Dog(dogs[currentDogIndex])
console.log("dogsdata", currentDog)
render()
