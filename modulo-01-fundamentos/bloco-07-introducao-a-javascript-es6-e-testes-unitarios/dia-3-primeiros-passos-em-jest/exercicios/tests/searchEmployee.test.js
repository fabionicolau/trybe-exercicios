const { searchEmployee } = require('../script/script')

describe('Bônus - Testa a função searchEmployee para que retorne a informação buscada', () => {
  it('Verifica se a searchEmployee está definido', () => {
    expect(searchEmployee).toBeDefined()
  })

  it('Verifica se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function')
  })

  it('Testa se ao passar a id e a informação retorna o valor esperado.', () => {
    expect(searchEmployee("8579-6", "lastName")).toBe("Gates")
    expect(searchEmployee("5569-4", "specialities")).toEqual(['Frontend', 'Redux', 'React', 'CSS'])
    expect(searchEmployee("9852-2-2", "firstName")).toBe("Jeff")
  })

  it('Testa se ao não encontrar a ID inserida ou a informação, retorna uma mensagem de erro', () => {
    expect(() => {
      searchEmployee('556-4', 'lastName')
    }).toThrow('ID não identificada')
    expect(() => {
      searchEmployee('5569-4', 'lastNae')
    }).toThrow('Informação indisponível')
  })
})

