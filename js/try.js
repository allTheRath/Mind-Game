
// first try..
// let cards = document.querySelectorAll('.card');
// let arrayOfPosition = [];
// for(let i = 0; i < cards.length; i++) {
//     let tempId = parseInt(cards[i].getAttribute('id'));
//     arrayOfPosition.push(tempId);
//     console.log(arrayOfPosition[i] + 'arrayOfPosition.push(parseInt(tempId))')
// }
// let shuffeledPosition = shuffle(arrayOfPosition);
// console.log(shuffeledPosition + 'shuffeledPosition');
// let getInnerHTML = [];
// for(let i = 0; i < cards.length; i++) {
//     console.log(cards[i].innerHTML);
//     getInnerHTML.push(cards[i].innerHTML);
// }
// console.log(getInnerHTML + 'getting inner html of li');
// let setInnerHTML = []; 
// for(let i = 0; i < shuffeledPosition.length; i++) {
//     setInnerHTML.push(getInnerHTML[shuffeledPosition]); // creating array for setting depending on shuffeled position.

// }
// console.log(setInnerHTML + 'setInnerHTML');
// // setInnerHTML elements to cards..
// for(let i = 0; i < cards.length; i++) {
//     console.log(cards[i].innerHTML + "before");
//     cards[i].innerHTML = setInnerHTML[i];
//     console.log(cards[i].innerHTML + "after");
