const btn = document.querySelector('#insertButtom');

btn.addEventListener('click', function(event) {
    event.preventDefault();

    const display = document.querySelector('#display');

    const value = display.value;

    console.log(value);

    
    if (value.trim() === "") {
        return;
    } else {
        let containerEl = document.querySelector('.itemsIndiv');
        let newDivEl = document.createElement('div');
        newDivEl.classList.add('items');
        newDivEl.innerHTML = value;
        containerEl.appendChild(newDivEl);
    }

    display.value = '';
    display.focus();

});


let containerEl = document.querySelector('.itemsIndiv');
let newDivEl = document.createElement('div');

let newSpan = document.createElement('span');
let newButton = document.createElement('button');

newSpan.innerHTML = value;
newButton.innerHTML = 'Del';

newDivEl.classList.add('items');
newSpan.classList.add('spanItems');
newButton.classList.add('delButton');

newDivEl.appendChild(newSpan);
newDivEl.appendChild(newButton);

containerEl.appendChild(newDivEl);



// <div class="items"> </div>


