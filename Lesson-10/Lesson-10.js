function Animal(name) {
    this._name = name;
    this._foodAmount = 50;
}
Animal.prototype._formatFoodAmount = function(){
    return this._foodAmount + ' гр.';
};

Animal.prototype.dailyNorm = function(amount) {
    this._amount = amount;

    if (!arguments.length) return this._formatFoodAmount();

    if (this._amount < 50 || this._amount > 500) {
        return 'Недопустимое количество корма.';
    }

    this._foodAmount = this._amount;
};

Animal.prototype.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};

function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function(){
    Animal.prototype.feed.apply(this, arguments);
    console.log('Кот доволен ^_^');
    return this;
};

Cat.prototype.stroke = function() {
    console.log('Гладим кота.');
    return this;
};


var barsik = new Cat('Барсик');

barsik;
barsik.dailyNorm(40);
barsik.dailyNorm(400);
barsik.feed();
barsik.stroke();