const moment = require('moment');
const random = require('random-number');

const cidades = [
    { "cidade": "Francisco Beltrão", "populacao": 91093 },
    { "cidade": "Pato Branco", "populacao": 82881 },
    { "cidade": "Vizinhos", "populacao": 40641 },
    { "cidade": "Coronel Vivida", "populacao": 20932 },
    { "cidade": "Santo Antônio do Sudoeste", "populacao": 20031 },
    { "cidade": "Chopinzinho", "populacao": 19327 },
    { "cidade": "Capanema", "populacao": 19152 },
    { "cidade": "Ampére", "populacao": 19049 },
    { "cidade": "Realeza", "populacao": 16922 },
    { "cidade": "Mangueirinha", "populacao": 16868 },
    { "cidade": "Clevelândia", "populacao": 16789 },
    { "cidade": "Salto do Lontra", "populacao": 14797 },
    { "cidade": "Santa Izabel do Oeste", "populacao": 14659 },
    { "cidade": "Marmeleiro", "populacao": 14320 },
    { "cidade": "Planalto", "populacao": 13620 },
    { "cidade": "Itapejara d'Oeste", "populacao": 11964 },
    { "cidade": "Nova Prata do Iguaçu", "populacao": 10548 },
    { "cidade": "São João", "populacao": 10241 },
    { "cidade": "Barracão", "populacao": 10219 },
    { "cidade": "São Jorge d'Oeste", "populacao": 9050 },
    { "cidade": "Verê", "populacao": 7340 },
    { "cidade": "Renascença", "populacao": 6838 },
    { "cidade": "Vitorino", "populacao": 6827 },
    { "cidade": "Mariópolis", "populacao": 6581 },
    { "cidade": "Enéas Marques", "populacao": 5996 },
    { "cidade": "Saudade do Iguaçu", "populacao": 5427 },
    { "cidade": "Pranchita", "populacao": 5157 },
    { "cidade": "Nova Esperança do Sudoeste", "populacao": 5046 },
    { "cidade": "Flor da Serra do Sul", "populacao": 4624 },
    { "cidade": "Cruzeiro do Iguaçu", "populacao": 4263 },
    { "cidade": "Salgado Filho", "populacao": 3580 },
    { "cidade": "Bom Jesus do Sul", "populacao": 3541 },
    { "cidade": "Bom Sucesso do Sul", "populacao": 3237 },
    { "cidade": "Sulina	", "populacao": 2981 },
    { "cidade": "Manfrinópolis", "populacao": 2605 },
    { "cidade": "Boa Esperança do Iguaçu", "populacao": 2503 },
];

console.log('dtregistro;municipio;confirmados;suspeitos;obtidos');

cidades.forEach(cidade => {
    var data = moment(new Date('2020/01/20'));
    const hoje = moment(new Date());

    while (data <= hoje) {
        // confirmado: de 0.5% a 2% do total da populacao
        var confirmados = Math.round(cidade.populacao * random({ min: 0.05, max: 0.2 }) / 100);

        // suspeito: de 60% a 100% a mais do que confirmados
        var suspeitos = Math.round(confirmados * random({ min: 1.6, max: 2 }));

        // obtidos: de 0% a 3% dos confirmados
        var obtidos = Math.round(confirmados * random({ min: 0, max: 0.03 }));

        console.log(`${data.format('DD-MM-YYYY')};${cidade.cidade};${confirmados};${suspeitos};${obtidos}`);

        data.add(1, 'days');
    }
})