function carrega(_pagina, _div) {
    let xmlHttp;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        xmlHttp = ActiveXObject('Microsoft.XMLHTTP');
    }
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status === 200) {
            document.getElementById(_div).innerHTML = xmlHttp.responseText;
        }
    }
    xmlHttp.open('GET', _pagina, 'true');
    xmlHttp.send(null);
}