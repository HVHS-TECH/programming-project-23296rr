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



	flicker_left = new Sprite(125, 665, 75, 10, 's')
	flicker_left.rotation = 40;
	flicker_left.color = 'red';

	flicker_right = new Sprite(275, 665, 75, 10, 's')
	flicker_right.rotation = -40;
	flicker_right.color = 'red';

	basethings()
 }

function basethings() {
	wall_left = new Sprite(5, 350, 10, 690, 's')
	wall_left.color = 'grey';

	wall_right = new Sprite(395, 350, 10, 690, 's')
	wall_right.color = 'grey';

	roof = new Sprite(200, 5, 400, 10, 's')
	roof.color = 'grey';

	floor_left = new Sprite(25, 625, 175, 10, 's')
	floor_left.color = 'grey';
	floor_left.rotation = 25;

	floor_right = new Sprite(375, 625, 175, 10, 's')
	floor_right.color = 'grey';
	floor_right.rotation = -25
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("#808080")

	console.log('controls')

	if (kb.pressing('left')) {
		flicker_left.rotation = 340;
		flicker_left.y = 638;
	}
	else if (kb.pressing ('right')) {
		flicker_right.rotation = -340;
		flicker_right.y = 638
	}
	if (kb.released('left')) {
		flicker_left.rotation = 40;
		flicker_left.y = 665;
	}
	else if (kb.released('right')) {
		flicker_right.rotation = -40;
		flicker_right.y = 665;
	}

}

/*******************************************************/
//  END OF PROGRAM
/*******************************************************/