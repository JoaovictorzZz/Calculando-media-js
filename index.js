function escopo() {
    // Obtendo os valores dos inputs
    const nome = document.getElementById('nome').value;
    const ensino = document.getElementById('ensino').value.toLowerCase(); // Convertendo para minúsculas para facilitar a comparação
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
  
    // Calculando a média
    let media;
    if (ensino === 'fundamental') {
        media = (nota1 + nota2 + nota3) / 2;
    } else if (ensino === 'medio') {
        media = (nota1 + nota2 + nota3) / 3;
    } else {
       alert('Informe seu ensino !')
    }

    // Exibindo os resultados
    const info = [`Aluno: ${nome}\nEnsino: ${ensino}\nSua média final é ${media.toFixed(2)}`];
    const resultado = document.getElementById('dados').innerText = info;
}

// Adicione este código para que a função seja chamada quando o botão for clicado
document.querySelector('button').addEventListener('click', escopo);