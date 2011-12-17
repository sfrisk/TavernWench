function Board(){
	this.canvas = document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");
	this.player = [10,10];
	//find better way to do this
	this.map = 
	[
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	];
	this.mapTiles = new Image();
	this.mapTiles.src = "lib/images/tile-map.png";
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
	this.player = [x,y];
}

 Board.prototype.moveUp = function(){
	
 	if(this.map[this.player[1] - 1][this.player[0]] == 0)
 	{
 		this.setPlayer(this.player[0], this.player[1] - 1);
	
 	}
 }
 
 
Board.prototype.moveDown = function(){
 if(this.map[this.player[1] + 1][this.player[0]] == 0)
 	{
		this.setPlayer(this.player[0], this.player[1] + 1);
 	}
}

Board.prototype.moveLeft = function(){
if(this.map[this.player[1]][this.player[0] - 1] == 0)
	{
		this.setPlayer(this.player[0] - 1, this.player[1]);
 	}
}

Board.prototype.moveRight = function(){
if(this.map[this.player[1]][this.player[0] + 1] == 0)
	{
	
		this.setPlayer(this.player[0] + 1, this.player[1]);
 	}
 }

Board.prototype.draw = function(){
	this.clear();
	this.generateGrid();
	this.drawPlayer();
}

Board.prototype.drawPlayer = function(){
	this.drawRects(this.player[1] * 16, this.player[0] * 16, 16, 15, [200, 0, 60]);
}


Board.prototype.drawTile = function(x,y)
{
	//console.log("["+x+", "+y+"] = " + this.map[x][y]);
	if(this.map[x][y] == 0)
	{
		this.drawTileImage(x*16,y*16);
	}
	
	else if (this.map[x][y] == 1){
		this.drawRects(x*16,y*16,16,16,[100,0,100]);	
	}
}

Board.prototype.drawTileImage = function(x,y)
{
	this.ctx.drawImage(this.mapTiles,0,0,16,16,y,x,16,16);
}

Board.prototype.drawRects = function(x,y,w,h,color){
	this.ctx.beginPath();
	this.ctx.fillStyle = 'rgb('+color[0]+', '+color[1]+', '+color[2]+')';
	this.ctx.rect(y,x,w,h);
	this.ctx.closePath();
	this.ctx.fill();
}