document.body.addEventListener('keyup', function(event) {
    console.log(event.code)
    playSound(event.code.toLocaleLowerCase())
})

document.querySelector('.composer button').addEventListener('click', function(event) {
    let song = document.querySelector('#input').value;

    if (song !== '') {
        let songArray = song.split(''); // transforma em array 
        playComposition(songArray)
    }
})

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)
    console.log(keyElement)
    if (audioElement) {
        audioElement.currentTime = 0; // reset the current time
        audioElement.play() // play the sound
    }

    if (keyElement) {
        keyElement.classList.add('active')
        setTimeout(() => {
            keyElement.classList.remove('active')
        }, 300)
    }
}

function playComposition(songArray) {
    let wait = 0;
    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`)
        }, wait)

        wait += 250;
    }
}