
import { dogs } from "./data.js";
import {Dog} from "./charecter.js"
console.log("dogs:", dogs)
let currentDogIndex = 0
let hasDog = false

function getNewDog() {
    currentDogIndex+=1
   currentDog = new Dog(dogs[currentDogIndex])
   console.log("currentDog",currentDog)
    render()
}
 function renderEndMessage() {
    const endEmoji = "🐶"
    const endMessage = `There are no more ${endEmoji} in your area`
    document.body.innerHTML = `
                <div class="end-game">
                    <h3>${endMessage}</h3>
                </div>
                `
    }
   function like() {
    if(!hasDog){

        document.getElementById("like-badge").style.display = "inline"
        document.getElementById("nope-badge").style.display = "none"
         setTimeout(function(){

        currentDog.setMatchStatus(true)
        getNewDog()
          render()
         }, 1000)
    }
    else{
    dogs.push(renderEndMessage())
    }

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
