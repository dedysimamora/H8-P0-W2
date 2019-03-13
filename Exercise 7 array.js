function hitungJumlahKata(kalimat) {

    var jmlk = 1;
    var t;
    
    for (i=0;i<=kalimat.length;i++){
        if (kalimat[i] == " "){
            jmlk += 1;
        }
    }
    
    return jmlk;
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5