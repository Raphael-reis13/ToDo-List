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

        let newSpan = document.createElement('span');
        let newButton = document.createElement('button');
        let doneButton = document.createElement('button');

        newSpan.innerHTML = value;
        newButton.innerHTML = 'Del';
        doneButton.innerHTML = 'Done';

        newDivEl.classList.add('items');
        newSpan.classList.add('spanItems');
        doneButton.classList.add('doneButton');
        newButton.classList.add('delButton');

        newButton.addEventListener('click', function () {
            newDivEl.remove();
        });

        newDivEl.appendChild(newSpan);
        newDivEl.appendChild(doneButton);
        newDivEl.appendChild(newButton);

        containerEl.appendChild(newDivEl);
    }

    display.value = '';
    display.focus();

});

document.addEventListener('keypress', function(event) {

    if(event.key === 'Enter') {
        btn.click();
    }
});