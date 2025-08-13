//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
res = document.querySelector('#resultado');

function adicionarAmigo() {

    let amigoAdd = document.querySelector('#amigo');

    if (amigoAdd.value.trim() == '') {
        alert('Por favor, insira um nome')
    }

    amigos.push(amigoAdd.value);
    res.innerHTML = amigos.join('<br>');
    amigoAdd.value = ''
}

