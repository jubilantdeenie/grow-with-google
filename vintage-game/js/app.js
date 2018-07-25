
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 

}
 
// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
	this.x;
	this.y;
	this.speed;
	
	
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	
	
	
	if (this.x > 550 || this.x < -150) { 

			//newSpeed = getRandomIntInclusive(2, 8);
			
			if(this.speed < 0){
				this.speed = getRandomIntInclusive(2, 8);
			}
			else{
				this.speed = getRandomIntInclusive(-2, -8);
			}
			
			
		
	
			//this.speed = (0 - this.speed);
			
			
			
			//this.speed = this.speed * -1;
			//vary speed on return
			
	
		if (this.speed > 0) {
			this.sprite = 'images/enemy-bug.png';
		} else {
			this.sprite = 'images/enemy-bug2.png';
		}  
													
	}
	
	
	this.x += this.speed;
	
	
};




// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};






// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-princess-girl.png';
	this.x = 200;
	this.y = 400;
	this.speed = 0;
	
};

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
	
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	
	for (i = 0; i < allEnemies.length; i++) {
		if (Math.abs(player.x - allEnemies[i].x) <= 25 &&
			Math.abs(player.y - allEnemies[i].y) <= 25)  {
			player.x = 200;
			player.y = 400;
		}
	} 
	
	if (player.y <= 10) {
		
		let modal = document.getElementById('myModal');
		modal.style.display = 'block';
		
		let span = document.getElementById('close');
		

		console.log(span);
		console.log(modal);

		//	When the user clicks anywhere outside of the modal, close it
		span.onclick = function(event) {
			modal.style.display = 'none';
		}
		
		player.y = 400;
	
	}
	
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	
};

Player.prototype.handleInput = function(playerInput) {
	
	 if (playerInput == 'left' && this.x > 0) {
        this.x -= 5;
    }

    if (playerInput == 'right' && this.x < 405) {
        this.x += 5;
    }

    if (playerInput == 'up' && this.y > 0) {
        this.y -= 5;
    }

    if (playerInput == 'down' && this.y < 405) {
        this.y += 5;
    }

};



// Now instantiate your objects.

let allEnemies = [];

var enemy;

// x = -? off canvas  or > canvasR
// speed  > randomness    

for (i = 0; i < 10; i++){
	enemy = new Enemy();
	enemy.x = -150;
	enemy.speed = getRandomIntInclusive(2, 7);
	
	if (i <= 3){
		enemy.y = 60;
	}
	else if (i <= 6){
		enemy.y = 140;
	}
	else {
		enemy.y = 225;
	}
	
	if (i % 2){
		enemy.x = 550;
		enemy.sprite = 'images/enemy-bug2.png';
	}

	
	allEnemies.push(enemy);
}

//console.log(allEnemies);


// Place the player object in a variable called player

var player = new Player();




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

   player.handleInput(allowedKeys[e.keyCode]);
   
 }); 
 
 

 
 
 
 
		
 
 
 
 
 

 // Get the modal
//var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
/*span.onclick = function() {
    modal.style.display = "none";
}*/

// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
  //  if (event.target == modal) {
    //    modal.style.display = "none";
    //}
//} 
