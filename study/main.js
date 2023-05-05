


let myStorage = localStorage



// CALC


// Display content

let displayContent = document.querySelector('.calc-display-content')
let A
let B
let SIGN
let a = []
let b = []
let sign = ['+', '-', '*', '/']
let result = 0
let info = document.querySelector('.calc-info')
info.textContent = 'No actions'


// Buttons

let buttonOnOff = document.querySelector('.button-on-off')
let buttonOnOffObj = { 'power': 'false', }
let buttonRoot = document.querySelector('.button-root')
let buttonDiv = document.querySelector('.button-div')
let buttonMult = document.querySelector('.button-mult')
let buttonMin = document.querySelector('.button-min')
let buttonComma = document.querySelector('.button-comma')
let buttonExp = document.querySelector('.button-exp')
let buttonIs = document.querySelector('.button-is')
let buttonPlus = document.querySelector('.button-plus')
let button1 = document.querySelector('.button-1')
let button2 = document.querySelector('.button-2')
let button3 = document.querySelector('.button-3')
let button4 = document.querySelector('.button-4')
let button5 = document.querySelector('.button-5')
let button6 = document.querySelector('.button-6')
let button7 = document.querySelector('.button-7')
let button8 = document.querySelector('.button-8')
let button9 = document.querySelector('.button-9')
let button0 = document.querySelector('.button-0')

// buttons options
// button2.innerHTML = "<p class = 'p-btn-2'>2</p>";


// Sounds

let audioSound = new Audio('./audio/button-2.mp3')
let audioSoundclone = new Audio('./audio/button-2.mp3')
let audioSoundOn = new Audio('./audio/on.mp3')
let audioSoundOff = new Audio('./audio/off_1.mp3')
const newPlayer = new Audio('./audio/button.mp3')

// sounds options
audioSound.volume = 0.3
audioSoundOff.volume = 0.3


// Function

// Update block info
function updateInfo(update) {
    info.textContent = update
}
function resultOnDisplay(value) {
    info.textContent = value
}

// Assigning values for A, B, SIGN and a, b, sign
function calcShowAndImportValues(value) {
    while (buttonOnOffObj.power == 'true') {

        // Add A
        if (a.length <= 11 && typeof B === 'undefined' && SIGN === undefined && sign.includes(value) === false) {
            a.push(value)
            displayContent.textContent = +a.join('')
            A = +a.join('')
            break
        }

        // Add SIGN
        else if (sign.includes(value) && typeof A === 'number' && typeof B === 'undefined') {
            displayContent.textContent = value
            SIGN = value
            a = []
            b = []
            break
        }

        // ADD B
        else if (b.length <= 11 && typeof SIGN !== 'undefined' && typeof A === 'number' && sign.includes(value) === false) {
            b.push(value)
            displayContent.textContent = +b.join('')
            B = +b.join('')
            break
        }
        break
    }

}

// Key function – calc
function calc(A, B, SIGN) {

    // Parameters check
    if (SIGN === undefined && A === undefined && B === undefined || typeof A !== 'number' || typeof B !== 'number') {
        A = undefined
        B = undefined
        SIGN = undefined
        info.textContent = 'Error.calc'
    }

    // Operations
    switch (SIGN) {
        case '+':
            if (result !== 0) {
                A = result
                result = A + B
                displayContent.textContent = result
            }
            else {
                result = A + B
                displayContent.textContent = result
            }
            break
    }
}

