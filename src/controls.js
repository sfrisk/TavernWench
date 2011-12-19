var left = 37;
var up = 38;
var right = 39;
var down = 40;
var attack = 32;
function checkKey(e){

	var keyCode = e.keyCode;
	var charcode = e.charCode;

	if(charcode == attack || keyCode == attack){
		e.preventDefault();
		game.board.attack();
	}
	
	if(keyCode == down){
		e.preventDefault();
		game.board.moveDown();
	}
	if(keyCode == up){
		e.preventDefault();
		game.board.moveUp();
	}
	if(keyCode == right){
		e.preventDefault();
		game.board.moveRight();
	}
	if(keyCode == left){
		e.preventDefault();
		game.board.moveLeft();
	}

}


if ($.browser.mozilla) {
    $(window).keypress (checkKey);
} else {
    $(document).keydown (checkKey);
}