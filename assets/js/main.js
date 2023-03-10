//Richiamo la lista
const ulElement = document.querySelector('ul');

for (let i = 1; i<= 100; i++){
    console.log(i);

    const liElement = `<li class = "box list-unstyled border">${i}</li>`;

    // Stampo in pagina gli elementi della lista

    ulElement.insertAdjacentHTML ('beforebegin', liElement);
}
