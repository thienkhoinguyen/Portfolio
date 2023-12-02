//Footer Current Year//
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;

// Alert //

const btnAlert = document.getElementById('btn-alert');

btnAlert.addEventListener('click', function() {
    alert('Welcome to this page');
});

// Hover //

const btnHover= document.getElementById('btn-alert');

const handleMouseOver = () => {
    btnHover.innerText = 'Hello';
};

const handleMouseLeave = () => {
    btnHover.innerText = 'Click me';
};

btnHover.addEventListener('mouseover', handleMouseOver);
btnHover.addEventListener('mouseleave', handleMouseLeave);


// Number Count //
let count = 1;
const txtCounter = document.getElementById('txt-counter');

document.getElementById('btn-counter').onclick = () => {
    count = count + 1;

    if (count % 2 === 0) {
        txtCounter.innerHTML = `Number: ${count}`;
        txtCounter.style.color = `gold`;
        txtCounter.classList.remove('odd');
        txtCounter.classList.add('even');
    } else {
        txtCounter.innerHTML = `Number: ${count}`;
        txtCounter.style.color = `white`;
        txtCounter.classList.remove('even');
        txtCounter.classList.add('odd');
    }
};