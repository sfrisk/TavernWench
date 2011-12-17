var left = 37;
var up = 38;
var right = 39;
var down = 40;
$(window).keypress(function(e){
	var keyCode = e.keyCode;

	if(keyCode == down){
		game.board.moveDown();
	}
	if(keyCode == up){
		game.board.moveUp();
	}
	if(keyCode == right){
		game.board.moveRight();
	}
	if(keyCode == left){
		game.board.moveLeft();
	}

})