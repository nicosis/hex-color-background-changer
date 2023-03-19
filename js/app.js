// Implementar solución aquí
let btn = document.getElementById('btn');
let value = document.getElementById('hex-value')
let color = document.querySelector('body');

let randomHex = () => {
    let hexValues = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' ];
    let randomIndex = Math.floor(Math.random() * hexValues.length);
    return hexValues[ randomIndex ];
};

let hex = () => {
    let colorHex = ' #';
    for (let i = 0; i < 6; i++) {
        colorHex += randomHex()
    };

    color.style.backgroundColor = colorHex;
    value.innerHTML = colorHex;
};

btn.addEventListener('click', hex);
