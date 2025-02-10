// Exibir o console
// console so existe no navegador 
console.log('Olá, sou o console');
console.log('Eu exibo conteúdo');

// variáveis
let rmAluno = 333;
let nomeAluno = 'Rivaldo';
let turmaAluno = '3TI';
const ESCOLA_ALUNO = 'Lourdão';

console.log(rmAluno, nomeAluno);
console.log(turmaAluno, ESCOLA_ALUNO);

// concatenação - péssima prática, mas muito comum
console.log('Nome do aluno: ' + nomeAluno);

// Template string 
console.log(`Nome do aluno: ${nomeAluno} Rm do aluno: ${rmAluno}`);

turmaAluno = '3A'
console.log(`Turma do aluno: ${turmaAluno}`);

turmaAluno = '3AC'
console.log(`Turma do aluno: ${turmaAluno}`);

console.log('Alterando o arquivo JS, executando um novo commit');
