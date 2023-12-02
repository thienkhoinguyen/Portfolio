//Footer Current Year//
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;

// Alert //

const btnAlert = document.getElementById('btn-alert');

btnAlert.addEventListener('click', function() {
    alert('Welcome to this page');
});

