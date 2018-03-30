var canvas, stage, exportRoot, lib = {};

const init = () =>{
	canvas = document.getElementById("MyCanvas");
	exportRoot = new lib.root();
	stage = new createjs.Stage("MyCanvas");
	stage.addChild(exportRoot);
	createjs.Ticker.framerate = 30;
	createjs.Ticker.addEventListener("tick", stage);
	document.addEventListener("keydown", KeydownHandler);
}
(lib.root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.addChild(this.LittleBlue = new lib.LittleBlue());
	this.LittleBlue.parent = this;
	this.LittleBlue.setTransform(250,100);

}).prototype = new createjs.MovieClip();

(lib.LittleBlue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.addChild( this.shape = new createjs.Shape() );
	this.shape.graphics.f().s("#0000FF").ss(10,1,1).p("AgChKQhmgBhIhJQhJhJAAhnQAAhoBJhJQBJhJBnAAQBoAABJBJQBJBJAABoQAABnhJBJQhIBJhmABQBmABBIBIQBJBJAABnAAEFFQBlABBIBIQBJBKAABnAAAhKIAAGPAADhKIgDAAIgCAAAj5I/QAAhnBJhKQBIhIBmgBAj5CvQAAhnBJhJQBIhIBmgB");
	this.shape.setTransform(0,0);

}).prototype = new createjs.MovieClip();

const KeydownHandler = e =>{
	switch( e.keyCode ){
		case 37:
			exportRoot.LittleBlue.x -= 10;
			break;
		case 38:
			exportRoot.LittleBlue.y -= 10;
			break;
		case 39:
			exportRoot.LittleBlue.x += 10;
			break;
		case 40:
			exportRoot.LittleBlue.y += 10;
			break;
		default:
			break;
	}
}