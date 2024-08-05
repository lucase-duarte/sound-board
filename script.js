const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
const buttons = document.querySelector('.buttons')

sounds.forEach(sound => {
    const btn = document.createElement('button')

    btn.innerText = sound
    btn.classList.add('btn')
    btn.addEventListener('click', () => {
        pauseAudio()
        document.getElementById(sound).play()
    })
    buttons.appendChild(btn)

})

function pauseAudio() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound)
        audio.pause()
        audio.currentTime = 0
    })
}