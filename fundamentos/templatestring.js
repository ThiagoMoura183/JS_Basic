const nome = 'Rebeca';
const concatenacao = "Olá " + nome + "!"; // Variavel string nao permite quebra de linhas

const template = `Olá
${nome}!`

console.log(concatenacao, template);

// Expressões...
console.log(`1 + 1 = ${1 + 1}`);

// Função que recebe parâmetro.
const up = texto => texto.toUpperCase();

console.log(`Ei... ${up('cuidado')}!`)