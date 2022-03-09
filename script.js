let url = 'https://api.sheety.co/12c863568d49929b4e42b5a66199a49f/picapaus/página1';

function encontrarDados() {
    return fetch(url)
}

function buscar() {
    const nome_input = document.querySelector("#nome").value

    encontrarDados()
        .then(resposta => resposta.json())
        .then(dado => {
            for (let x in dado.página1) {
                // console.log(dado.dadosAlunos[x]['nome'])
                if (dado.página1[x]['nome'] === nome_input) {
                    document.querySelector("#idade").innerHTML = dado.página1[x]['idade']
                    document.querySelector("#especie").innerHTML = dado.página1[x]['especie']
                    document.querySelector("#classificacoes").innerHTML = dado.página1[x]['classificacoes']
                    document.querySelector("#sexo").innerHTML = dado.página1[x]['sexo']
                    document.querySelector("#frase").innerHTML = dado.página1[x]['frase']

                }

            }
        });

}