// Functions ON/OFF button 
function onClickButton() {
    setTimeout(function () {
        buttonOnOff.classList.add('btn-on-off-onclick')
    }, 0)
    setTimeout(function () {
        buttonOnOff.classList.remove('btn-on-off-onclick')
        buttonOnOff.classList.add('button-on-off')
    }, 100)
}
function offCalc() {
    a = []
    A = undefined
    b = []
    B = undefined
    sign = ['+', '-', '*', '/']
    SIGN = undefined
    result = 0
    info.textContent = 'No actions'

    finish = false
    displayContent.textContent = ''
}
function onCalc() {
    finish = false
    displayContent.textContent = 0
}
buttonOnOff.addEventListener('click', () => {
    if (buttonOnOffObj.power == 'false' && audioSoundOff.ended || audioSoundOn.currentTime == 0) {
        buttonOnOffObj.power = String('true')
        audioSound.currentTime = 0
        audioSound.play()
        audioSoundOn.play()
        onCalc()
        onClickButton()
        valueOnDisplay = []
    }
    else if (buttonOnOffObj.power == 'true' && audioSoundOn.ended) {
        buttonOnOffObj.power = String('false')
        audioSound.currentTime = 0
        audioSound.play()
        audioSoundOff.play()
        offCalc()
        onClickButton()
        valueOnDisplay = []
        secondValueOnDisplay = []
        thirdValueOnDisplay = []
    }
    else {
        audioSound.currentTime = 0
        audioSound.play()
        onClickButton()
    }
})


// Functions of other buttons

// '√'
buttonRoot.addEventListener('click', () => {
    audioSound.currentTime = 0
    audioSound.play()
    setTimeout(function () {
        buttonRoot.classList.add('btn-root-onclick')
    }, 0)
    setTimeout(function () {
        buttonRoot.classList.remove('btn-root-onclick')
        buttonRoot.classList.add('button-root')
    }, 100)

    vidd.play();
    vidd.volume = 1


})

// '/' 
buttonDiv.addEventListener('click', () => {
    audioSound.currentTime = 0
    audioSound.play()
    setTimeout(function () {
        buttonDiv.classList.add('btn-div-onclick')
    }, 0)
    setTimeout(function () {
        buttonDiv.classList.remove('btn-div-onclick')
        buttonDiv.classList.add('button-div')
    }, 100)
})

// '*' 
buttonMult.addEventListener('click', () => {
    audioSound.currentTime = 0
    audioSound.play()
    setTimeout(function () {
        buttonMult.classList.add('btn-mult-onclick')
    }, 0)
    setTimeout(function () {
        buttonMult.classList.remove('btn-mult-onclick')
        buttonMult.classList.add('button-mult')
    }, 100)
})

// '-'
buttonMin.addEventListener('click', () => {
    audioSound.currentTime = 0
    audioSound.play()
    setTimeout(function () {
        buttonMin.classList.add('btn-min-onclick')
    }, 0)
    setTimeout(function () {
        buttonMin.classList.remove('btn-min-onclick')
        buttonMin.classList.add('button-min')
    }, 100)
})

// ','
buttonComma.addEventListener('click', () => {
    audioSound.currentTime = 0
    audioSound.play()
    setTimeout(function () {
        buttonComma.classList.add('btn-comma-onclick')
    }, 0)
    setTimeout(function () {
        buttonComma.classList.remove('btn-comma-onclick')
        buttonComma.classList.add('button-comma')
    }, 100)
})

// 'exp'
buttonExp.addEventListener('click', () => {
    audioSound.currentTime = 0
    audioSound.play()
    setTimeout(function () {
        buttonExp.classList.add('btn-exp-onclick')
    }, 0)
    setTimeout(function () {
        buttonExp.classList.remove('btn-exp-onclick')
        buttonExp.classList.add('button-exp')
    }, 100)
})

// '='
buttonIs.addEventListener('click', () => {
    audioSound.currentTime = 0
    audioSound.play()
    setTimeout(function () {
        buttonIs.classList.add('btn-is-onclick')
    }, 0)
    setTimeout(function () {
        buttonIs.classList.remove('btn-is-onclick')
        buttonIs.classList.add('button-is')
    }, 100)
    calc(A, B, SIGN)
})

// '+'
buttonPlus.addEventListener('click', () => {
    audioSound.currentTime = 0
    audioSound.play()
    setTimeout(function () {
        buttonPlus.classList.add('btn-plus-onclick')
    }, 0)
    setTimeout(function () {
        buttonPlus.classList.remove('btn-plus-onclick')
        buttonPlus.classList.add('button-plus')
    }, 100)
    // valueOnDisplayAdd(' + ')
    calcShowAndImportValues('+')
})

