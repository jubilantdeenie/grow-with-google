
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
	this.y = 430;
	this.speed = 0;
	
};

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
	
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
	console.log(this.sprite);
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	
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
		enemy.speed = 7;
	}
	else if (i <= 6){
		enemy.y = 140;
		enemy.speed = 5;
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

//player.render();

console.log(player);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

   player.handleInput(allowedKeys[e.keyCode]);
 }); 
