let picker = new Pikaday({
  field: document.getElementById('input-data'),
  toString(date, format) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
});

const estadoSelect = document.getElementById('input-estado')

const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']
function gerandoEstados() {
  for (let i = 0; i < estados.length; i += 1) {
    const option = document.createElement('option')
    option.setAttribute('value', estados[i])
    option.innerText = estados[i]
    estadoSelect.appendChild(option)
  }
}
gerandoEstados()
