const { getPokemonDetails } = require("./getPokemonDetails");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    function callback(error, message) {
      expect(error).toEqual(new Error('Não temos esse pokémon para você :('))
      done()
    }

    getPokemonDetails((element) => element.name === "Pikachu", callback)
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    function callback(error, message) {
      expect(message).toEqual('Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember')
      done()
    }

    getPokemonDetails((element) => element.name === 'Charmander', callback)
  });
});