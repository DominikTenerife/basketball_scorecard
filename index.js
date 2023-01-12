
let homescore = 0
let guestscore = 0
let homepoints = document.getElementById("homepoints-el")
let guestpoints = document.getElementById("guestpoints-el")



function homeAdd1Point() {
    
    homescore +=1
    console.log(homescore)
    homepoints.textContent = homescore
}

function homeAdd2Point() {
    
    homescore +=2
    console.log(homescore)
    homepoints.textContent = homescore
}

function homeAdd3Point() {
    
    homescore +=3
    console.log(homescore)
    homepoints.textContent = homescore
}


function guestAdd1Point() {
    
    guestscore +=1
    console.log(guestscore)
    guestpoints.textContent = guestscore
}

function guestAdd2Point() {
    
    guestscore +=2
    console.log(guestscore)
    guestpoints.textContent = guestscore
}

function guestAdd3Point() {
    
    guestscore +=3
    console.log(guestscore)
    guestpoints.textContent = guestscore
}
