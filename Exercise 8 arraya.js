function pasanganTerbesar(num) {
    
    var a = String(num);
    var b = a.length;
    var c = Number(a[0]+a[1]);

    for (var i = 1; i < b-1; i++) {
        if (c < Number(a[i]+a[i+1])) {
            c = Number(a[i]+a[i+1]);
        }
    }
 return c;


  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99