const prompt = require("prompt-sync")();

const fibonacci = [0, 1];

const gerarProximoFibonacci = () =>{
    const proxNum = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(proxNum)
}

const num = Number(prompt("Digite um número para saber se pertecen a sequência fibonacci: "));

while(fibonacci[fibonacci.length - 1] < num) {
        gerarProximoFibonacci();
}
 
console.log(fibonacci.includes(num));



