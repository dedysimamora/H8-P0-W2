function angkaPrima(angka) {
    
    for (i=2;i<=angka;i++){     
        prima=true;
        for(j=2;j<i;j++){
            if(i%j==0){
            prima = false;
            }
        }
        
    }

    return prima;

}
  
  // TEST CASES
  console.log(angkaPrima(11)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false