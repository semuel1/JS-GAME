/* Constants */
/* Game Logic Variables and State */
let myScore = 0
let myLives = 3
let sprite1Time;
let sprite2Time;
let sprite3Time;
let sprite4Time;
let sprite5Time;

/* DOM References */

let sprite1 =  document.querySelector("#sprite1")
let sprite2 =  document.querySelector("#Sprite2")
let sprite3 =  document.querySelector("#Sprite3")
let sprite4 =  document.querySelector("#Sprite4")
let sprite5 =  document.querySelector("#Sprite5")

let scoreText = document.querySelector('#score')
let gameOver = document.querySelector('#GameOver')
let gamePieces = document.querySelectorAll('.GamePieces')
let startGame = document.querySelector('#Start')
let lifeText = document.querySelector('#lives')


/* Functions and Game Logic */
function start() {
    if(myScore === 5) {
        window.alert('You Win!');
    }

    const sprite1 = document.createElement('div')
    sprite1.id = "sprite1"
    sprite1.classList.add('GamePieces')
    const image1 = document.createElement('img')
    image1.src = './images/giphy.gif'
    sprite1.append(image1)
    document.querySelector('body').append(sprite1)
    sprite1.addEventListener('mouseenter', handleSlice)
    sprite1Time = setTimeout(function(){
        myLives -= 1;
        setLives();
    }, 10000);

    
    const sprite2 = document.createElement('div')
    sprite2.id = "Sprite2"
    sprite2.classList.add('GamePieces')
    const image2 = document.createElement('img')
    image2.src = './images/Mew.gif'
    sprite2.append(image2)
    document.querySelector('body').append(sprite2)
    sprite2.addEventListener('mouseenter', handleSlice)
    sprite2Time = setTimeout(function(){
        myLives -= 1;
        setLives();
    }, 10000);
    
    const sprite3 = document.createElement('div')
    sprite3.id = "Sprite3"
    sprite3.classList.add('GamePieces')
    const image3 = document.createElement('img')
    image3.src = './images/Jelly.gif'
    sprite3.append(image3)
    document.querySelector('body').append(sprite3)
    sprite3.addEventListener('mouseenter', handleSlice)
    sprite3Time = setTimeout(function(){
        myLives -= 1;
        setLives();
    }, 10000);
    
    const sprite4 = document.createElement('div')
    sprite4.id = "Sprite4"
    sprite4.classList.add('GamePieces')
    const image4 = document.createElement('img')
    image4.src = './images/pngwing.com.png'
    sprite4.append(image4)
    document.querySelector('body').append(sprite4)
    sprite4.addEventListener('mouseenter', handleSlice)
      sprite4Time = setTimeout(function(){
        myLives -= 1;
        setLives();
    }, 10000);
    
    const sprite5 = document.createElement('div')
    sprite5.id = "Sprite5"
    sprite5.classList.add('GamePieces')
    const image5 = document.createElement('img')
    image5.src = './images/Kalari.png'
    sprite5.append(image5)
    document.querySelector('body').append(sprite5)
    sprite5.addEventListener('mouseenter', handleSlice)
    sprite5Time = setTimeout(function(){
         if(myLives > 0) {
            myLives--
        }
        else {
            window.alert ('GameLose');
        }

        setLives();

    }, 10000);
    
    setLives()
}

function setLives() {
    lifeText.innerText = myLives
}
//

//

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
    showSprite.classList.toggle('');
}

// *When you slice 5 objects, game is won.
function checkWin() {
    if (myScore === 5) {
        window.alert('You Win!');
    }
}

function checkLose(myLives) {
    if (myLives === 0 ) {
        window.alert ('GameLose');

    }
}


// *Counter will indicate point system.
// *When I move my cursor through an object, the object should slice in half, gaining me a single point.
function handleSlice(event) {
    myScore++;
    scoreText.innerText = myScore;

    event.target.classList.add('disappear');
    clearTimeout(sprite1Time);
    clearTimeout(sprite2Time);
    clearTimeout(sprite3Time)
    clearTimeout(sprite4Time)
    clearTimeout(sprite5Time)
}

// *When I slice the object, a new object will appear for me to slice.
// *When you miss three objects the game will end.
// *When you miss an object a couter will indicate that you missed.

/* Event Listeners */

// startGame.addEventListener('click', reset)
// sprite1.addEventListener('mouseenter', handleSlice)
// sprite2.addEventListener('mouseenter', handleSlice)
// sprite3.addEventListener('mouseenter', handleSlice)
// sprite4.addEventListener('mouseenter', handleSlice)
// sprite5.addEventListener('mouseenter', handleSlice)
startGame.addEventListener('click', start)

for(gamePiece of gamePieces) {
    if (!gamePiece.classList.contains('disappear')) {
        gameOver.getElementsByClassName.display = 'block'
    }
}


//gamestate





