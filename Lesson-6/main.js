// Практическое задание 2:

function Cat(name) {
    var foodAmount = 50;

    this.name = name;

    this.feed = function () {
        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма');
    };

    var formatFoodAmount = function () {
        return foodAmount + ' гр.';
    }
}

var Barsik = new Cat('Барсик');

Barsik.feed();


// Практическое задание 3:

function Cat(name) {
    var foodAmount = 50;

    this.name = name;

    this.feed = function () {
        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма');
    };

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    };

    this.dailyNorm = function (amount) {
        if (amount < 50 || amount > 500) {
            console.log('ОШИБКА!!!!!');
            return;
        } else if (amount == undefined) {
            return formatFoodAmount();
        }

        foodAmount = amount;

    }
}

var Barsik = new Cat('Барсик');

Barsik.dailyNorm();
