function Player (name, health, defense, attack, location)
{
	this.nickname = name;
	
	this.health = health; //current health
	this.fullHealth = health; //full health
	this.defense = defense; //defense
	this.attack = attack; //attack
	this.loc = location;
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

Player.prototype.x = function(){
	return this.loc[0];
}

Player.prototype.y = function(){
	return this.loc[1];
}

Player.prototype.setLocation = function(x,y){
	this.loc = [x,y];
}

Player.prototype.near = function(loc){
	
	var x = Math.abs(this.loc[1] - loc[1]);
	var y = Math.abs(this.loc[0] - loc[0]);
	if(x == 0 && y == 1)
		return true;
	else if( x == 1 && y == 0)
		return true;
	else
		return false;
}

//Attack
Player.prototype.rollAttack= function(defense){
	var attackRoll = Math.floor(Math.random()*20) + 1;
	defense += 10;
	if(attackRoll == 1){
		//Misses
		textReadout.after("<p>"+this.nickname + " misses horribly. (" + attackRoll + ") vs (" + defense + ")"+"<p>");
		return false;
	}
	else if (attackRoll == 20){
		//Critical Hit
		textReadout.after("<p>"+ this.nickname + " hits.  Critical Hit! (" + attackRoll + ") vs (" + defense + ")"+"<p>");
		return true;
	}
	else{
		//Check For Hit
		attackRoll += this.getAttack();
		if(attackRoll > defense){
			textReadout.after("<p>"+this.nickname + " hits. (" + attackRoll + ") vs (" + defense + ")"+"<p>");
			return true;
		}
		else{
			textReadout.after("<p>"+this.nickname + " misses. (" + attackRoll + ") vs (" + defense + ")"+"<p>");
			return false;
		}
	}
	
}



//Health Change 
Player.prototype.takeDamage = function(min, max){
	damage = Math.floor(Math.random()*6) + 1;
	this.health -= damage;
	
	textReadout.after("<p>"+this.nickname + " takes " + damage + " damage. " + this.health + " hitpoints left.</p>" )
	if(this.health <= 0){
		textReadout.after("<p>"+this.nickname + " Passed Out!</p>");
		this.setLocation(-10,-10);
	}
}