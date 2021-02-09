//Start game


//Score - when mouse-enter - score display
let myScore = 0

//lost life - when div gets to the bottom

//Game over


//Restart

//slice 
let sprite1 =  document.querySelector("#Sprite1")
sprite1.addEventListener('mouseenter', function() {
    myScore++;
    let addScore = document.querySelector('#score')
    addScore.innerText = myScore
    sprite1.classList.add('disappear')
})



