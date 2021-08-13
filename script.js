const generateInputBtn = document.getElementById('btn');
const generateInput = document.getElementById('generate-input');

generateInputBtn.addEventListener('click', function() {
    const randomNumber = Math.round(1000 + Math.random() * 9000);
    generateInput.value = randomNumber;
})

const typeNumberInput = document.getElementById('display');
const typeNumberBtn = document.querySelectorAll('button');

typeNumberBtn.forEach(function(button) {
    button.addEventListener('click', function(event) {
        const clickedButtonValue = event.target.value;

        if ( clickedButtonValue == 'C') {
            display.value = '';
        } else if (clickedButtonValue == '>') {
            // display.value = clickedButtonValue.value - 1;
            display.value = display.value.slice(0, display.value.length -1)
        }
        else {
            display.value += clickedButtonValue;
        }
})})

const submitBtn = document.getElementById("submitBtn");
        submitBtn.addEventListener('click', function() {
            if (generateInput.value == typeNumberInput.value) {
                const blockDisplay = document.querySelector(".matched");
                blockDisplay.style.display = 'block';
                typeNumberInput.value = '';
            }
            else {
                const blockDisplay = document.querySelector(".not-matched");
                blockDisplay.style.display = 'block';
                typeNumberInput.value = '';
            }
            
        })
