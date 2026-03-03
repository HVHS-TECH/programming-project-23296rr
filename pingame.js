/*******************************************************/
// pingame.js
// Creates Pinball Game
/// Written by Remy Robert
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("Working")
	cnv = new Canvas(400, 700)
	world.gravity.y = 10;

	console.log("Workingdwadwasdwasdwasd")

	ball_1 = new Sprite(300, 700/2, 25)
	ball_1.color = 'white';
	ball_1.friction = 1;
	ball_1.bounciness = 1;

	wall_left = new Sprite(5, 350, 10, 690, 's')
	wall_left.color = 'grey';

	wall_right = new Sprite(395, 350, 10, 690, 's')
	wall_right.color = 'grey';

	roof = new Sprite(200, 5, 400, 10, 's')
	roof.color = 'grey';

	floor_left = new Sprite(87.5, 655, 175, 10, 's')
	floor_left.color = 'grey';
	floor_left.rotation = 25;

	floor_right = new Sprite(322.5, 655, 175, 10, 's')
	floor_right.color = 'grey';
	floor_right.rotation = -25
 }


/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("#808080")
}

/*******************************************************/
//  END OF PROGRAM
/*******************************************************/