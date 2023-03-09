const senha = document.getElementById('password')
const confirme_password = document.getElementById('confirme-password')

if (senha !== confirme_password) {
  var message = "Senhas não coincidem";
  console.log(message)
}