button1.addEventListener('click', () => {
    audioSound.currentTime = 0
    audioSound.play()
    setTimeout(function () {
        button1.classList.add('btn-1-onclick')
    }, 0)
    setTimeout(function () {
        button1.classList.remove('btn-1-onclick')
        button1.classList.add('button-1')
    }, 100)
    // valueOnDisplayAdd(1)
    calcShowAndImportValues(1)
})

button2.addEventListener('click', () => {
    // console.log('click')
    audioSound.currentTime = 0
    audioSound.play()
    setTimeout(function () {
        button2.classList.add('btn-2-onclick')
    }, 0)
    setTimeout(function () {
        button2.classList.remove('btn-2-onclick')
        button2.classList.add('button-2')
    }, 100)
    // valueOnDisplay.push(2);
    // displayContent.textContent = (valueOnDisplay.join(''))
    // valueOnDisplayAdd(2)
})

button3.addEventListener('click', () => {
    audioSound.currentTime = 0
    audioSound.play()
    setTimeout(function () {
        button3.classList.add('btn-3-onclick')
    }, 0)
    setTimeout(function () {
        button3.classList.remove('btn-3-onclick')
        button3.classList.add('button-3')
    }, 100)
})

button4.addEventListener('click', () => {
    audioSound.currentTime = 0
    audioSound.play()
    setTimeout(function () {
        button4.classList.add('btn-4-onclick')
    }, 0)
    setTimeout(function () {
        button4.classList.remove('btn-4-onclick')
        button4.classList.add('button-4')
    }, 100)
})

button5.addEventListener('click', () => {
    audioSound.currentTime = 0
    audioSound.play()
    setTimeout(function () {
        button5.classList.add('btn-5-onclick')
    }, 0)
    setTimeout(function () {
        button5.classList.remove('btn-5-onclick')
        button5.classList.add('button-5')
    }, 100)
})

button6.addEventListener('click', () => {
    audioSound.currentTime = 0
    audioSound.play()
    setTimeout(function () {
        button6.classList.add('btn-6-onclick')
    }, 0)
    setTimeout(function () {
        button6.classList.remove('btn-6-onclick')
        button6.classList.add('button-6')
    }, 100)
})

button7.addEventListener('click', () => {
    audioSound.currentTime = 0
    audioSound.play()
    setTimeout(function () {
        button7.classList.add('btn-7-onclick')
    }, 0)
    setTimeout(function () {
        button7.classList.remove('btn-7-onclick')
        button7.classList.add('button-7')
    }, 100)
})

button8.addEventListener('click', () => {
    audioSound.currentTime = 0
    audioSound.play()
    setTimeout(function () {
        button8.classList.add('btn-8-onclick')
    }, 0)
    setTimeout(function () {
        button8.classList.remove('btn-8-onclick')
        button8.classList.add('button-8')
    }, 100)
})

button9.addEventListener('click', () => {
    audioSound.currentTime = 0
    audioSound.play()
    setTimeout(function () {
        button9.classList.add('btn-9-onclick')
    }, 0)
    setTimeout(function () {
        button9.classList.remove('btn-9-onclick')
        button9.classList.add('button-9')
    }, 100)
})

button0.addEventListener('click', () => {
    audioSound.currentTime = 0
    audioSound.play()
    setTimeout(function () {
        button0.classList.add('btn-0-onclick')
    }, 0)
    setTimeout(function () {
        button0.classList.remove('btn-0-onclick')
        button0.classList.add('button-0')
    }, 100)
})

  





function showVerticalMessage (str) {
    let verticalWord = ''
    for (let i = 0; i <= str.length; i++){
        verticalWord += str.slice(i, i + 1) + '\n'
    }
    alert(verticalWord)
}




