// Atualiza a lista de amigos na tela usando um loop for e elementos <li>
function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    if (lista_de_amigos.length === 0) {
        lista.innerHTML = '<p class="aviso">Nenhum amigo adicionado.</p>';
        return;
    }
    for (let i = 0; i < lista_de_amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${i + 1} - ${lista_de_amigos[i]}`;
        lista.appendChild(li);
    }
}
let lista_de_amigos = [];

function add_amigos() {
    let amigos = document.querySelector('input').value;

    if (amigos == '') {
        alert('Por favor, digite um nome.');

    } else {
        lista_de_amigos.push(amigos);
        document.querySelector('input').value = '';
        exibir_amigos();
    }
}

function exibir_amigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    if (lista_de_amigos.length == 0) {
        lista.innerHTML = '<p class="aviso">Nenhum amigo adicionado.</p>';
    } else {
        lista_de_amigos.forEach((amigo, index) => {
            lista.innerHTML += `<li>${index + 1} - ${amigo}</li>`;
        });
    }    
}
