

let fruitInput = document.getElementById('fruitInput');
let fruitBtn = document.getElementById('fruitBtn');
let pNotify = document.getElementById('pNotify');
let imgView = document.getElementById('imgView');
let fruitDB = ['orange', 'avocado', 'strawberry'];

fruitBtn.addEventListener('click', doSomeThing);
function doSomeThing(e) {
    e.preventDefault();
    // console.log('do some thing')

    let fruit = fruitInput.value;
    if (fruit == '') {
        fruitInput.focus();
        fruitInput.style.border = '2px solid red';
        fruitInput.placeholder = 'Please Enter Again';
    }
    else {
        fruitInput.style.border = '';
        fruitInput.placeholder = '';
        if (fruitDB.includes(fruit)) {
            pNotify.textContent = `${fruit} were found`;
            pNotify.style.color = 'green';
            imgView.src = `assets/images/${fruit}.jpg`;
        } else {
            pNotify.textContent = `${fruit} not found`;
            pNotify.style.color = 'red';
            imgView.src = 'assets/images/${fruit}.jpg';
        }
    }
}
