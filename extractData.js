function getDados() {
    //inicializando a variavel que terá os dados (string)
    let text = "";

    divCardContent = document.getElementsByClassName('card-content')[0]
    divContact = document.getElementsByClassName('ContactButton__label')[0]

    text += "*`● " + nPedido() + "`*" + '\n'
    text += "*`● Nome`*: " + nomeCliente(divCardContent) + '\n'
    text += "*`● Contato`*: " + "" + '\n'
    text += "*`● Valor`*: R$ " + totalPrice(divTotal) + '\n'
    text += "*`● Tipo de Pagamento`*: " + tipoPagamento(divTotal) + '\n'
    text += getEndereco(divOrderDetails)

    return text
}

function nPedido() {
    //'Pedido Nº 1265 - Concluído'
    str = document.getElementsByClassName('card-title')[0].firstChild.firstChild.textContent

    str = str.substring(str.indexOf('º') + 2, str.indexOf('-') - 1)

    return "#" + str

}

function nomeCliente(divCardContent) {

    divFieldHas30 = divCardContent.firstChild.children[0]

    str = divFieldHas30.children[1].textContent

    str = str.substring(str.indexOf(':') + 2, str.indexOf('*') - 1)

    return str
}
