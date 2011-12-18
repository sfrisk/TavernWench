function Board(){
	this.canvas = document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");
	
	
	this.PC = new Player("Tavern Wench", 5, 5, 10, [4,4]);
	this.NPC = new Player("NPC", 5, 3, 10, [5,5]);

	
	//find better way to do this
	this.map = 
	[
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	];
	this.TileMap = 
	[
	[4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3],
	[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
	[4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]
	];
	this.mapTiles = new Image();
	this.mapTiles.src = "lib/images/tile-map-large.png";
	this.playerTile = new Image();
	this.playerTile.src = "lib/images/people-map.png";
	this.statusPlayer = new Image();
	this.statusPlayer.src = "lib/images/status.png";
	
	
}

Board.prototype.clear = function(){
	this.ctx.clearRect(0,0, this.width, this.height);
}

Board.prototype.generateGrid = function(){
	for (var y = 0; y < this.map[0].length; y++){
		for (var x = 0; x < this.map.length; x++){
			this.drawTile(x,y);
		}
	}
}
//temporary
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
	else if(this.map[x][y] == 0)
	{
		var local=[y,x]
		if(this.NPC.y() == y && this.NPC.x() == x){
			
			return false;
		}
		else{
		
			return true;
		}
	}
	else
	{
		return false
	}	
}

Board.prototype.draw = function(){
	this.clear();
	this.generateGrid();
	this.drawCustomer();
	this.drawPlayer();
}

Board.prototype.drawPlayer = function(){
	this.drawRects(this.PC.y() * 32, this.PC.x() * 32, 32, 32, [100, 0, 100]);
	//this.ctx.drawImage(this.playerTile,0,16,16,16,this.PC.x() * 32,this.PC.y()*32,16,16); //feet
	//this.ctx.drawImage(this.playerTile,0,0,16,16,this.PC.x() * 32,(this.PC.y()-1)*32,16,16); //head
	
	this.drawStatus(this.PC.getHealth());
}

Board.prototype.drawStatus = function(health){
	for (var i = 0; i < health; i++)
	{
		this.ctx.drawImage(this.statusPlayer,0,0,16,16,(i * 20) + 20,10,16,16);
	}
}

Board.prototype.drawCustomer = function(){
	this.drawRects(this.NPC.x() * 32, this.NPC.y() * 32, 32, 32, [200, 0, 60]);	
}	

Board.prototype.drawTile = function(x,y)
{
	//console.log("["+x+", "+y+"] = " + this.map[x][y]);
		this.drawTileImage(x*32,y*32, this.TileMap[x][y]);	
	
}

Board.prototype.drawTileImage = function(x,y,pos)
{
	
	this.ctx.drawImage(this.mapTiles,pos*32,0,32,32,y,x,32,32);
}

Board.prototype.attack = function(){
	if(this.PC.rollAttack(this.NPC.getDefense()))
	{
		this.NPC.takeDamage(6); //roll six sided dice
	}
	if(this.NPC.rollAttack(this.PC.getDefense()))
	{
		this.PC.takeDamage(6); //roll six sided dice
	}
}

Board.prototype.drawRects = function(x,y,w,h,color){
	this.ctx.beginPath();
	this.ctx.fillStyle = 'rgb('+color[0]+', '+color[1]+', '+color[2]+')';
	this.ctx.rect(y,x,w,h);
	this.ctx.closePath();
	this.ctx.fill();
}