//1
const wakeUp = () => 'Acordando!!'
const breakFast = () => 'Bora tomar café'
const sleep = () => 'Partiu dormir!!'

const doingThings = callback => callback()

console.log(doingThings(sleep))

//2
const details = (nomeCompleto) => {
  const register = {
    nome: nomeCompleto,
    email: `${nomeCompleto.split(' ').join('_').toLowerCase()}@trybe.com`,
  }
  return register
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees
}
console.log(newEmployees(details));

//3 

const winner = (numbers, bet) => {
  if (numbers === bet) {
    return `O número sorteado foi ${numbers}. Parabéns, você ganhou!`
  } else {
    return `O número sorteado foi ${numbers}. Tente novamente`
  }
}

const lotteryNumbers = (bet, callback) => {
  let numbers = Math.floor(Math.random() * 5) + 1;
  return callback(numbers, bet)
}

console.log((lotteryNumbers(3, winner)));

// 4

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const checkAnswers = (gabarito, respostas) => {
  let count = 0;
  for (let i = 0; i < 10; i += 1) {
    if (gabarito[i] === respostas[i]) {
      count += 1
    }
    if (respostas[i] !== 'N.A' && gabarito[i] !== respostas[i]) {
      count -= 0.5
    }
  }
  return count
}

const answers = (correctAnswers, isCorrectAnswers, callback) => callback(correctAnswers, isCorrectAnswers)

console.log((answers(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers)));

//bonus

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => Math.round(Math.random() * dragon.strength) + 15
const warriorDamage = () => Math.round(Math.random() * (warrior.strength * warrior.weaponDmg)) + warrior.strength
const mageDamageMana = () => {
  const danoMana = {
    dano: Math.round(Math.random() * (mage.intelligence * 2)) + mage.intelligence,
    mana: mage.mana < 15 ? "Não possui mana suficiente" : 15
  }
  return danoMana
}

const gameActions = {
    warriorAction: (callback) => {
    let dano = callback()
    dragon.healthPoints -= dano
    warrior.damage = dano
  },
    mageAction: (callback) =>  {
      let mageObject = callback()
      let dano = mageObject.dano
      let mana = mageObject.mana
      dragon.healthPoints -= dano
      mage.damage = dano
      mage.mana -= mana
    },
    dragonAction: (callback) => {
      let dano = callback()
      mage.healthPoints -= dano
      warrior.healthPoints -= dano
      dragon.damage = dano
    },
    battleMembersFinal: () => {
      gameActions.warriorAction(warriorDamage)
      gameActions.mageAction(mageDamageMana)
      gameActions.dragonAction(dragonDamage)
      return console.log(battleMembers)
    },
};

gameActions.battleMembersFinal()




