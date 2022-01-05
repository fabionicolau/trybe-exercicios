const button = document.getElementById('button-submit')
const estadoSelect = document.getElementById('input-estado')
function preventDefault(event) {
  event.preventDefault()
  if (document.myForm.nome.value === '' || document.myForm.nome.value.length > 40) {
    alert('Nome inválido')
    document.myForm.nome.focus()
    return false
  }
  if (document.myForm.email.value === '' || document.myForm.nome.value.length > 50) {
    alert('Email inválido')
    document.myForm.email.focus()
    return false
  }
  return true
}
button.addEventListener('click', preventDefault)

function gerandoEstados() {
  for (let i = 0; i < 27; i += 1) {
  const option = document.createElement('option')
  option.innerText = 'teste'
  estadoSelect.appendChild(option)
  }
}
gerandoEstados()