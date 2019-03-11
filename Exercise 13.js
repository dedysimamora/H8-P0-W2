function xo(str) {
  
    var a;
    var b;
    var jmlo = 0;
    var jmlx = 0;

    for(a=0;a<=str.length;a++){

        if(str.charAt(a) == "o"){
            jmlo += 1;
        }
        else if (str.charAt(a) == "x") {
            jmlx += 1;
        }

    }

    if (jmlo ==  jmlx){
        b = true;
        return b;
    }
    else {
        b = false;
        return b;
    }



}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true