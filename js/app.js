/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
//  */
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;

    while (currentIndex !== 0) {
  
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        array[currentIndex] = array[currentIndex];
    }
    return array;
}
let moves = 0;
function shuffelCards() {
    let j = document.querySelectorAll('.card i');
    let allLi = document.querySelectorAll('.card');
    let allCards = document.querySelector('.deck'); 
    let arrayToShuffel = [];
   // console.log(j);
    for(let i = 0; i < j.length; i++) {
        arrayToShuffel.push(j[i].getAttribute('data-id'));
    }
    let shuffeledArray = shuffle(arrayToShuffel);
   // console.log(shuffeledArray); // shuffeledArray by shuffel function. for data-id
    for(let i = 0; i < j.length; i++) {
        for(let k = 0; k < j.length; k++) {
            if(j[k].getAttribute('data-id') == shuffeledArray[i]) {
                let copy = allLi[k].cloneNode(true);
                allCards.appendChild(copy);        
            }
        }

    }
    //console.log(j);
    let allLiAfterAdding = document.querySelectorAll('.card');
    for(let i = 0; i < 16; i++) {
        allLiAfterAdding[i].remove();
    }
    // for moves to set to 0;
    document.querySelector('.moves').textContent = 0;
        
}

function removeClasses() {
    let removeClass = document.querySelectorAll('.card');
    for(let i = 0; i < removeClass.length; i++) {
        if(removeClass[i].classList.contains('open')) {
        removeClass[i].classList.remove('open');
        }
        if(removeClass[i].classList.contains('show')) {
            removeClass[i].classList.remove('show');
        }
        if(removeClass[i].classList.contains('match')) {
            removeClass[i].classList.remove('match');
        }
        removeClass[i].style.backgroundColor = null;
    }

}
function addStars() {
    moves = 0;
    console.log(moves);
    let marginFor = document.querySelector('.stars').children.length;
    let star = document.querySelector('.stars').children[0].cloneNode(true);
    console.log(star);
    for(let i = document.querySelector('.stars').children.length; i < 5; i++) {
        console.log(i);
        let temp = star.cloneNode(true);
        document.querySelector('.stars').appendChild(temp);
        
    }
    temp = null;
    stars = 5;
}

removeClasses();
shuffelCards(); // on loading shuffel the cards.
addStars();

const newGame = document.querySelector('.restart');
newGame.addEventListener('click', function() {  // on restart..
    removeClasses(); //removing existing classes.
    shuffelCards();
    moves = 0;
    addStars();
});

const deligatorUl = document.querySelector('.deck');
let counter = 0;
let tempData1 = '';
let tempLi1 = ''; // li of target for first click..
let tempData2 = '';
let tempLi2 = '';

let moveClass = document.querySelector('.moves');
moveClass.textContent = moves;
stars = 5;
let reduceStars = document.querySelector('.stars');
let allMatch = 0;

deligatorUl.addEventListener('click', function(e) {
    
   
    if(e.target.nodeName === 'LI' && !(e.target.classList.contains('open') || e.target.classList.contains('show'))) {
        // checking to see if target is clicked already or not..
        counter++;        
        if(counter == 1) {
            tempData1 = e.target.children[0].getAttribute('class');
            e.target.classList.add('open');
            e.target.classList.add('show');
            tempLi1 = e.target;    
        }
  
        //e.target.children[0].getAttribute('class) for selecting class of clicked i.
        if(counter == 2) {
            e.target.classList.add('open');
            e.target.classList.add('show'); 
            tempData2 = e.target.children[0].getAttribute('class')
            tempLi2 = e.target;
           // console.log(counter);
            counter = 0;     
            setTimeout( function() {
                if(tempData1 == tempData2) {
                   // console.log(tempData1 + tempData2);
                    tempLi1.style.backgroundColor = 'yellow';
                    tempLi2.style.backgroundColor = 'yellow';
                    allMatch ++;
                            
                    console.log(allMatch + 'matches are');
                    if(allMatch == 8) {
                        swal({
                            title: "Good job!",
                            text: "You have won.",
                            icon: "success",
                          });
                    
                    }
                    tempLi1 = '';
                    tempLi2 = '';
                    
                }   else {
                    tempLi1.classList.remove('open');
                    tempLi1.classList.remove('show');
                    tempLi2.classList.remove('open');
                    tempLi2.classList.remove('show');
                    tempLi1 = '';
                    tempLi2 = '';
                } 
            }, 500);
        }   
        moves++;        
        moveClass.textContent = `${moves}`;
        //console.log(moves);
        if(parseInt(moves) == 20) {
            document.querySelector('.stars').children[0].remove();
            stars--;
        }
        if(parseInt(moves) == 24) {
            document.querySelector('.stars').children[0].remove();
            stars--;
        }
        if(parseInt(moves) == 28) {
            document.querySelector('.stars').children[0].remove();
            stars--;
        }
        if(parseInt(moves) == 31) {
            document.querySelector('.stars').children[0].remove();
            stars--;
        }
        

    }    
});

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */










