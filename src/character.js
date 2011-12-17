function rollDice(min, max){
	Math.floor(Math.random() * (min - max + 1) + max);
}

function Player (name, health, defense, attack)
{
	this.nickname = name;
	this.health = health; //current health
	this.fullHealth = health; //full health
	this.defense = defense; //defense
	this.attack = attack; //attack
}

//Get Player States
Player.prototype.getHealth = function(){
	return this.health;
}

Player.prototype.getFullHealth = function(){
	return this.fullHealth;
}

Player.prototype.getDefense = function(){
	return this.defense;
}

Player.prototype.getAttack = function(){
	return this.defense;
}

//Attack
Player.prototype.rollAttack= function(defense){
	var attackRoll = Math.floor(Math.random()*20) + 1;
	defense += 10;
	if(attackRoll == 1){
		//Misses
		console.log(this.nickname + " misses horribly. (" + attackRoll + ") vs (" + defense + ")");
		return false;
	}
	else if (attackRoll == 20){
		//Critical Hit
		console.log(this.nickname + " hits.  Critical Hit! (" + attackRoll + ") vs (" + defense + ")");
		return true;
	}
	else{
		//Check For Hit
		attackRoll += this.getAttack();
		if(attackRoll > defense){
			console.log(this.nickname + " hits. (" + attackRoll + ") vs (" + defense + ")");
			return true;
		}
		else{
			console.log(this.nickname + " misses. (" + attackRoll + ") vs (" + defense + ")");
			return false;
		}
	}
	
}



//Health Change 
Player.prototype.takeDamage = function(min, max){
	damage = Math.floor(Math.random()*6) + 1;
	this.health -= damage;
	
	console.log(this.nickname + " takes " + damage + " damage. " + this.health + " hitpoints left." )
	if(this.health < 0){
		console.log(this.nickname + " Passed Out!");
	}
}