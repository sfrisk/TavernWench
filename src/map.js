function Map(src)
{
	this.src = src;
	this.init(this.src);
}

Map.prototype.init = function(){
	var map=this;
	$.getJSON(map.src, null, function(json){
		map.backgroundSource = new Image;
		map.backgroundSource.src = json.backgroundSource;
		map.cellWidth = json.cellWidth;
		map.dimensions = json.dimensions;
		map.collision = json.collision;
		map.backgroundLayer = json.backgroundLayer;
	});
}


Map.prototype.isEmpty = function(x,y){
	if (this.collision[x][y] == 0)
		return true;
	else
		return false;
}

Map.prototype.getWidth = function(){
	return this.backgroundLayer[0].length;
}

Map.prototype.getHeight = function(){
	return this.backgroundLayer.length;
}

Map.prototype.getPixelX = function(x){
	return x * this.cellWidth;
}

Map.prototype.getPixelY = function(y){
	return y * this.cellWidth;
}

Map.prototype.getSpriteX = function(pos){
	return (pos - (Math.floor(pos/this.dimensions[0]) * pos)) * this.cellWidth;
}

Map.prototype.getSpriteY = function(pos){
	return Math.floor(pos/this.dimensions[0]) * this.cellWidth;
}