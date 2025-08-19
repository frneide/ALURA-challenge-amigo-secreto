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

function atualizar_lista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    if (lista_de_amigos.length == 0) {
        lista.innerHTML = '<p class="aviso">Nenhum amigo adicionado.</p>';
        return;}

    for (let i = 0; i < lista_de_amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${i + 1} - ${lista_de_amigos[i]}`;
        lista.appendChild(li);
    }
}

function sortear_amigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    if (lista_de_amigos.length == 0) {
        resultado.innerHTML = '<li>Nenhum amigo para sortear.</li>';
        atualizar_lista();
        return;
    }
    const indice = Math.floor(Math.random() * lista_de_amigos.length);
    const nome_sorteado = lista_de_amigos[indice];
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${nome_sorteado}</strong></li>`;
    // Remove o amigo sorteado do array
    lista_de_amigos.splice(indice, 1);
    // Atualiza a lista na tela
    atualizar_lista();
}