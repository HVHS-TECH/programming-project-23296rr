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

	timerL = 15
	timerR = 15

	score = 0;

	ballsSpawned = 1;

	cnv = new Canvas(400, 800)
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

	ballGroup = new Group();

	ball_1 = new Sprite(random(10, 390), 700/2, 25)
	ball_1.color = 'white';
	ball_1.friction = 1;
	ball_1.bounciness = 0;
	ballGroup.add(ball_1)

	flicker_left = new Sprite(140, 655, 100, 10, 's')
	flicker_left.color = 'red';

	flicker_right = new Sprite(260, 655, 100, 10, 's')
	flicker_right.color = 'red';
	
	catcher = new Sprite(200, 805, 400, 10, 's')
	catcher.bounciness = -100
	
	pointBox = new Sprite(20, 40, 40, 80, 'n')
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

function ball2() {
	ball_2 = new Sprite(random(10, 390), 700/2, 25)
	ball_2.color = 'white';
	ball_2.friction = 1;
	ball_2.bounciness = 0;
	ballGroup.add(ball_2)
}
function ball3() {
	ball_3 = new Sprite(random(10, 390), 700/2, 25)
	ball_3.color = 'white';
	ball_3.friction = 1;
	ball_3.bounciness = 0;
	ballGroup.add(ball_3)
}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("#808080")

	/*controls for left flipper*/
	if (kb.pressing('left')) {
		flicker_left.bounciness = 5;
		targetAngleL = openAngleL
		timerL = timerL-1
	} else {
		flicker_left.bounciness = 0;
		targetAngleL = closedAngleL
		timerL = 15
	}

	/*stops player from holding flipper up forever*/
	if (timerL <= 0) {
		flicker_left.bounciness = 0;
		targetAngleL = closedAngleL
		timerL = -15
	}

	/*smoothness of left flipper*/
	currentAngleL = lerp(currentAngleL, targetAngleL, flipSpeed);
	flicker_left.rotation = currentAngleL;

	/*controls for right flipper*/
	if (kb.pressing('right')) {
		flicker_right.bounciness = 5;
		targetAngleR = openAngleR
		timerR = timerR-1
	} else {
		flicker_right.bounciness = 0;
		targetAngleR = closedAngleR
		timerR = 15
	}

	/*stops player from holding flipper up forever*/
	if (timerR <= 0) {
		flicker_right.bounciness = 0;
		targetAngleR = closedAngleR
		timerR = -15
	}

	/*smoothness of right flipper*/
	currentAngleR = lerp(currentAngleR, targetAngleR, flipSpeed);
	flicker_right.rotation = currentAngleR;

	/*spawns new balls when the previous one is caught by the catcher*/
	if (ballGroup.collides(catcher) && ballsSpawned === 1) {
		ball2()
		ballsSpawned = 2;
		ballGroup.remove(ball_1)
	} else if (ballGroup.collides(catcher) && ballsSpawned === 2) {
		ball3()
		ballsSpawned = 3
		ballGroup.remove(ball_2)
	} else if (ballGroup.collides(catcher) && ballsSpawned === 3) {
		console.log('Game Over')
		ballGroup.remove(ball_3)
	}

	/*controls for left flipper hitting the ball*/
	if (ballGroup.collides(flicker_left) && kb.pressing('left')) {
		ballGroup.vel.y = -20
	}
	if (ball_1.collides(flicker_right) && kb.pressing('right')) {
		ballGroup.vel.y = -20
	}
		
}

/*******************************************************/
//  END OF PROGRAM
/*******************************************************/