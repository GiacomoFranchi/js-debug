const input = document.querySelector('input');
const array = [];//1 c'era null e non []

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter')    return;
    if (input.value.length == 0) return; //2 c'era stinga vuota al posto di 0

    array.push(input.value);//3c'era add

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = input.value; //mancava .innerHTML
    document.querySelector('ul').append(li);//4c'era push non append

    let counter = 0; //5deve essere numero non stringa
    let item    = array[0];
    let max   = 1;//9 era const
    const elems = [];

    for (let i = 0; i < array.length; i++) {//6 mancava .length
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        for (let j = i; j < array.length; j++) { //7 c'era i++ al posto di j++
            if (array[i] == array[j]) {
                counter++;
                if (max < counter){ //8 mancano le graffe
                max  = counter;
                item = array[i];
                }
            }
        }

        counter = 0;
    }

    const alert = document.querySelector('.alert');//non c'era querrySelector

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log(`${item} trovato ${max} volte`);//12 `` non ''
});