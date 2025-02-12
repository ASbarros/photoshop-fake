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

$('#btn-potencia').on('click', function (e) {
    let gama = document.getElementById('input-potencia').value
    if (gama != null || gama != "") {
        if (page != 'imagem.html') {
            page = 'imagem.html'
            carrega(page, 'root')
        }
        const img = document.getElementById('img');

        //cria um canvas invisível
        const canvas = document.getElementById('canvas')
        canvas.width = img.width;
        const context = canvas.getContext('2d');
        //cria um canvas invisível

        //desenha a imagem no canvas
        context.drawImage(img, 0, 0);

        //recupera vetor de cores
        var map = context.getImageData(0, 0, img.width, img.height);
        gama = parseFloat(gama);
        for (let i = 0; i < map.data.length; i += 4) {
            map.data[i] = Math.pow(map.data[i] / 255, gama) * 256;
            map.data[i + 1] =
                Math.pow(map.data[i + 1] / 255, gama) * 256;
            map.data[i + 2] =
                Math.pow(map.data[i + 2] / 255, gama) * 256;
        }
        context.putImageData(map, 0, 0)

        img.src = map.data
    } else {
        alert("Desculpe gama formato incorreto!");
    }
})
$('#btn-raiz').on('click', function (e) {
    let gama = document.getElementById('input-raiz').value
    if (gama != null || gama != "") {
        if (page != 'imagem.html') {
            page = 'imagem.html'
            carrega(page, 'root')
        }
        const img = document.getElementById('img');

        //cria um canvas invisível
        const canvas = document.getElementById('canvas')
        canvas.width = img.width;
        const context = canvas.getContext('2d');
        //cria um canvas invisível

        //desenha a imagem no canvas
        context.drawImage(img, 0, 0);

        //recupera vetor de cores
        var map = context.getImageData(0, 0, img.width, img.height);
        gama = parseFloat(gama);
        for (let i = 0; i < map.data.length; i += 4) {
            map.data[i] = Math.pow(map.data[i] / 255, 1 / gama) * 256;
            map.data[i + 1] =
                Math.pow(map.data[i + 1] / 255, 1 / gama) * 256;
            map.data[i + 2] =
                Math.pow(map.data[i + 2] / 255, 1 / gama) * 256;
        }
        context.putImageData(map, 0, 0)

        img.src = map.data
    } else {
        alert("Desculpe gama formato incorreto!");
    }
})

$('#tam512').on('click', function (e) {
    if (page != 'tam512.html') {
        page = 'tam512.html'
        carrega(page, 'root')
    }

    const img = document.getElementById('img');

    //cria um canvas invisível
    const canvas = document.getElementById('canvas')
    canvas.width = img.width;
    const context = canvas.getContext('2d');
    //cria um canvas invisível

    //desenha a imagem no canvas
    context.drawImage(img, 0, 0);

    //recupera vetor de cores
    let map = context.getImageData(0, 0, img.width * 2, img.height * 2)

    let pixel,
        posicao = 0,
        tamanhoLinha = img.width * 2 * 4;

    for (let l = 0; l < img.height; l++) {
        for (let c = 0; c < img.width; c++) {

            /*  if (c % 2 == 0 && l % 2 == 0) pixel = context.getImageData(c, l, 1, 1).data
             else if (c % 2 == 1 && l % 2 == 0 && c < img.width - 1) {
                 pixel[0] = (context.getImageData(c - 1, l, 1, 1).data[0] + context.getImageData(c + 1, l, 1, 1).data[0]) / 2
                 pixel[1] = (context.getImageData(c - 1, l, 1, 1).data[1] + context.getImageData(c + 1, l, 1, 1).data[1]) / 2
                 pixel[2] = (context.getImageData(c - 1, l, 1, 1).data[2] + context.getImageData(c + 1, l, 1, 1).data[2]) / 2
                 pixel[3] = (context.getImageData(c - 1, l, 1, 1).data[3] + context.getImageData(c + 1, l, 1, 1).data[3]) / 2
             }
             else if (c % 2 == 0 && l % 2 == 1 && l < img.height - 1) {
                 pixel[0] = (context.getImageData(c, l - 1, 1, 1).data[0] + context.getImageData(c, l + 1, 1, 1).data[0]) / 2
                 pixel[1] = (context.getImageData(c, l - 1, 1, 1).data[1] + context.getImageData(c, l + 1, 1, 1).data[1]) / 2
                 pixel[2] = (context.getImageData(c, l - 1, 1, 1).data[2] + context.getImageData(c, l + 1, 1, 1).data[2]) / 2
                 pixel[3] = (context.getImageData(c, l - 1, 1, 1).data[3] + context.getImageData(c, l + 1, 1, 1).data[3]) / 2
             }
             else if (c % 2 == 1 && l % 2 == 1) {
                 pixel[0] = (
                     context.getImageData(c - 1, l - 1, 1, 1).data[0] +
                     context.getImageData(c - 1, l + 1, 1, 1).data[0] +
                     context.getImageData(c + 1, l + 1, 1, 1).data[0] +
                     context.getImageData(c - 1, l + 1, 1, 1).data[0]
                 ) / 4
                 pixel[1] = (
                     context.getImageData(c - 1, l - 1, 1, 1).data[1] +
                     context.getImageData(c - 1, l + 1, 1, 1).data[1] +
                     context.getImageData(c + 1, l + 1, 1, 1).data[1] +
                     context.getImageData(c - 1, l + 1, 1, 1).data[1]
                 ) / 4
                 pixel[2] = (
                     context.getImageData(c - 1, l - 1, 1, 1).data[2] +
                     context.getImageData(c - 1, l + 1, 1, 1).data[2] +
                     context.getImageData(c + 1, l + 1, 1, 1).data[2] +
                     context.getImageData(c - 1, l + 1, 1, 1).data[2]
                 ) / 4
                 pixel[3] = (
                     context.getImageData(c - 1, l - 1, 1, 1).data[3] +
                     context.getImageData(c - 1, l + 1, 1, 1).data[3] +
                     context.getImageData(c + 1, l + 1, 1, 1).data[3] +
                     context.getImageData(c - 1, l + 1, 1, 1).data[3]
                 ) / 4
                 
             } */
            pixel = context.getImageData(c + 1, l, 1, 1).data

            /* map.data[posicao] = pixel;
            map.data[posicao + 4] = pixel;
            map.data[tamanhoLinha + posicao] = pixel;
            map.data[tamanhoLinha + posicao + 4] = pixel; */

            // original
            map.data[posicao] = pixel[0];
            map.data[posicao + 1] = pixel[1];
            map.data[posicao + 2] = pixel[2];
            map.data[posicao + 3] = pixel[3];
            // direito
            map.data[posicao + 4] = pixel[0];
            map.data[posicao + 5] = pixel[1];
            map.data[posicao + 6] = pixel[2];
            map.data[posicao + 7] = pixel[3];
            // embaixo
            map.data[tamanhoLinha + posicao] = pixel[0];
            map.data[tamanhoLinha + posicao + 1] = pixel[1];
            map.data[tamanhoLinha + posicao + 2] = pixel[2];
            map.data[tamanhoLinha + posicao + 3] = pixel[3];
            // embaixo lado
            map.data[tamanhoLinha + posicao + 4] = pixel[0];
            map.data[tamanhoLinha + posicao + 5] = pixel[1];
            map.data[tamanhoLinha + posicao + 6] = pixel[2];
            map.data[tamanhoLinha + posicao + 7] = pixel[3];

            posicao += 8;
        }
        posicao += tamanhoLinha;
    }
    context.putImageData(map, 0, 0)

    img.src = map.data

})

