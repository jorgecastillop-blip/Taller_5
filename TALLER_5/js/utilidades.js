function crearElemento(tipo) {

    var nodo = document.createElement(tipo);
    return nodo;

}

function crearElementoTexto(tipo, texto) {

    var nodo = document.createElement(tipo);
    var textoNodo = document.createTextNode(texto);
    nodo.appendChild(textoNodo);
    return nodo;

}

function crearElementoImagen(url, alt) {

    var nodo = crearElemento("img");
    nodo.src = url;
    nodo.alt = alt;
    return nodo;

}

function adiconarElementoABody(nodo) {
    document.body.appendChild(nodo);
}

function crearElementoLink(texto, href) {

    var link = crearElementoTexto('a', texto);
    link.href = href;
    return link;

}

function adicionarElementoAContenedor(elemento, contenedor) {
    contenedor.appendChild(elemento);
}