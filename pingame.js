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
	closedAngleL = 40;
	openAngleL = 340;

	currentAngleR = 0;
	targetAngleR = 0;
	closedAngleR = 320;
	openAngleR = 20
	flipSpeed = 0.3;


	ball_1 = new Sprite(random(10, 390), 700/2, 25)
	ball_1.color = 'white';
	ball_1.friction = 1;
	ball_1.bounciness = 1;

	flicker_left = new Sprite(140, 675, 75, 10, 's')
	flicker_left.rotation = 40;
	flicker_left.color = 'red';

	flicker_right = new Sprite(260, 675, 75, 10, 's')
	flicker_right.rotation = 320;
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

	floor_left = new Sprite(40, 615, 175, 10, 's')
	floor_left.color = 'grey';
	floor_left.rotation = 25;

	floor_right = new Sprite(360, 615, 175, 10, 's')
	floor_right.color = 'grey';
	floor_right.rotation = -25
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("#808080")

	if (kb.pressing('left')) {
		
	}



/*
	if (kb.pressing('left')) {
		flicker_left.rotation = 340;
		flicker_left.y = 638;
		flicker_left.bounciness = 5;
	}
	else if (kb.pressing ('right')) {
		flicker_right.rotation = 20;
		flicker_right.y = 638
		flicker_right.bounciness = 5;
	}
	
	if (kb.released('left')) {
		flicker_left.rotation = 40;
		flicker_left.y = 675;
		flicker_left.bounciness = 0;
	}
	else if (kb.released('right')) {
		flicker_right.rotation = 320;
		flicker_right.y = 675;
		flicker_right.bounciness = 0;
	}
*/
}

/*******************************************************/
//  END OF PROGRAM
/*******************************************************/