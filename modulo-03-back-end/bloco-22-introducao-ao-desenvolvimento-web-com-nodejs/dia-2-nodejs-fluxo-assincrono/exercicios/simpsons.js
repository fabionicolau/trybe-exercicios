const fs = require('fs').promises;

const readCharacter = async () => {
  // fs.readFile('simpsons.json', 'utf8')
  //   .then((data) => {
  //     const characters = JSON.parse(data);
  //     characters.map((element) => console.log (`${element.id} - ${element.name}`));
  //   }
  // )
  const response = await fs.readFile('./simpsons.json', 'utf8')
  const data = JSON.parse(response);
  data.map((element) => console.log(`${element.id} - ${element.name}`));
}
readCharacter()

const readCharacterByID = async (id) => {
  const response = await fs.readFile('./simpsons.json', 'utf8')
  const data = JSON.parse(response);
  const getById = data.find(element => +id === +element.id)
  console.log(`${getById.id} - ${getById.name}`)
}
readCharacterByID(1)

const deleteCharacterByID = async (id, id2) => {
  const response = await fs.readFile('./simpsons.json', 'utf8')
  const data = JSON.parse(response);
  const newData = data.filter(element => +id !== +element.id && +id2 !== +element.id)
  await fs.writeFile('./simpsons.json', JSON.stringify(newData))
}
deleteCharacterByID(10, 6)

const createNewFamily = async (...charactersIds) => {
  const response = await fs.readFile('./simpsons.json', 'utf8')
  const data = JSON.parse(response);
  const newData = data.filter(element => +charactersIds.includes(+element.id))
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newData))
}
createNewFamily(1, 2, 3, 4)

const addNewCharacter = async (name) => {
  const response = await fs.readFile('./simpsons.json', 'utf8')
  const data = JSON.parse(response)
  const newResponse = await fs.readFile('./simpsonFamily.json', 'utf8')
  const previousData = JSON.parse(newResponse)
  const character = data.find(element => element.name === name)
  const newData = [...previousData, character]
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newData))
}
addNewCharacter('Nelson Muntz')

const changeCharacter = async (addName, deleteName) => {
  const response = await fs.readFile('./simpsons.json', 'utf8')
  const data = JSON.parse(response);
  const character = data.find(element => element.name === addName)
  const newResponse = await fs.readFile('./simpsonFamily.json', 'utf8')
  const previousData = JSON.parse(newResponse)
  const deleteIndex = previousData.findIndex(element => element.name === deleteName)
  previousData.splice(deleteIndex, 1, character)
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(previousData))
}
changeCharacter('Maggie Simpson', 'Nelson Muntz')