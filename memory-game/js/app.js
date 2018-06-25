/*
 - remove modal button
 - write readme
 - break points

 
 */
 
 // Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

let grinder="https://cdn0.iconfinder.com/data/icons/coffee-brewing-glyph/16/7-512.png";
let chemex="https://cdn2.iconfinder.com/data/icons/barista/256/barista-icons_chemex-512.png";
let plant="https://cdn1.iconfinder.com/data/icons/barista/256/barista-icons_coffea-arabica-512.png";
let house="https://cdn1.iconfinder.com/data/icons/barista/256/barista-icons_coffee-shop-sign-512.png";
let cup="https://cdn2.iconfinder.com/data/icons/barista/256/barista-icons_coffee-to-go-512.png";
let espresso="https://cdn2.iconfinder.com/data/icons/barista/256/barista-icons_espresso-machine-with-cup-512.png";
let perk="https://cdn2.iconfinder.com/data/icons/barista/256/barista-icons_espresso-maker-512.png";
let press="https://cdn2.iconfinder.com/data/icons/barista/256/barista-icons_french-press-512.png";

let deck = [grinder, grinder, chemex, chemex, plant, plant, house, house, cup, cup, espresso, espresso, perk, perk, press, press]

//let deck = ['fa-diamond', 'fa-diamond', 'fa-paper-plane-o', 'fa-paper-plane-o', 'fa-anchor', 'fa-anchor', 'fa-bolt', 'fa-bolt', 'fa-cube', 'fa-cube', 'fa-leaf', 'fa-leaf', 'fa-bicycle', 'fa-bicycle', 'fa-bomb', 'fa-bomb'];

let deal = shuffle(deck);

 
 let clickCount = 0; 
 
 let turnCount = 0;
  
 let matchCount = 0;

 let cardOne;
 
 let cardTwo;
 
 let pickOne;

 let resetClick;
 
 let icon;
 
 let displayTime;
 
 let stopwatch = document.getElementsByClassName('timer');
 
 let start;
 
 let finish;
 
 let time;
 
 let starRate = document.getElementsByClassName('fa-star');
    
 let clearCards;
 
 let game;
 
 let cards = document.querySelectorAll('.deck li');
 //console.log(cards);
 
 
 play(cards, deal); 
 

	for (i = 0; i < cards.length; i++) {
		
		let card = cards[i];
			
		card.addEventListener ('click', function(event) {
			
			
			
		
		if(!game){
			start = performance.now();
			
			game = true;
	
			displayTime = setInterval(startDisplay, 1000);


		}
		
		clickCount += 1; 		
		
		
		this.classList.add('flip-2-hor-bottom-1');
		
		console.log(this);
		
		this.childNodes[1].style.visibility = 'visible';
							
		
		if (clickCount == 1) {
			
			cardOne = this;
			
			pickOne = cardOne.childNodes[1].src;
			
			cardOne.classList.add('open');	
			
			this.style.pointerEvents = "none";			
		}

		
		if (clickCount == 2 && this != cardOne) {     
			
			cardTwo = this;
			
			let pickTwo = cardTwo.childNodes[1].src;  
			
			cardTwo.classList.add('open');
							
			if(pickOne == pickTwo){
							
				cardTwo.classList.add('match');
								
				cardOne.classList.add('match');
				
				console.log('match');
								
				matchCount += 1;
			
				document.getElementsByClassName('matches')[0].textContent= (matchCount);
				
				this.style.pointerEvents = "auto";
				
				clickCount = 0;
		
			}
			
				
				
			if (matchCount == 3) {
							
				game = false;
				
				stopwatch[1].textContent = ('Time ' + time + ' seconds');
				
				//display popup 
				document.getElementById('myModal').style.display = 'block';	
				
				starRate[3].classList.add('rotate-scale-up');
				console.log(starRate[4]);
				starRate[4].classList.add('rotate-scale-up');
				starRate[5].classList.add('rotate-scale-up');
				
				resetDeck();
				
			}
						
			else {
				
				
				window.setTimeout(resetCards, 1000);
				
				function resetCards(){
					
					// 2adds?......
					cardOne.classList.add('flip-2-hor-bottom-2');
					cardTwo.classList.add('flip-2-hor-bottom-2');
					
					console.log(cardOne);
					console.log(cardTwo);
					
					cardTwo.classList.remove('open', 'show');
					cardOne.classList.remove('open', 'show');
					
					cardTwo.childNodes[1].style.visibility = 'hidden';
					cardOne.childNodes[1].style.visibility = 'hidden';

					
					window.setTimeout(removeAnimation, 300);
				
					function removeAnimation() {
						
						cardOne.classList.remove('flip-2-hor-bottom-2','flip-2-hor-bottom-1');
						cardTwo.classList.remove('flip-2-hor-bottom-2', 'flip-2-hor-bottom-1');
					
					}
				
					console.log(cardOne);
					console.log(cardTwo);
					
					
					cardOne.style.pointerEvents = "auto";
					
					turnCount += 1;
					
					//display turnCount
									
					document.getElementsByClassName('moves')[1].textContent= (turnCount);
					document.getElementsByClassName('moves')[0].textContent= (turnCount);
									

					if (turnCount == 4) {
						
						starRate[2].style.visibility = 'hidden';	
						starRate[5].style.visibility = 'hidden';	
					}
					if (turnCount == 8) {
						
						starRate[1].style.visibility = 'hidden'; 
						starRate[3].style.visibility = 'hidden'; 
					}							
				}										
			}
			clickCount = 0;		
		} else {
			clickCount = 1;
		}
	});
}
	
