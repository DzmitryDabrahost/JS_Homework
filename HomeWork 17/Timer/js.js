var buttonStart = document.getElementById('btn');
var mill = document.querySelector('.milliseconds');
var sec = document.querySelector('.seconds');
var mins = document.querySelector('.minutes');
var wrapper = document.querySelector('.wrapper');
var buttonReset = document.createElement('div');
var buttonSave = document.createElement('div');
var saveList = document.createElement('ol');
mill.value = JSON.parse(localStorage.getItem('mill', mill.value)) || '00';
sec.value = JSON.parse(localStorage.getItem('sec', sec.value)) || '00';
mins.value = JSON.parse(localStorage.getItem('mins', mins.value)) || '01';
var obj = [];
var timerId = undefined;

wrapper.appendChild(buttonReset);
wrapper.appendChild(buttonSave);
wrapper.appendChild(saveList);

window.addEventListener('load', function () {
    if (localStorage.getItem('button') == 'Pause') {
        buttonStart.click();
    };

    if (+localStorage.getItem('clicked')) {
        buttonReset.innerHTML = '<button class="button-reset">Reset</button>';
        buttonSave.innerHTML = '<button class="button-save">Save</button>';
    };

    if (localStorage.getItem('button') == 'Run') {
        buttonStart.innerText = 'Run';
        buttonStart.dataset.text = 'Run';
    };

    for (var i = 0; i < JSON.parse(localStorage.getItem('li')).length; i++) {
        saveList.insertAdjacentHTML('beforeEnd', '<li>'+ JSON.parse(localStorage.getItem('li'))[i] + '</li>');
    };
});

window.onunload = function () {
    for (var i = 0; i < document.getElementsByTagName('li').length; i++) {
        obj.push(document.getElementsByTagName('li')[i].innerHTML);
    };
    localStorage.setItem('li', JSON.stringify(obj));
};

function timeStopResume(){
    this.timerId = setTimeout(function time() {

        if (mins.value === '00' && sec.value === '00' && mill.value === '00'){
            setTimeout(function() {
                clearInterval(this.timerId);
            }, 0);

            buttonSave.setAttribute('hidden', 'true');
            buttonStart.setAttribute('hidden', 'true');
            return;
        };
        localStorage.setItem('mill', JSON.stringify(mill.value));
        mill.value--;

        if(mill.value.length < 2){
            mill.value = '0' + mill.value;
        };

        if (mill.value < '00') {
            mill.value = '99';

            sec.value--;

            if (sec.value.length < 2) {
                sec.value = '0' + sec.value;
            };

            if (sec.value < '00'){
                sec.value = 59;
                mins.value--;

                if (mins.value.length < 2) {
                    mins.value = '0' + mins.value;
                };
            };
             localStorage.setItem('sec', JSON.stringify(sec.value));
             localStorage.setItem('mins', JSON.stringify(mins.value));
        };
        this.timerId = setTimeout(time, 10);
    }, 10);
};

buttonStart.addEventListener('click', function() {
    localStorage.setItem('clicked', 1);
    buttonReset.innerHTML = '<button class="button-reset">Reset</button>';
    buttonSave.innerHTML = '<button class="button-save">Save</button>';
    buttonSave.removeAttribute('hidden');
    buttonReset.removeAttribute('hidden');

    if(buttonStart.dataset.text == 'Start') {
        buttonStart.textContent = 'Pause';
        buttonStart.dataset.text = 'Pause';
        localStorage.setItem('button', 'Pause');
        timeStopResume();

    } else if (buttonStart.dataset.text == 'Pause') {
        buttonStart.textContent = 'Run';
        buttonStart.dataset.text = 'Run';
        localStorage.setItem('button', 'Run');

            setTimeout(function time() {
                clearInterval(this.timerId);
            }, 0);

    } else if (buttonStart.dataset.text == 'Run') {
        buttonStart.textContent = 'Pause';
        buttonStart.dataset.text = 'Pause';
        localStorage.setItem('button', 'Pause');
        timeStopResume();
    };
});

buttonSave.addEventListener('click', function () {
    saveList.insertAdjacentHTML('beforeEnd', '<li>'+ mins.value + ' : ' + sec.value + ' : ' + mill.value + '</li>');
})

buttonReset.addEventListener('click', function () {

    if (timerId != undefined) {
        clearInterval(timerId);
    };

    buttonStart.innerText = 'Start';
    buttonStart.dataset.text = 'Start';
    localStorage.setItem('button', 'Start');
    buttonStart.removeAttribute('hidden');
    buttonSave.setAttribute('hidden', 'true');
    buttonReset.setAttribute('hidden', 'true');
    mill.value = '00';
    sec.value = '00';
    mins.value = '01';
    saveList.innerHTML = '';
    localStorage.clear();
});
