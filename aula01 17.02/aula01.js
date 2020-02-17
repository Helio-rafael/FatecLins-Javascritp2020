function mudatexto()
{
    console.log('entrei na função muda texto()');
/* alert ('minha função mudatexto()'); */
// Como Acessar um elemento de nosso HTML?
// Classe DOCUMENT tem acesso a toda estrutura da nossa arvores do DOM do HTML 


var elementoP = document.getElementById('info');
console.log('Estrutura do elemento p',elementoP);

elementoP.innerHTML = 'Novo texto Birl JS!';
document.getElementById('infoP').innerHTML = 'TROCADO';

console.log(' sai do muda texto ()');
}