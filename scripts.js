let inputBox = document.getElementById('inputBox')
let btnChoices = document.querySelectorAll('button');
let btns;

btnChoices.forEach(allBtns => allBtns.addEventListener('click', function(e){
    btns = e.target.id;
    inputBox.innerHTML = btns
}))