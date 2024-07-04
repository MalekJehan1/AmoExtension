// localização e criação do botão^
// através de uma função que repete a cada 1s
const interval = setInterval(() => {

    let divCardTitle = document.getElementsByClassName('common-card layout-padding form-orders')[0]

    if (divCardTitle) // verifica se foi encontrado o elemento divCardTitle
    {
        divCardTitle = divCardTitle.getElementsByClassName('card-title')[0].firstChild
        console.log('entrou 1if')
        let button = document.getElementsByClassName('CopyButton')

        if (button.length < 1) // verifica se encontrou o botão, caso não encontrou, entra no if
        {
            createButton(divCardTitle) // function para criar o botão na div
        }
    }


}, 1000);

function createButton(divCardTitle) {
    const button = document.createElement("button") // cria um elemento do tipo button
    button.innerHTML = "Copiar informaçõoes" // texto do botão
    button.classList.add("CopyButton") // adiciona a classe "CopyButton" ao botão
    console.log('botao criado')

    //verifica quando o botão é pressionado, e determina uma ação
    button.addEventListener("click", () => {

        //variavel string que armazenará os dados que desejamos buscar
        text = "getDados()";
        console.log(text)

        // Cria um elemento de input para colocar o texto
        const textarea = document.createElement('textarea');
        textarea.value = text; // atribui os dados buscados para este 'textarea'

        // O textarea precisa estar visível na página para que document.execCommand('copy') funcione corretamente
        textarea.style.position = 'fixed';
        textarea.style.opacity = 0;

        // Anexa o elemento input ao documento
        document.body.appendChild(textarea);

        // Seleciona o texto dentro do input
        textarea.select();

        // Copia o texto selecionado para a área de transferência
        document.execCommand('copy');

        // Remove o elemento input
        document.body.removeChild(textarea);

        clickAlert("Informações copiadas!", 3000)

    })

    divCardTitle.appendChild(button)
}

function clickAlert(mensagem, tempoExibicao) {
    // Criar elemento de alerta
    var alerta = document.createElement('div');
    alerta.classList.add('clickAlertDiv'); // adicionando a classe 'clickAlertDiv'
    alerta.textContent = mensagem; // atribuindo a mensagem de aviso

    // Adicionar alerta ao corpo do documento
    document.body.appendChild(alerta);

    // Remover alerta após o tempo especificado
    setTimeout(function () {
        alerta.remove();
    }, tempoExibicao);
}