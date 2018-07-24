
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
	
	if (this.x > 400 || this.x < 0) {
			this.speed = (0 - this.speed);
	}
			/*this.speed = 100 + Math.floor(Math.random() * 222);
	
	
	if (player.x < this.x + 80 &&
		player.x + 80 > this.x &&
		player.y < this.y + 60 &&
		60 + player.y > this.y) {
		player.x = 202;
		player.y = 405; */
	
	this.x += this.speed;
	//this.x -= this.speed;
	//console.log(this.speed);
	//console.log(this.x);
	
	
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
		document.getElementById('myModal').style.display = 'block';
	
		console.log('winner');
		
		// Get the <span> element that closes the modal
		let span = document.getElementsByClassName("close")[0];


	//	When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
		}
	}
} 
	
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
	console.log(this.sprite);
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

for (i = 0; i < 10; i++){
	enemy = new Enemy();
	enemy.x = 5;
	//enemy.y = 60;
	
	if (i <= 3){
		enemy.y = 60;
		enemy.speed = 3;
	}
	else if (i <= 6){
		enemy.y = 140;
		enemy.speed = 3;
	}
	else {
		enemy.y = 225;
		enemy.speed = 3;
	}
	
	if (i % 2){
		enemy.x = 400
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
var modal = document.getElementById('myModal');

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
