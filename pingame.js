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

	currentAngleL = 0;
	targetAngleL = 0;
	closedAngleL = 30;
	openAngleL = -20;

	currentAngleR = 0;
	targetAngleR = 0;
	closedAngleR = -30;
	openAngleR = 20
	flipSpeed = 0.5;


	ball_1 = new Sprite(random(10, 390), 700/2, 25)
	ball_1.color = 'white';
	ball_1.friction = 1;
	ball_1.bounciness = 0;

	flicker_left = new Sprite(140, 655, 100, 10, 's')
	flicker_left.color = 'red';

	flicker_right = new Sprite(260, 655, 100, 10, 's')
	flicker_right.color = 'red';
	
	currentAngleL = closedAngleL;
	targetAngleL = closedAngleL;

	currentAngleR = closedAngleR;
	targetAngleR = closedAngleR;
	basethings()
 }

function basethings() {
	wall_left = new Sprite(5, 350, 10, 690, 's')
	wall_left.color = 'grey';

	wall_right = new Sprite(395, 350, 10, 690, 's')
	wall_right.color = 'grey';

	roof = new Sprite(200, 5, 400, 10, 's')
	roof.color = 'grey';

	floor_left = new Sprite(20, 695, 175, 200, 's')
	floor_left.color = 'grey';
	floor_left.rotation = 29;

	floor_right = new Sprite(380, 695, 175, 200, 's')
	floor_right.color = 'grey';
	floor_right.rotation = -29
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("#808080")

	if (kb.pressing('left')) {
		flicker_left.bounciness = 5;
		targetAngleL = openAngleL
	} else {
		flicker_left.bounciness = 0;
		targetAngleL = closedAngleL
	}

	currentAngleL = lerp(currentAngleL, targetAngleL, flipSpeed);
	flicker_left.rotation = currentAngleL;


	if (kb.pressing('right')) {
		flicker_right.bounciness = 5;
		targetAngleR = openAngleR
	} else {
		flicker_right.bounciness = 0;
		targetAngleR = closedAngleR
	}

	currentAngleR = lerp(currentAngleR, targetAngleR, flipSpeed);
	flicker_right.rotation = currentAngleR;

}

/*******************************************************/
//  END OF PROGRAM
/*******************************************************/