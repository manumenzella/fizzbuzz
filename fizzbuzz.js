function fizzbuzz(lowerBound, upperBound) {
    var str = "";
    var i, a, b;
    for (i=lowerBound; i<=upperBound; i++) {
        a = (i % 3 == 0);
        b = (i % 5 == 0);
        if (a)       str += "Fizz";
        if (b)       str += "Buzz";
        if (!(a||b)) str += i;
        str += "\n";
    }
    return str;
}

console.log( fizzbuzz(1, 100) );
//alert( fizzbuzz(1, 100) );