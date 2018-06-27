function playSound(event){
    let audio = document.querySelector(`audio[data-key='${event.keyCode}']`)
    // console.log(audio)
    let key = document.querySelector(`.key[data-key='${event.keyCode}']`)
    if(!audio) return //stop the function from running
    audio.currentTime = 0 // rewind to the start
    audio.play()
    // console.log(key)
    // Tells DOM to add css class when key is playing
    key.classList.add('playing')
}

function removeTransition(event){
    if(event.propertyName !== 'transform') return // skip it if it's not a transform
    this.classList.remove('playing')
}

let keys = document.querySelectorAll('.key')
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)