document.addEventListener('DOMContentLoaded', function() {

    //Footer Current Year//
    var currentYear = new Date().getFullYear();
    document.getElementById("currentYear").innerHTML = currentYear;
  
    // Alert //
  
    const btnAlert = document.getElementById('btn-alert');
  
    btnAlert.addEventListener('click', function() {
        alert('You caught a fish!');
    });
  
    // Hover //
  
    const btnHover = document.getElementById('btn-alert');
  
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
  
    /* Loops */
  
    const numbersList = document.getElementById('numbers');
  
    for (let i = 1; i <= 100; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = i % 2 === 0 ? `even` : `odd`;
        numbersList.appendChild(listItem);

        console.log('List Item', i, ':', listItem.textContent);
    }
  
  });
  