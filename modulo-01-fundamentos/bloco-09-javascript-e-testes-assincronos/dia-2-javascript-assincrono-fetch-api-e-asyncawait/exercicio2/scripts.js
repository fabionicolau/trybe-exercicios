const getCrypto = async () => {
  const url = 'https://api.coincap.io/v2/assets'

  const response = await fetch(url)
  const data = await response.json()
  return data.data
}

const cryptoList = async () => {
  const coin = await getCrypto()

  const list = document.getElementById('lista')

  coin.filter((element, index) => index < 10)
    .forEach((coin) => {
      const li = document.createElement('li')
      const price = parseFloat(coin.priceUsd).toFixed(2)
      console.log(price);
      li.innerText = `${coin.name} (${coin.symbol}): ${price}`
      list.appendChild(li)
    })
}
window.onload = () => cryptoList()