function balik(kata){
    z = "";
    for (i=kata.length-1;i>=0;i--){

        z = z + kata[i];
    
    }

    return z
}

console.log(balik("waktu kala itu hujan tiba"));