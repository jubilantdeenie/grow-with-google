/*
 * Create a list that holds all of your cards
 
 - reset misses and match set to 0 for timer
 - remove modal button
 - fix double click on same card
 - remove image from modal 
 
 */
 
 // Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



let deck = ['fa-diamond', 'fa-diamond', 'fa-paper-plane-o', 'fa-paper-plane-o', 'fa-anchor', 'fa-anchor', 'fa-bolt', 'fa-bolt', 'fa-cube', 'fa-cube', 'fa-leaf', 'fa-leaf', 'fa-bicycle', 'fa-bicycle', 'fa-bomb', 'fa-bomb'];
let deal = shuffle(deck);


 let clickCount = 0; 
 
 let turnCount = 0;
  
 let matchCount = 0;

 let cardOne;
 
 let pickOne;
 
 let start;
 
 let finish;
 
 let time;
 
 let starRate;
   
  
 let cards = document.querySelectorAll('.deck li');
 //console.log(cards);
 

for (i = 0;i < 16; i++){

	let shuffle = cards[i].childNodes[1];
	shuffle.classList.add(deal[i]);
	
	console.log(shuffle);
	
}
 
 start = performance.now();

	for (i = 0; i < cards.length; i++) {
		
		let card = cards[i];
			
		card.addEventListener ('click', function(event) {
		
			clickCount += 1;
			
			this.classList.add('show');
						
			
			if (clickCount == 1) {
				cardOne = this;
				pickOne = cardOne.childNodes[1].classList;
				cardOne.classList.add('open');			
			}
			
			if (clickCount == 2) {
				
				cardTwo = this;
				let pickTwo = cardTwo.childNodes[1].classList;
				
				cardTwo.classList.add('open');
				
								
				if(pickOne[1] == pickTwo[1]){
								
					cardTwo.classList.add('match');
									
					cardOne.classList.add('match');
									
					matchCount += 1;
				
					document.getElementsByClassName('matches')[0].textContent= (matchCount);
					
					
					if (matchCount == 1) {
						finish = performance.now();	

						let totalSeconds = ((finish - start)/1000).toFixed(0);
						
						let minutes = (totalSeconds/60).toFixed(0);

						let seconds = totalSeconds % 60;

						time = minutes + ":" + seconds;
						

						let testVar = document.getElementsByClassName('timer');
						
						testVar[0].textContent = ('Time: ' + time + ' seconds');
						testVar[1].textContent = ('Time: ' + time + ' seconds');
						
						
						//display popup 
						document.getElementById('myModal').style.display = 'block';	
												
						//resetDeck();
						
						//clearCards = cards[i].classList.remove('show', 'open', 'match');
						
						//shuffle();
					}
						
				}	
				else {
					
					window.setTimeout(resetCards, 432);
					
					function resetCards(){
						
						cardTwo.classList.remove('open', 'show');
						cardOne.classList.remove('open', 'show');
						
						turnCount += 1;
						
						//display turnCount
										
						document.getElementsByClassName('moves')[0].textContent= (turnCount);
						document.getElementsByClassName('moves')[1].textContent= (turnCount);
										
						let starRate = document.getElementsByClassName('fa-star');

						if (turnCount == 3) {
							
							starRate[2].style.visibility = 'hidden';	
							starRate[5].style.visibility = 'hidden';	
						}
						if (turnCount == 6) {
							
							starRate[1].style.visibility = 'hidden'; 
							starRate[3].style.visibility = 'hidden'; 
						}							
					}										
				}
				clickCount = 0;						
		}
	});
}

let restart = document.getElementsByClassName('restart');

restart[0, 1].addEventListener('click', function(event){
	resetDeck();
});
	
function resetDeck(){
	for (i = 0; i < cards.length; i++) {
		cards[i].classList.remove('show', 'open', 'match');	
		//window.setTimeout(resetDeck, 1000);
	}
	matchCount = 0;
	turnCount = 0;
	clickCount = 0;			
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/*//display moves
const displayMoves = document.createDocumentFragment();

if (matchCount == 0) {
	let testVar = document.getElementsByClassName('moves')[0];
	testVar.appendChild(displayMoves);
	//console.log(testVar);
}

//console.log(displayMoves); */






/*reset.addEventListener("click", function(){
    document.querySelector(".deck").innerHTML = "";
    movesCounter.textContent= "0";
    start();
}); */


	
				//var n = str1.localeCompare(str2);
				// let match = pickOne.localeCompare(pickTwo);
				//var res = str.match(/ain/g);
				// if match then this.classList.add('open');


				//store classes of this in a variable2
		
				// if variable1(the values of?) = variable2   <-- console log to see what they look like <--how to compare?
						//if (Object.is(value1, value2)) <-- might work
					//console log match
				//else
					//console log miss
					
				
			//	clickCount = 0;
					
		//	}
		
		
			//card.classList.toggle('open'); 
			//card.classList.toggle('show'); 
		

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */



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
