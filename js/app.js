// Implementar solución aquí
let btn = document.getElementById('btn');
let color = document.querySelector('body');

let randomHex = () => {
    let hexValues = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' ];
    let randomIndex = Math.floor(Math.random() * hexValues.length);
    return hexValues[ randomIndex ];
};

btn.addEventListener('click', () => {
    let colorHex = '#' + randomHex() + randomHex() + randomHex() + randomHex() + randomHex() + randomHex();
    color.style.backgroundColor = colorHex;
});
