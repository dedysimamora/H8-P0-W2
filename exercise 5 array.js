function palindrome(kata) {
    var balik='';
    var hsl;
    for(var i=kata.length-1;i>=0;i--){
        
        balik = balik + kata[i]
        
    }
    
    if (kata === balik){
        hsl = true;

    }else{

        hsl = false;
    }
    return hsl;

  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false