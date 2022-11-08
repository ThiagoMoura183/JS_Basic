let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log('os verdadeiros...');
console.log(!!3)
console.log(!!-1) 
console.log(!!' ') 
console.log(!!'texto') 
console.log(!![]) 
console.log(!!{}) 
console.log(!!Infinity) 


console.log('os falsos...');
console.log(!!0);
console.log(!!''); //String VAZIA
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);

console.log('Para finalizar...');
console.log(!!( '' || null || 0 || 'epa' || 123));

// let nome = '';
let nome = 'Thiago';
console.log(nome || 'Desconhecido')