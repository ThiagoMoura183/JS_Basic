const escola = "Cod3r"

// Isso me dará o caractere do 4º indice na string
console.log(escola.charAt(4)) 
// Isso nao irá gerar erro, mesmo que não encontrou nada na posição 10
console.log(escola.charAt(10)) 

console.log(escola.substring(1)) //Irá pegar a string a partir do indice 1
console.log(escola.substring(0,3)) //Irá pegar a string a partir do 0 até 3

console.log('Escola ' . concat(escola).concat("!")) // Concatenar
console.log('Escola ' + escola + "!") // Concatenar
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(',')) // Isso gera um array a partir de varias strings