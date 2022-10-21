document.body.addEventListener('keyup', function(event) {
    console.log(event.code)
    playSound(event.code.toLocaleLowerCase())
})

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    if (audioElement) {
        audioElement.play()
    }
}