const uppercase = require('../exercicios/script')

describe('Testa se a função retorna apenas letras maiúsculas', () => {
  it('retorna apenas letras maiúsculas', (done) => {
    function callback(string) {
      try {
        expect(string).toBe('TEST')
        done()
      } catch(error) {
        done(error)
      }
    }

    uppercase('test', callback)
  })
})


