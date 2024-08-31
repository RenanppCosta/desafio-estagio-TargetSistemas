const prompt = require("prompt-sync")();

const string = prompt("Digite uma string: ");

const letraProcurada = "a";
let contador = 0;


for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === letraProcurada) {
        contador++;
    }
}

if(contador > 0){
    console.log(`A letra 'a' ou 'A' existe na string e aparece ${contador} vezes.`)
}else{
    console.log("A letra 'a' ou 'A' não existe na string.")
}