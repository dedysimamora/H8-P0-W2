function angkaPalindrome(num) {
    
    var a = num + 1;
    var balik = "";
    while(true){
        var c = String(a);
        balik = c.split("").reverse().join("");
        if (a === Number(balik)){
            return a;
        }
        else {

            a++;
        }
    }

  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001