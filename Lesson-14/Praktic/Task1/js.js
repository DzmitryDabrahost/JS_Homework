var form = document.getElementById('frm');
var inputX = document.getElementById('inp1');
var inputY = document.getElementById('inp2');
var button = document.getElementById('btn');

frm.addEventListener('keyup', function () {

    (inputX.value != '' && inputY.value != '') ? button.removeAttribute('disabled') :
        button.setAttribute('disabled', null);
});

button.addEventListener('click',  function(e) {
    e.preventDefault();

    if (isNaN(inputX.value) || isNaN(inputY.value) || inputX.value < 1 || inputX.value > 10 || inputY.value < 1 || inputY.value > 10)
    return alert('Введены неверные значения, попробуйте заново');

    function drawChess() {
        var chessBoard = document.querySelector('.chessboard');
        var block = document.createElement('table');

        for (i = 0; i < inputX.value; i++) {
            var tr = document.createElement('tr');

            for (j = 0; j < inputY.value; j++) {
                var td = document.createElement('td');

                (i % 2 == j % 2) ? td.classList.add('black') : td.classList.add('white');

                tr.appendChild(td);
            }

            block.appendChild(tr);
        }
        chessBoard.innerHTML = ('<DIV>');
        chessBoard.appendChild(block);

        document.body.getElementsByClassName('chessboard')[0].onclick = function() {
        var tds = block.getElementsByTagName('TD')

        for (var i = 0; i < tds.length; i++) {
        tds[i].classList.toggle('black');
        }
    }

    }
    drawChess();
});




