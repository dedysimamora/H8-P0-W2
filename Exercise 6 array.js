function angkaPalindrome(num) {
 
var angka = num + 1;
var balikan = "";
 
var kondisi = false;

 while (!kondisi){
    
    balikan = String(angka).split('').reverse().join('');
    if(angka === Number(balikan)){

        kondisi = true;
    }
    else {
        angka++;
    }

}

return angka;

}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(5000)); // 1001