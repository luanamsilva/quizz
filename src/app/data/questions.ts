import { Question } from '../types/Question';

export const questions: Question[] = [
  {
    question: 'Como se define um evento de clique usando JavaScript?',
    options: [
      ' Atribuindo uma função ao evento "onclick" do elemento desejado',
      ' Atribuindo uma função ao evento "onChange" do elemento desejado',
      ' Atribuindo uma função ao evento "click" do elemento desejado',
      ' Utilizando a tag "<script>" com o atributo apontando para onde a página vai levar.',
    ],
    answer: 0,
  },
  {
    question:
      'Qual é o método em JavaScript usado para adicionar um elemento ao final de um array?',
    options: [
      'O método "pop()"',
      ' O método "shift()"',
      'O método "push()" ',
      'O método "unshift()"',
    ],
    answer: 2,
  },
  {
    question: 'O que é JSON em JavaScript?',
    options: [
      'JavaScript Object Notation',
     'JavaScript Optimized Notation', 
     'JavaScript Service Online ',
      'JavaScript Optimized Node'],
    answer: 0,
  },

  {
    question: 'Como se converte um número em uma string em JavaScript?',
    options: ['Usando o método number.String()',
     'Usando o método "numberToString()" ',
      'Usando o método "toString()" ',
       'Usando o método convertToString()'],
    answer: 2,
  },
  {
    question: 'Qual é o método usado para converter uma string em um número inteiro em JavaScript?',
    options: ['O método "parseFloat()"',
     'O método "parseInt()"', 
     'O método stringToNumber()', 
     'O método convertNumber()'],
    answer: 1,
  },

  {
    question: 'Como se verifica se um determinado elemento existe em um array em JavaScript?',
    options: ['Usando o método "exist()"',
     'Usando o método "includes()"',
      ' Usando o método "slice()"',
      'Usando o método "reduce()"'],
    answer: 1,
  },
  {
    question: 'Qual é o método usado para transformar uma string em letras minúsculas em JavaScript?',
    options: ['O método "toUpperCase()"',
     'O método "upperCase"',
      'O método "lowerCase" ',
       'O método "toLowerCase()"'],
    answer: 3,
  },
  {
    question: 'Qual é o operador de igualdade estrita em JavaScript?',
    options: ['== (dois sinais de igual)',
     '= (sinal de igual)', 
     '!= (sinal de exclamação e sinal de igual)',
      ' === (três sinais de igual)'],
    answer: 3,
  },
  {
    question: 'Sobre promise:',
    options: ['É uma função que promete chamar outra função', 
    'Permite a execução de processamentos de forma assíncrona dentro do seu código', 
    'É um método para executar uma nova função', 
    'Permite executar uma função de forma síncrona'],
    answer: 3,
  },
  {
    question: 'Qual é o método usado para converter uma string em um número decimal em JavaScript?',
    options: ['O método "parseInt()"', 
    'O método stringToNumber()', 
    'O método convertNumber()',
     'O método "parseFloat()"'],
    answer: 3,
  }];
