
//Tugas 1 -----------------------------
function shotOut(){

    var g = "halo function";
    return g

}
console.log(shotOut());

//Tugas 2------------------------------

function calculateMultiply(num1, num2){

    return num1 * num2;

}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

//Tugas 3------------------------------

function processSentence (name, age, address, hobby){

    var r = "Nama saya " + name + " umur saya " + age + " Alamat saya di " + address + " dan saya memiliki hobby " + hobby + "!";
    return r;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 


