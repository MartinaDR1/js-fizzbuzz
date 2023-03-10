//Richiamo l'elemento
const numElement = document.getElementById('number');

for (let i = 1; i<= 100; i++){
   
  switch (true) {
    // numeri divisibili per 3 e 5

    case i % 3 == 0 && i % 5 === 0:
      numElement.innerHTML += `<div class="box bg-danger">FizzBuzz</div>`;
    break;

    // numeri divisibili per 3

    case i % 3 == 0:
      numElement.innerHTML += `<div class="box bg_mod3">Fizz</div>`;
    break;

    // numeri divisibili per 5

    case i % 5 == 0:
      numElement.innerHTML += `<div class="box bg-warning">Buzz</div>`;
    break;

    // tutti i numeri da 1 a 100

    default:
      numElement.innerHTML += `<div class="box">${i}</div>`;
    break;
  }

    
}
