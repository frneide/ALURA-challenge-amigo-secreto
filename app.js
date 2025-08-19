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
