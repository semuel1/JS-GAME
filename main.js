/* Constants */
/* Game Logic Variables and State */
let myScore = 0
let misses = 0

/* DOM References */

let sprite1 =  document.querySelector("#Sprite1")
let sprite2 =  document.querySelector("#Sprite2")
let sprite3 =  document.querySelector("#Sprite3")

let addScore = document.querySelector('#score')
let gameOver = document.querySelector('#GameOver')
let gamePieces = document.querySelectorAll('.GamePieces')
// let startGame = document.querySelector('.class')


/* Functions and Game Logic */



function removeTargets() {
   let gamePieces = document.querySelectorAll('.GamePieces')
    for (let i=0; i < gamePieces.length; i++) {
        gamePieces[i].remove()
    }
}
// removeTargets()

// *When I press start game, the game is reset and then the object float on the screen.
function reset(event){
    myScore = 0
    misses = 0
    showSprite.classList.toggle('');
}

function toggleClass() {
    let showSprite = document.getElementById('Sprite1');
    showSprite.classList.toggle('myStyle');
}

// *When I move my cursor through an object, the object should slice in half, gaining me a single point.
function handleMouseEvent(event) {
    console.log(event.target)
    myScore++;
    addScore.innerText = myScore
    event.target.classList.add('disappear')
}
// *When I slice the object, a new object will appear for me to slice.
// *When you miss three objects the game will end.
// *When you miss an object a couter will indicate that you missed.
// *When you slice 5 objects, game is won.
// *Counter will indicate point system.

/* Event Listeners */

// startGame.addEventListener('click', reset)
sprite1.addEventListener('mouseenter', handleMouseEvent)
sprite2.addEventListener('mouseenter', handleMouseEvent)
sprite3.addEventListener('mouseenter', handleMouseEvent)

for(gamePiece of gamePieces) {
    if (!gamePiece.classList.contains('disappear')) {
        gameOver.getElementsByClassName.display = 'block'
    }
}


//gamestate

function setState(state) {
    gameState = state;
}





