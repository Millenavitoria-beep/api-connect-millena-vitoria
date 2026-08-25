const usuarios = [
  {
      id: 1,
      nome: 'Ana',
      email: 'ana@email.com'
  },
  {
      id: 2,
      nome: 'Pietro',
      email: 'pietro@email.com'
  }
];

let proximoId = 3;

function gerarId() {
  return proximoId++;
}

module.exports = {
  usuarios,
  gerarId
};