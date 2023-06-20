//cadastro.html
// Função para carregar os dados do localStorage, se existirem
function carregarDados() {
    var dados = localStorage.getItem('dadosUsuario');
    if (dados) {
      var parsedDados = JSON.parse(dados);
      document.getElementById('nomeCompleto').value = parsedDados.nomeCompleto || '';
      document.getElementById('email').value = parsedDados.email || '';
      document.getElementById('telefone').value = parsedDados.telefone || '';
      document.getElementById('idade').value = parsedDados.idade || 0;
      document.getElementById('sexo').value = parsedDados.sexo || '';
      document.getElementById('estadoCivil').value = parsedDados.estadoCivil || '';
      document.getElementById('profissao').value = parsedDados.profissao || '';
      document.getElementById('senha').value = parsedDados.senha || '';
      document.getElementById('visualizarSenha').checked = parsedDados.visualizarSenha || false;
      document.getElementById('aceiteDados').checked = parsedDados.aceiteDados || false;
      atualizarCampoSenha();
    }
  }
// Função para salvar os dados no localStorage
function salvarDados() {
    var nomeCompleto = document.getElementById('nomeCompleto').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var idade = document.getElementById('idade').value;
    var sexo = document.getElementById('sexo').value;
    var estadoCivil = document.getElementById('estadoCivil').value;
    var profissao = document.getElementById('profissao').value;
    var senha = document.getElementById('senha').value;

    // Verificar se todos os campos foram preenchidos
    if (
        nomeCompleto === '' ||
        email === '' ||
        telefone === '' ||
        idade === '' ||
        sexo === 'Clique para selecionar' ||
        estadoCivil === 'Clique para selecionar' ||
        profissao === '' ||
        senha === ''
    ) {
        alert('Por favor, preencha todos os campos.');
        return; // Impede o redirecionamento se os campos estiverem vazios
    } 

    // Criar um objeto com os dados
    var dados = {
        nomeCompleto: nomeCompleto,
        email: email,
        telefone: telefone,
        idade: idade,
        sexo: sexo,
        estadoCivil: estadoCivil,
        profissao: profissao,
        senha: senha
    };

    // Salvar os dados no localStorage
    localStorage.setItem('dadosUsuario', JSON.stringify(dados));

    // Redirecionar para a página "login.html"
    window.location.href = "login.html";
}
// Função para atualizar a exibição da senha
function atualizarCampoSenha() {
    var campoSenha = document.getElementById('senha');
    var visualizarSenha = document.getElementById('visualizarSenha').checked;

    if (visualizarSenha) {
      campoSenha.type = 'text';
    } else {
      campoSenha.type = 'password';
    }
  }