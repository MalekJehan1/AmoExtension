function getDados() {
    //inicializando a variavel que terá os dados (string)
    let text = "";

    divCardContent = document.getElementsByClassName('card-content')[0]

    text += "*`●●●● ♥ AMO ♥ ●●●●`*" + '\n'
    text += "*`● " + nPedido() + "`*" + '\n'
    text += "*`● Nome`*: " + nomeCliente(divCardContent) + '\n'
    text += "*`● Contato`*: " + "" + '\n'
    text += "*`● Valor`*: R$ " + precoTotal(divCardContent) + '\n'
    text += "*`● Tipo de Pagamento`*: " + tipoPagamento(divCardContent) + '\n'
    text += buscaEndereco(divCardContent)

    return text
}

function nPedido() {
    //'Pedido Nº 1265 - Concluído'
    str = document.getElementsByClassName('card-title')[0].firstChild.firstChild.textContent

    str2 = str.substring(0, str.indexOf('N') - 1)

    str = str.substring(str.indexOf('º') + 2, str.indexOf('-') - 1)

    return str2 + " #" + str

}

function nomeCliente(divCardContent) {

    divFieldHas30 = divCardContent.firstChild.children[0]

    str = divFieldHas30.children[1].textContent

    str = str.substring(str.indexOf(':') + 2, str.indexOf('*') - 1)

    return str
}

function precoTotal(divCardContent) {

    tableValues = divCardContent.getElementsByClassName('table-values')[0]
    str = tableValues.children[1].children[2].textContent

    str = str.substring(str.indexOf('$') + 2)

    return str

}

function tipoPagamento(divCardContent) {

    divFieldHas50 = divCardContent.firstChild.children[5]

    str = divFieldHas50.children[1].textContent

    return str
}

function buscaEndereco(divCardContent) {
    text = ""

    divFieldHas50 = divCardContent.firstChild.children[1]

    str = divFieldHas50.children[3].textContent.split('Ref.:')
    str2 = divFieldHas50.children[4].textContent

    text = "*`● Endereço`*: " + str[0] + " - " + str2 + '\n'

    text += "*`● Referência`*:"
    if (str[1])
        text += str[1] + '\n'
    else text += "" + '\n'

    text += "*`● Complemento`*:"
    text += "" + '\n'

    return text
}