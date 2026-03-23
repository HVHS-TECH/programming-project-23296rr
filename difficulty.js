function difficultyEasy() {
    localStorage.setItem('difficulty', '5');
    console.log("Saved difficulty: ", localStorage.getItem('difficulty'));
    window.open('pingame.html', '_self');
}
function difficultyMedium() {
	localStorage.setItem('difficulty', '10')
	console.log("Saved difficulty: ", localStorage.getItem('difficulty'));
	window.open('pingame.html', '_self');
}
function difficultyHard() {
	localStorage.setItem('difficulty', '15')
    console.log("Saved difficulty: ", localStorage.getItem('difficulty'));
	window.open('pingame.html', '_self');
}