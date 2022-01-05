const button = document.getElementById('button-submit')
const estadoSelect = document.getElementById('input-estado')
const buttonClear = document.getElementById('button-clear')
const form = document.getElementById('form')

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

const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']
function gerandoEstados() {
  for (let i = 0; i < estados.length; i += 1) {
    const option = document.createElement('option')
    option.innerText = estados[i]
    estadoSelect.appendChild(option)
  }
}
gerandoEstados()

buttonClear.addEventListener('click', () => {
  form.reset()
})