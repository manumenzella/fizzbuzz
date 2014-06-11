// SET VALUE IN STORAGE
// Separate function to promote modularity 
function setValue(key, value) {
    if (localStorage) { // in case browser doesn't support localStorage
        localStorage.setItem(key, value);
    }
}

// GET VALUE FROM STORAGE
// Function should return null if storage is not supported,
// or if the value for the particular key cannot be found.
function getValue(key) {
    if (localStorage) { // in case browser doesn't support localStorage
        return localStorage.getItem(key) // returns value; returns null if not found
    } else {
        return null;
    }
}

// Function returns corresponding string if parameters are all !== null.
// If one or more are null, it tries to retrieve them from storage.
// If at least one parameter is still null, function returns null.
// Function also saves (and overwrites) all entered parameters.
function fizzbuzz(lowerBound, upperBound, divA, divB, strA, strB) {
    if (lowerBound === null) lowerBound = getValue("lowerBound"); else setValue("lowerBound", lowerBound);
    if (upperBound === null) upperBound = getValue("upperBound"); else setValue("upperBound", upperBound);
    if (divA === null)             divA = getValue("divA");       else setValue("divA", divA);
    if (divB === null)             divB = getValue("divB");       else setValue("divB", divB);
    if (strA === null)             strA = getValue("strA");       else setValue("strA", strA);
    if (strB === null)             strB = getValue("strB");       else setValue("strB", strB);
    
    if (lowerBound === null) return null;
    if (upperBound === null) return null;
    if (divA       === null) return null;
    if (divB       === null) return null;
    if (strA       === null) return null;
    if (strB       === null) return null;
    
    var i, str = "";
    for (i=lowerBound; i<=upperBound; i++) {
        a = (i % divA == 0);
        b = (i % divB == 0);
        if (a)       str += strA;
        if (b)       str += strB;
        if (!(a||b)) str += i;
        str += "\n";
    }
    return str;
}

alert( fizzbuzz(1, 20, 2, 4, "Taylor", "Swift") );       // Call with all parameters to persist them.
alert( fizzbuzz(null, null, null, null, "Foo", "Bar") ); // Change some parameters, retrieve others from storage.

// WHOO HOO!
