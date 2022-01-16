const {myFizzBuzz} = require('../script/script')

describe('Questão 3', () => {
  it('Testa se o parâmetro é um número', () => { 
    expect(myFizzBuzz('a')).toBe(false)
  })
})
