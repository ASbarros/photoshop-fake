let page
$(document).ready(function (e) {
    page = 'home.html'
    carrega(page, 'root')
})

$('#home').on('click', function (e) {
    page = 'home.html'
    carrega(page, 'root')
})

$('#negativo').on('click', function (e) {
    if (page != 'imagem.html') {
        page = 'imagem.html'
        carrega(page, 'root')
    }
    const img = document.getElementById('img');

    //cria um canvas invisível
    const canvas = document.getElementById('canvas');
    canvas.width = img.width;
    const context = canvas.getContext('2d');
    //cria um canvas invisível

    //desenha a imagem no canvas
    context.drawImage(img, 0, 0);

    //recupera vetor de cores
    var map = context.getImageData(0, 0, img.width, img.height);

    for (let i = 0; i < map.data.length; i += 4) {
        map.data[i] = 255 - map.data[i];
        map.data[i + 1] = 255 - map.data[i + 1];
        map.data[i + 2] = 255 - map.data[i + 2];
        map.data[i + 3] = 255;
    }
    context.putImageData(map, 0, 0)

    img.src = map.data
})

$('#log').on('click', function (e) {
    if (page != 'imagem.html') {
        page = 'imagem.html'
        carrega(page, 'root')
    }
    const img = document.getElementById('img');

    //cria um canvas invisível
    const canvas = document.getElementById('canvas');
    canvas.width = img.width;
    const context = canvas.getContext('2d');
    //cria um canvas invisível

    //desenha a imagem no canvas
    context.drawImage(img, 0, 0);

    //recupera vetor de cores
    var map = context.getImageData(0, 0, img.width, img.height);
    for (let i = 0; i < map.data.length; i += 4) {
        map.data[i] = 105.886 * Math.log10(1 + map.data[i]);
        map.data[i + 1] = 105.886 * Math.log10(1 + map.data[i + 1]);
        map.data[i + 2] = 105.886 * Math.log10(1 + map.data[i + 2]);
    }
    context.putImageData(map, 0, 0)

    img.src = map.data
})

$('#loginverso').on('click', function (e) {
    if (page != 'imagem.html') {
        page = 'imagem.html'
        carrega(page, 'root')
    }
    const img = document.getElementById('img');

    //cria um canvas invisível
    const canvas = document.getElementById('canvas');
    canvas.width = img.width;
    const context = canvas.getContext('2d');
    //cria um canvas invisível

    //desenha a imagem no canvas
    context.drawImage(img, 0, 0);

    //recupera vetor de cores
    var map = context.getImageData(0, 0, img.width, img.height);
    for (let i = 0; i < map.data.length; i += 4) {
        map.data[i] = Math.pow(10, map.data[i] / 105.886);
        map.data[i + 1] = Math.pow(10, map.data[i + 1] / 105.886);
        map.data[i + 2] = Math.pow(10, map.data[i + 2] / 105.886);
    }
    context.putImageData(map, 0, 0)

    img.src = map.data
})

$('#input').on('change', function (e) {
    carrega('imagem.html', 'root')
    setTimeout(function () {

        $('#img').src = this.value
    }, 1000)
    //carrega uma imagem

})
