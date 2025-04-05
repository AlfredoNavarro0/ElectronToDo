console.log('Renderer process loaded');

const button = document.getElementById('cambioTexto');
const text = document.getElementById('textoCambiado');

button.addEventListener('click', () => {
    text.innerText = 'Texto cambiado desde el proceso de renderizado!';
    console.log('Texto cambiado desde el proceso de renderizado!');
})