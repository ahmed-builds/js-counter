let num = document.getElementById('counter');
let counterValue = num.textContent;
let oddEven = document.getElementById("oddEven");
let decrementBtn = document.getElementById('decrementBtn');
let incrementBtn = document.getElementById('incrementBtn');
let resetBtn = document.getElementById('resetBtn');


resetBtn.classList.add('disabled');
decrementBtn.classList.add('disabled');

let c = 0;

if(counterValue % 2 == 0){
    oddEven.textContent = 'Even';
    oddEven.classList.add('even');
    oddEven.classList.remove('odd');
    num.classList.add('even');
    num.classList.remove('odd');
} else {
    oddEven.textContent = 'Odd';
    oddEven.classList.add('odd');
    oddEven.classList.remove('even');
    num.classList.add('odd');
    num.classList.remove('even');
}

function increment(){
    c++;
    num.textContent = c;
    resetBtn.classList.remove('disabled');
    decrementBtn.classList.remove('disabled');
    if(c % 2 == 0){
        oddEven.textContent = 'Even';
        oddEven.classList.add('even');
        oddEven.classList.remove('odd');
        num.classList.add('even');
        num.classList.remove('odd');
    } else {
        oddEven.textContent = 'Odd';
        oddEven.classList.add('odd');
        oddEven.classList.remove('even');
        num.classList.add('odd');
        num.classList.remove('even');
    }
}
function decrement(){
    if(c > 0){
        c--;
        num.textContent = c;
        if(c % 2 == 0){
            if(c == 0){                
                resetBtn.classList.add('disabled');
                decrementBtn.classList.add('disabled');
            }
            oddEven.textContent = 'Even';
            oddEven.classList.add('even');
            oddEven.classList.remove('odd');
            num.classList.add('even');
            num.classList.remove('odd');
        } else {
            oddEven.textContent = 'Odd';
            oddEven.classList.add('odd');
            oddEven.classList.remove('even');
            num.classList.add('odd');
            num.classList.remove('even');
        }
    } else {        
        resetBtn.classList.add('disabled');
        decrementBtn.classList.add('disabled');
    }
}
function reset(){
    c = 0;
    num.textContent = c;
    oddEven.textContent = 'Even';
    oddEven.classList.add('even');
    oddEven.classList.remove('odd');
    num.classList.add('even');
    num.classList.remove('odd');
    resetBtn.classList.add('disabled');
    decrementBtn.classList.add('disabled');
}