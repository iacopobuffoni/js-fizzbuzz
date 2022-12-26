const _htmlContainer = document.querySelector ('div.row');
const _htmlElement = document.createElement ('ul');
_htmlContainer.append(_htmlElement);
_htmlElement.classList.add ('list');


for (let n = 1; n <= 100; n++) {

    const _htmlContent = document.createElement ('li');
    _htmlContent.classList.add ('listelement');



    if (n % 3 == 0 && n % 5 == 0) {
        _htmlElement.append(_htmlContent);
        _htmlContent.innerHTML = 'FizzBuzz';
        _htmlContent.classList.add ('fizzbuzz');
        console.log('FizzBuzz');

    } else if (n % 3 == 0) {
        _htmlElement.append(_htmlContent);
        _htmlContent.innerHTML = 'Fizz';
        _htmlContent.classList.add ('fizz');
        console.log('Fizz');

    } else if (n % 5 == 0) {
        _htmlElement.append(_htmlContent);
        _htmlContent.innerHTML = 'Buzz';
        _htmlContent.classList.add ('buzz');
        console.log('Buzz');

    } else {
        _htmlElement.append(_htmlContent);
        _htmlContent.innerHTML = n;
        console.log(n);
    
    }

    

}




/*
const box = document.querySelector("div.col-12");

 
for (let index = 0; index < 10; index++) {
    // const element = `<li class="box box-${index}">${index}</li>`;
    // ul.innerHTML += element;
    
    //oppure cosa possiamo utilizzare per aggiungere elementi al DOM?
    const newLi = document.createElement('li');
    console.log('newLi', newLi, typeof newLi);
    newLi.innerHTML = `${index}`;
    newLi.className = `box box-${index}`;
    ul.append(newLi);
}
*/