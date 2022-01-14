const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  let completeAddress = []
  const endereco = Object.values(order.address)
   for (let element in endereco) {
      completeAddress.push(endereco[element])
  }
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${completeAddress[0]}, Nº: ${completeAddress[1]}, AP: ${completeAddress[2]}.`

}

console.log(customerInfo(order))

const orderModifier = (order) => {
  order.name = 'Luiz Silva'
  order.payment = 'R$ 50,00'
  const pizzas = Object.keys(order.order.pizza)
  const bebida = order.order.drinks.coke.type
  return `Olá ${order.name}, o total do seu pedido de ${pizzas.join(', ')} e ${bebida} é ${order.payment}`  

}

console.log(orderModifier(order));