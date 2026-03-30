function setup() {
    console.log("Working", "Score: " + localStorage.getItem('score'))

    let score = localStorage.getItem('score');
    console.log("Score: " + score);
    
    canvas = new Canvas(500, 50);

    scoreDisplay = new Sprite(50, 25, 0, 0);
    scoreDisplay.textSize = 24;
    scoreDisplay.text = "Final Score: " + score + '!';
}

function draw() {   
 background("#f0f0f0")
}