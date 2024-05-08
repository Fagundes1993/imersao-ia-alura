const form = document.getElementById('formCadastro');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch('api/cadastrarQuestao', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.erro) {
            mensagem.textContent = data.erro;
        } else {
            mensagem.textContent = data.mensagem;
            form.reset();
        }
    })
    .catch(error => {
        mensagem.textContent = 'Erro ao cadastrar questão.';
        console.error(error);
    });
});
