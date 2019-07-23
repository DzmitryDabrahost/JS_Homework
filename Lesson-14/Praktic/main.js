var block = document.getElementById('block');

var newParagraph = document.createElement ('p');
var newParagraph1 = document.createElement ('p');

block.appendChild(newParagraph);
block.appendChild(newParagraph1);


newParagraph.innerHTML = 'Вот <a href="#">это</a> тискать не надо, а <a href="https://www.google.com" target="_blank"> это</a> надо, чтобы перейти на гугл';
newParagraph1.innerHTML = 'Вот <a href="https://www.google.com" target="_blank">это</a> тискать надо, а <a href="#">это</a> не надо, чтобы перейти на гугл';

var button = document.getElementsByTagName('button')[0];

button.onclick = function() {
    for (var i = 0; i < newParagraph.children.length; i++) {
        newParagraph.children[i].classList.toggle('color_link');
    };
};

newParagraph1.addEventListener("click", function (event) {
    event.preventDefault();

    if (event.target.tagName == 'A' && event.target.parentElement == newParagraph1) {
        alert (event.target.getAttribute('href'));
    };
});
