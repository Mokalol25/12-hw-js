let clickCounter = 0
document.addEventListener("click", () => {
    clickCounter ++;    
    const clickCountEl = document.getElementById('clickCount')
    clickCountEl.textCounter = clickCounter
})