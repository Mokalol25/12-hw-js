const button = document.getElementById('buttonHelloWorld');
const showText = () => {alert("Hello world")}
button.addEventListener('click', (event) => showText()) 