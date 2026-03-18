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
	world.gravity.y = 15;
	// difficulty = 10;

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
	obstacleGroup = new Group();

	ball_1 = new Sprite(random(10, 390), 700/2, 25)
	ball_1.color = 'white';
	ball_1.friction = 1;
	ball_1.drag = 0;
	ball_1.bounciness = 0;
	ballGroup.add(ball_1)

	flicker_left = new Sprite(140, 655, 100, 10, 's')
	flicker_left.color = 'red';

	flicker_right = new Sprite(260, 655, 100, 10, 's')
	flicker_right.color = 'red';
	
	catcher = new Sprite(200, 805, 400, 10, 'n')
	catcher.bounciness = -100
	
	pointBoxL = new Sprite(20, 40, 40, 80, 'n')
	
	pointBoxR = new Sprite(380, 40, 40, 80, 'n')

	text = new Sprite(200, 40, 0, 0, 'n')
	text.color = 'white';
	text.textSize = 32;



	basethings()
 }
/* creates the walls, roof, floor and obastacles of the pinball machine */
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

	obstacle1 = new Sprite(200, 200, 50, 's')
	obstacle1.color = 'grey';
	obstacle1.bounciness = 2;
	obstacleGroup.add(obstacle1)

	obstacle2 = new Sprite(100, 300, 50, 's')
	obstacle2.color = 'grey';
	obstacle2.bounciness = 2;
	obstacleGroup.add(obstacle2)

	obstacle3 = new Sprite(300, 300, 50, 's')
	obstacle3.color = 'grey';
	obstacle3.bounciness = 2;
	obstacleGroup.add(obstacle3)
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
	// displays the score on the screen
	text.text = "Score: " + score;
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
	if (ballGroup.overlaps(catcher) && ballsSpawned === 1) {
		ball2()
		ballsSpawned = 2;
		ballGroup.remove(ball_1)
	} else if (ballGroup.overlaps(catcher) && ballsSpawned === 2) {
		ball3()
		ballsSpawned = 3
		ballGroup.remove(ball_2)
	} else if (ballGroup.overlaps(catcher) && ballsSpawned === 3) {
		console.log('Game Over')
		ballGroup.remove(ball_3)
	}

	/*controls for left flipper hitting the ball*/
	if (ballGroup.collides(flicker_left) && kb.pressing('left')) {
		ballGroup.vel.y = -20
	}
	if (ballGroup.collides(flicker_right) && kb.pressing('right')) {
		ballGroup.vel.y = -20
	}
		

	/*adding to score when the ball hits the point box*/
	if (ballGroup.overlaps(pointBoxL)) {
		score = score + 100000;
		console.log(score)
	}
	if (ballGroup.overlaps(pointBoxR)) {
		score = score + 100000;
		console.log(score)
	}
	// if ball hits obstacle add points
	if (ballGroup.collides(obstacleGroup)) {
		score = score + 10000
	}
		
}	
/*
function gameEasy() {
	localStorage.setItem('difficulty', '5')
	difficulty = 5;
	window.location.href = 'pingame.html';
	console.log(difficulty);
}
function gameMedium() {
	localStorage.setItem('difficulty', '10')
	difficulty = 10;
	window.location.href = 'pingame.html';
	console.log(difficulty);
}
function gameHard() {
	localStorage.setItem('difficulty', '15')
	difficulty = 15;
	window.location.href = 'pingame.html';
	console.log(difficulty);
}
/*******************************************************/
//  END OF PROGRAM
/*******************************************************/