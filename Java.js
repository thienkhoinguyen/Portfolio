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