$('#tam1024').on('click', function (e) {
    if (page != 'tam1024.html') {
        page = 'tam1024.html'
        carrega(page, 'root')
    }

    const img = document.getElementById('img');

    //cria um canvas invisível
    const canvas = document.getElementById('canvas')
    canvas.width = img.width;
    const context = canvas.getContext('2d');
    //cria um canvas invisível

    //desenha a imagem no canvas
    context.drawImage(img, 0, 0);

    //recupera vetor de cores
    let map = context.getImageData(0, 0, img.width * 2, img.height * 2)

    let pixel,
        posicao = 0,
        tamanhoLinha = img.width * 4 * 4;

    for (let l = 0; l < img.height; l++) {
        for (let c = 0; c < img.width; c++) {
            pixel = context.getImageData(c, l, 1, 1).data

            // original
            map.data[posicao] = pixel[0];
            map.data[posicao + 1] = pixel[0];
            map.data[posicao + 2] = pixel[1];
            map.data[posicao + 3] = pixel[1];
            map.data[posicao + 4] = pixel[2];
            map.data[posicao + 5] = pixel[2];
            map.data[posicao + 6] = pixel[3];
            map.data[posicao + 7] = pixel[3];

            // direito
            map.data[posicao + 8] = pixel[0];
            map.data[posicao + 9] = pixel[0];
            map.data[posicao + 10] = pixel[1];
            map.data[posicao + 11] = pixel[1];
            map.data[posicao + 12] = pixel[2];
            map.data[posicao + 13] = pixel[2];
            map.data[posicao + 14] = pixel[3];
            map.data[posicao + 15] = pixel[3];
            // embaixo
            map.data[tamanhoLinha + posicao] = pixel[0];
            map.data[tamanhoLinha + posicao + 1] = pixel[0];
            map.data[tamanhoLinha + posicao + 2] = pixel[1];
            map.data[tamanhoLinha + posicao + 3] = pixel[1];
            map.data[tamanhoLinha + posicao + 4] = pixel[2];
            map.data[tamanhoLinha + posicao + 5] = pixel[2];
            map.data[tamanhoLinha + posicao + 6] = pixel[3];
            map.data[tamanhoLinha + posicao + 7] = pixel[3];
            // embaixo lado
            map.data[tamanhoLinha + posicao + 8] = pixel[0];
            map.data[tamanhoLinha + posicao + 9] = pixel[0];
            map.data[tamanhoLinha + posicao + 10] = pixel[1];
            map.data[tamanhoLinha + posicao + 11] = pixel[1];
            map.data[tamanhoLinha + posicao + 12] = pixel[2];
            map.data[tamanhoLinha + posicao + 13] = pixel[2];
            map.data[tamanhoLinha + posicao + 14] = pixel[3];
            map.data[tamanhoLinha + posicao + 15] = pixel[3];

            posicao += 16;
        }
        posicao += tamanhoLinha;
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
