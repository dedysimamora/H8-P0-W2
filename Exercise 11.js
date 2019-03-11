function balikKata(kata) {
    
    var a;
    var b = "";

    for (a=kata.length-1;a>=0;a--){

        b = b + kata.charAt(a);
    }
    return b;

  }
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS