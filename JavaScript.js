var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var mousePos = {
    x: canvas.width / 2,
    y: canvas.height / 2
};
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
canvas.addEventListener('mousemove', function (evt) {
    mousePos = getMousePos(canvas, evt);
}, false);

function radiusCalc(canvas, x, y) {
    return Math.sqrt(Math.pow(canvas.width/2 - x, 2) + Math.pow(canvas.height/2 - y, 2));
}
function ran(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min);
}

var incriment = 0;
var prevTime = Date.now();
var sceneIndex = 1;
var sceneMax = 3;

function sceneNav(shift){
	sceneIndex += shift;
	while(true){
		if(sceneIndex < 1){
			sceneIndex += sceneMax;
		}else if(sceneIndex > sceneMax){
			sceneIndex -= sceneMax;
		}else{
			break;
		}
	}
}

document.getElementById("navPrev").addEventListener("click", function(){ sceneNav(-1); }); 
document.getElementById("navNext").addEventListener("click", function(){ sceneNav(1); }); 

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
			sceneNav(-1);
            break;
        case 39:
			sceneNav(1);
            break;
    }
};

function drawLoop(){

	switch(sceneIndex){
		case 1:
			abstractDraw();
			break;
		case 2:
			snowDraw();
			break;
		case 3:
			rippleDraw(mousePos.x, mousePos.y);
			break;
	}
	
    requestAnimationFrame(drawLoop);
}
requestAnimationFrame(drawLoop);
