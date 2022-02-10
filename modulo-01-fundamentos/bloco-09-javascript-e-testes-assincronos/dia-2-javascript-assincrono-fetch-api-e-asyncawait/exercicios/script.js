const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const response = await fetch(API_URL, myObject)
  const data = await response.json()

  const h2 = document.getElementById('jokeContainer')
  h2.innerText = data.joke
}

window.onload = () => fetchJoke();