function resetDeck(){
	for (i = 0; i < cards.length; i++) {
		cards[i].classList.remove('show', 'open', 'match');
		cardTwo.childNodes[1].style.visibility = 'hidden';
		cardOne.childNodes[1].style.visibility = 'hidden';
		//window.setTimeout(resetDeck, 1000);
	}
	
	document.getElementsByClassName('matches')[0].textContent= ('');
	document.getElementsByClassName('moves')[0].textContent= ('');
	document.getElementsByClassName('timer')[0].textContent= ('Time:');
	
	matchCount = 0;
	turnCount = 0;
	clickCount = 0;	
	
	clearInterval(displayTime);
	console.log('resetDeck');
	
	deal = shuffle(deck);
	play(cards, deal);
	
}

let restart = document.getElementsByClassName('fa-repeat');

console.log(restart);


for(i = 0; i < 2; i++){		
	restart[i].addEventListener('click', function(event){
		resetDeck();
		modal.style.display = "none";
		clearInterval(displayTime);
		console.log('eventListener');
	});
}


function play(cards, deal){

	for (i = 0;i < 16; i++){

		let shuffle = cards[i].childNodes[1];
	
		shuffle.src = deal[i];
		
		shuffle.style.visibility = 'hidden';
		
		console.log('shuffle');
				
	}
}

function startDisplay() {
			
	currentTime = performance.now();	
		
	let totalSeconds = ((currentTime - start)/1000).toFixed(0);
	
	let minutes = (totalSeconds/60).toFixed(0);

	let seconds = totalSeconds % 60;

	time = minutes + ":" + seconds;
	
	stopwatch[0].textContent = ('Time ' + time);
}







/* function startDisplay(){
	if(game == true){
	
		window.setTimeout(displayTime, 1000);
		function displayTime(){
			
			currentTime = performance.now();	
				
			
			let totalSeconds = ((currentTime - start)/1000).toFixed(0);
			
			let minutes = (totalSeconds/60).toFixed(0);

			let seconds = totalSeconds % 60;

			time = minutes + ":" + seconds;
		
			
			console.log('tick');
			stopwatch[0].textContent = ('Time ' + time + ' seconds');
		}
	}
}

*/




// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


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

























/*


//display moves
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
