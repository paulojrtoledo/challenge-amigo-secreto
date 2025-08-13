//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
res = document.querySelector('#resultado');

function atualizarLista() {

    res.innerHTML = ''; 

    for (let nomes = 0; nomes < amigos.length; nomes++) {
    res.innerHTML += '<li>' + amigos[nomes] + '</li>';
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


