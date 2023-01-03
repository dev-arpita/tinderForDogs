// Create the Dog class here
class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }

    getDogsHtml() {
        const { name, avatar, age, bio } = this
        return `
        <div class="eachDog">
            <img class="profile-img" src="${avatar}" alt="">
            <div class="dog_detail">
                <h2 class="dog-name">${name},<span class=dog_age">${age}</span>
                </h2>
                <p class="dog-bio">${bio}</p>
            </div>
                <div class="badge">
                    <img id="like-badge" src="/images/badge-like.png" alt="">
                </div>
                <div class="badge">
                    <img id="nope-badge" src="/images/badge-nope.png" alt="">
                </div>

        </div>`
    }

}

export {Dog}
