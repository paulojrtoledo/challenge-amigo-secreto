//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
res = document.querySelector('#resultado');

function atualizarLista() {

    res.innerHTML = ''; 

    for (let nome = 0; nome < amigos.length; nome++) {
    res.innerHTML += '<li>' + amigos[nome] + '</li>';
}

}


function adicionarAmigo() {

    let amigoAdd = document.querySelector('#amigo');

    if (amigoAdd.value.trim() == '') {
        alert('Por favor, insira um nome');
        return;
    }

    amigos.push(amigoAdd.value.trim());
    atualizarLista();
    amigoAdd.value = ''
}


function sortearAmigo() {

    if (amigos.length == 0) {
        alert('Não há nenhum amigo na lista')
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceSorteado];

    resFinal = document.querySelector('#resultado');
    resFinal.innerHTML = `O amigo secreto sorteado é: ${nomeSorteado}`

}
