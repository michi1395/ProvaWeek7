function selezionaLibri() {

    let libri = document.querySelectorAll('input[type=checkbox]:checked');

    let listaLibri = document.getElementById("listaLibri");



    if (libri.length == 0)
        return 0.00;

    listaLibri.innerText = '';
    let somma = 0;
    for (let i = 0; i < libri.length; i++) {
        let titolo = libri[i].name + 'N';

        let libroInfo = document.getElementsByName(titolo);
        
        let a = parseFloat(libri[i].value);
        let b = parseInt(libroInfo[0].value);

        somma = somma + a*b;
    }
    listaLibri.innerText = 'Totale: ' + somma + ' €';


}

function confermaIscrizione() {
    let nome = document.getElementById("nome");
    let cognome = document.getElementById("cognome");
    let email = document.getElementById("email");
    let frequenza = document.getElementById("frequenzaRicezione");

    let message = 'I tuoi dati sono: \nNome :' + nome.value + '\nCognome : ' + cognome.value +
        '\n Email : ' + email.value + '\nCon frequenza ricezione' + frequenza.value;
    let answer = confirm(messege);
}