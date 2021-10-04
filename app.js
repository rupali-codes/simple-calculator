// const themeNumber = document.querySelector('span');
const button = document.querySelectorAll('button');
const calContainer = document.querySelector('.cal-container');

class Calculator {
    constructor(button) {
        this.button = button;
    }
    changeBackground(bodyColor, delButtonColor, resetButtonColor, equalsButtonColor, buttonContainerColor, screenColor, toggleBarColor, toggleColor, textColor, resetShadow, delShadow, equalShadow, delTextColor, equalTextColor) {
        const deleteButton = document.querySelector('#del');
        const resetButton = document.querySelector('#reset');
        const equalsButton = document.querySelector('#equals');
        const buttonContainer = document.querySelector('.button-container')
        const output = document.querySelector('.output');
        const toggleBar = document.querySelector('.bar')
        const toggle = document.querySelector('.circle')


        document.body.style.backgroundColor = bodyColor
        document.body.style.color = textColor
        deleteButton.style.backgroundColor = delButtonColor
        resetButton.style.backgroundColor = resetButtonColor
        equalsButton.style.backgroundColor = equalsButtonColor
        output.style.backgroundColor = screenColor
        buttonContainer.style.backgroundColor = buttonContainerColor

        toggleBar.style.backgroundColor = toggleBarColor
        toggle.style.backgroundColor = toggleColor
        resetButton.style.boxShadow = resetShadow
        deleteButton.style.boxShadow = delShadow
        equalsButton.style.boxShadow = equalShadow

        deleteButton.style.color = delTextColor
        resetButton.style.color = delTextColor
        equalsButton.style.color = equalTextColor

    }

    toggle(number) {

        if (number.id == 'one') {
            document.querySelector('.circle').style.left = '';
            for (let i = 0; i < this.button.length; i++) {
                this.button[i].style.backgroundColor = 'white';
                this.button[i].style.boxShadow = '0 4px rgb(177, 176, 176)'
                this.button[i].style.color = 'black';
            }
            this.changeBackground('hsl(222, 26%, 31%)', 'hsl(225, 21%, 49%)', 'hsl(225, 21%, 49%)', 'hsl(6, 63%, 50%)', 'hsl(223, 31%, 20%)', 'hsl(224, 36%, 15%)', 'hsl(223, 31%, 20%)', 'hsl(6, 63%, 50%)', 'white', '0 4px hsl(224, 28%, 35%)', '0 4px hsl(224, 28%, 35%)', ' 0 4px hsl(6, 70%, 34%)', 'white', 'white')
        }
        if (number.id == 'two') {
            document.querySelector('.circle').style.left = '50%';
            for (let i = 0; i < this.button.length; i++) {
                this.button[i].style.backgroundColor = 'hsl(45, 7%, 89%)';
                this.button[i].style.boxShadow = '0 4px hsl(35, 11%, 61%)'
                this.button[i].style.color = 'black';
            }

            this.changeBackground('hsl(0,0%,90%)', 'hsl(185, 42%, 37%)', 'hsl(185, 42%, 37%)', 'hsl(25, 98%, 40%)', 'hsl(0, 5%, 81%)', 'hsl(0, 0%, 93%)', 'hsl(0, 5%, 81%)', 'hsl(25, 98%, 40%)',
                'hsl(60, 10%, 19%)', 'hsl(185, 58%, 25%)', 'hsl(185, 58%, 25%)', 'hsl(25, 99%, 27%)', 'white', 'white')
        }
        if (number.id == 'three') {
            document.querySelector('.circle').style.left = '90%';

            for (let i = 0; i < this.button.length; i++) {
                this.button[i].style.backgroundColor = 'hsl(268, 47%, 21%)';
                this.button[i].style.boxShadow = '0 4px hsl(290, 70%, 36%)'
                this.button[i].style.color = 'hsl(52, 100%, 62%)';

            }
            this.changeBackground('hsl(268, 75%, 9%)', 'hsl(281, 89%, 26%)', 'hsl(281, 89%, 26%)', 'hsl(176, 100%, 44%)', 'hsl(268, 71%, 12%)', 'hsl(268, 71%, 12%)', 'hsl(268, 71%, 12%)', 'hsl(176, 100%, 44%)', 'hsl(52, 100%, 62%)', '0 4px lhsl(285, 91%, 52%)', '0 4px hsl(285, 91%, 52%)', '0 4px hsl(177, 92%, 70%)', 'white', 'black');

        }
    }
};

function eventListeners() {
    const calculator = new Calculator(button)
    calContainer.addEventListener('click', e => {
        calculator.toggle(e.target)


    })
}
eventListeners();

/*=====================================================================================*/
// adding functionallity

const output = document.querySelector('#isEqual');
const input = document.querySelectorAll('.get');

const del = document.querySelector('#del');
const reset = document.querySelector('#reset');
const equals = document.querySelector('#equals');

let eqs = '';

const compute = function(val){
    eqs += val;
}

equals.addEventListener('click', function(){
    if(eqs != ""){
        output.textContent = '';
        output.textContent = eval(eqs);
    }
})

reset.addEventListener('click', function(){
     output.textContent = '';
     eqs = '';
})

del.addEventListener('click', function(){
    eqs = eqs.substring(0, eqs.length-1);
    output.textContent = eqs;
})

input.forEach(function(btn){
    btn.addEventListener('click', function(){
        if(btn.textContent != "del" && btn.textContent != '=' && btn.textContent != "reset"){
            output.textContent += btn.textContent;
            compute(btn.textContent);
         }
    })
})

