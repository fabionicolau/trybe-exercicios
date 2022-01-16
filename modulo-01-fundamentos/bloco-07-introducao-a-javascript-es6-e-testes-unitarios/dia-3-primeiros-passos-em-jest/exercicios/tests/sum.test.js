const {sum} = require('../script/script.js')


describe('Questão 1', () => {
  it('Retorna o resultado da soma', () => {
    expect(sum(4, 5)).toBe(9)
    expect(sum(0, 0)).toBe(0)
  })  
  it ('Testa se é lançado o erro caso entre algum parametro que nao seja number', () =>{
    expect(() => {sum(4, '5')}).toThrow()
  })
  it ('Testa se a mensagem de erro é "parameters must be numbers"', () => {
    expect(() => {sum(4, '5')}).toThrow('parameters must be numbers')
  }) 
}) 

