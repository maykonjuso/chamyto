function copiarTexto() {
    var texto = document.getElementById("conteudo");
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Valor copiado com sucesso");
}

function transformarTextoComPontuacao(texto) {
    if (texto != '') {
        var linhas = texto.split('\n');
        var textoFormatado = '';
        linhas.forEach(function (linha, index) {
            var frase = linha.replace(/^\d+\.\s*/, '').trim();
            frase = frase.replace('.', '')

            if (index === linhas.length - 1) {
                textoFormatado += '✅ ' + frase + '.';
            } else {
                textoFormatado += '✅ ' + frase + ';\n';
            }

        });
        return textoFormatado;
    }
    return ''
}

function generateValue() {
    let loc = document.getElementById('locinput').value.toUpperCase();
    let cod = document.getElementById('codinput').value;
    let desc = document.getElementById('descinput').value;
    let carac = transformarTextoComPontuacao(document.getElementById('caracinput').value);
    let areatotal = document.getElementById('areatotalinput').value;
    let areaprivada = document.getElementById('areaprivadainput').value;
    let valor = document.getElementById('valorinput').value;

    let generate = `
${loc} - LAGOA SANTA/MG
${desc !== '' ? '\n' + desc + '\n' : ''}
Código do imóvel: ${cod}

CARACTERÍSTICAS PRINCIPAIS:

${carac !== '' ? '\n' + carac + '\n' : ''}

Área Total: ${areatotal} m²
Área Privada: ${areaprivada} m²
💰VALOR: R$ ${valor}

Agende uma visita hoje mesmo com nossa equipe:

📲(31) 9 9859 0590 / 3058-1600
Avenida Acadêmico Nilo Figueiredo, 3273, Santos Dumont II, Lagoa Santa/MG
    `;

    let area = document.getElementById('conteudo');
    area.value = generate;
}
