const generateBtn = document.querySelector(".generate")
const mainBoxElement = document.querySelector(".main-box")
const questionElement = document.querySelector(".question")
const answerElement = document.querySelector(".answer")
const emojiElement = document.querySelector(".emoji")
const emojis = ["😆", "😂", "🤣", "🙈", "🙉", "🙊", "😝", "🤯", "😄", "😹", "😸", "🙀"]
let randomJokeUrl = 'https://v2.jokeapi.dev/joke/Programming?type=twopart'

window.onload = regenerate

generateBtn.onclick = regenerate

async function regenerate(){
    const randomEmoji = emojis[Math.floor((emojis.length-1)*Math.random())]
    const text = await fetch(randomJokeUrl)
    const {
        error,
        setup,
        delivery
    } = await text.json()
    if (error) return alert("Ocurrió un error inesperado")
    questionElement.innerHTML = `${setup}`
    answerElement.innerHTML =`${delivery}`
    emojiElement.innerHTML = randomEmoji
}

window.onload = regenerate