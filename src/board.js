function Board(){
	this.canvas = document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");
	this.width = 800;
	this.height= 320;
	
	
	
	this.PC = new Player("Tavern Wench", 15, 5, 10, [4,4]);
	this.NPC = new Player("NPC", 5, 3, 10, [5,5]);
	this.map = new Map("lib/map.json");
	this.playerTile = new Image;
	this.playerTile.src = "lib/images/dummy-art.png";
	
	this.badTile = new Image;
	this.badTile.src = "lib/images/kefka.png";
	
	this.statusPlayer = new Image;
	this.statusPlayer.src = "lib/images/status.png";
	
}
Board.prototype.draw = function(){
	this.clear();
	this.generateGrid();
	this.drawCustomer();
	this.drawPlayer();
}


Board.prototype.clear = function(){
	this.ctx.clearRect(0,0, this.width, this.height);
}

Board.prototype.generateGrid = function(){
	for (var y = 0; y < this.map.getWidth(); y++){
		for (var x = 0; x < this.map.getHeight(); x++){
			this.drawTile(x,y);
		}
	}
}
Board.prototype.setPlayer = function(x,y){
	this.PC.setLocation(x,y);
}



Board.prototype.moveUp = function(){
	if(this.checkCollision(this.PC.y() - 1, this.PC.x() ))
 	{
 		this.setPlayer(this.PC.x(), this.PC.y() - 1);
	
 	}
 }
 
 
Board.prototype.moveDown = function(){
	if(this.checkCollision(this.PC.y() + 1, this.PC.x() ))
 	{
		this.setPlayer(this.PC.x(), this.PC.y() + 1);
 	}
}

Board.prototype.moveLeft = function(){
	if(this.checkCollision(this.PC.y(), this.PC.x() - 1))
	{
		this.setPlayer(this.PC.x() - 1, this.PC.y());
 	}
}

Board.prototype.moveRight = function(){
	if(this.checkCollision(this.PC.y(), this.PC.x() + 1))
	{
	
		this.setPlayer(this.PC.x() + 1, this.PC.y());
 	}
 }



Board.prototype.checkCollision = function(x,y){
	
	if(x < 0 || y < 0){
		return false;
	}
	else if(this.map.isEmpty(x,y))
	{
		if(this.NPC.y() == y && this.NPC.x() == x)
			return false;
		else
			return true;
	}
	else
	{
		return false
	}	
}



Board.prototype.drawPlayer = function(){

	this.ctx.drawImage(this.playerTile,0,0,64,64,this.PC.x() * this.map.cellWidth  - (this.map.cellWidth/2),(this.PC.y()-1)*this.map.cellWidth,64,64); 
	this.drawStatus(this.PC.getHealth());
}

Board.prototype.drawCustomer = function(){
	this.ctx.drawImage(this.badTile,0,0,64,64,this.NPC.x() * this.map.cellWidth,(this.NPC.y()-1)*this.map.cellWidth,64,64);
}

Board.prototype.drawStatus = function(health){
	for (var i = 0; i < health; i++)
	{
		this.ctx.drawImage(this.statusPlayer,0,0,16,16,(i * 20) + 20,280,16,16);
	}
}

//will work on this later, need to be able to draw multiple times on a layer (background + props?)
Board.prototype.drawTile = function(x,y)
{
	var pos = this.map.backgroundLayer[x][y];
	this.ctx.drawImage(this.map.backgroundSource,this.map.getSpriteX(pos),this.map.getSpriteY(pos),this.map.cellWidth,this.map.cellWidth,this.map.getPixelY(y),this.map.getPixelX(x),this.map.cellWidth,this.map.cellWidth);
	
}

Board.prototype.attack = function(){
	//check for PC near NPC
	if (this.PC.near(this.NPC.loc)){
		//attack
		if(this.PC.rollAttack(this.NPC.getDefense()))
		{
			this.NPC.takeDamage(6); //roll six sided dice
		}
		if(this.NPC.rollAttack(this.PC.getDefense()))
		{
			this.PC.takeDamage(6); //roll six sided dice
		}
	}
	textReadout.after("<p>No customer next to you.<p>");
	
	
}

Board.prototype.drawRects = function(x,y,w,h,color){
	this.ctx.beginPath();
	this.ctx.fillStyle = 'rgb('+color[0]+', '+color[1]+', '+color[2]+')';
	this.ctx.rect(y,x,w,h);
	this.ctx.closePath();
	this.ctx.fill();
}