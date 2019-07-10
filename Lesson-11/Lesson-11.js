// Первая задача

function filterArr(arr) {
    var newArr = arr.filter(function(number) {
        return number > 0;
    });

    return newArr;
}

filterArr([-1, 0, 2, 34, -2]);

// Вторая задача

function positiveNumber(arr) {
    return arr.find(function (firstPositiveNumber) {
        return firstPositiveNumber > 0;
    });
}
positiveNumber([-5, 3, 12, 0, 3]);

// Третья задача

function palindrome(str) {
    return str.toLowerCase() == str.split('').reverse().join('').toLowerCase(); // нагуглил такую строчку
}

palindrome('шалаШ');
palindrome('привет');

// Четвёртая задача

function areAnagrams(stringFirst, stringSecond) {
        return compareString(stringFirst) == compareString(stringSecond);
    }

    function compareString(str) {
        return str.replace().toLowerCase().split('').sort().join()
    }
areAnagrams('кот', 'отк');
areAnagrams('кот', 'атк');
areAnagrams('кот', 'отко');

// Пятая задача

// не понял как делать(((( решение есть, но я его совсем не понимаю....
// надо уделять больше внимания учёбе