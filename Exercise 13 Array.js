function targetTerdekat(arr) {
    
  var awal = 0;
  var akhir = 0;
  var jarak = 0;
  var tampung =[];
  var kurangi=[];

	if(!arr.includes('x')){
		return 0;
	}
	else{
		for(let i = 0; i < arr.length; i++){
			if(arr[i] == 'o'){
				awal = i;
			}
			if(arr[i] == 'x'){
        
        tampung.push(i);
       	
      }  
    }	
    for (var k=0;k<tampung.length;k++){
      kurangi.push(Math.abs(tampung[k]-awal));

    }
    return kurangi.sort(function(a, b){return a - b})[0];
	}
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat(['o', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2