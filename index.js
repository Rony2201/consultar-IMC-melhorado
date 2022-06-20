const form = document.querySelector('#form'); // Capturar evento de submit do formulário 

form.addEventListener ('submit', function (e) { // Preneviu o default 
    e.preventDefault ();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');  // capturar dados dos inputs

    const peso = Number(inputPeso.value); // converter para number
    const altura = Number(inputAltura.value);

    if(!peso) {
        setResultado('Peso inválido', false); // se o peso nao for verdadeiro retorna setResultado
        return;
    }
    if(!altura) {
        setResultado('Altura inválida', false);
        return;
    }
    const imc = getImc(peso,altura);  // pegar o imc
    const nivelImc = getNivelImc(imc); // pegar nivel do imc
    
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;  // criar mensagem 
    setResultado(msg, true);
});

function getNivelImc(imc) {  //cria função para nivel de imc
    
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau I',
'Obesidade grau II', 'Obesidade grau III'];

    if (imc >= 39.9) return nivel[5];

    if (imc >= 34.9) return nivel[4];

    if (imc >= 29.9) return nivel[3];

    if (imc >= 24.9) return nivel[2];
    
    if (imc >= 18.5) return nivel[1];

    if (imc < 18.5) return nivel[0];

}

function getImc(peso,altura) {
    const imc = peso / altura ** 2; //cria função para calcular imc
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p'); //cria função para criar um paragrafo
    return p;

}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado'); // adiciona uma constante resultado do HTML
    resultado.innerHTML = ''; 

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}