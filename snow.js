var maxV = 0.3

function flake(x, y, v){
	this.x = x;
	this.y = y;
	this.v = v;
}

var snowFlakes = new Array(0);

var flakesInited = false;
function initFlakes(){
	if(flakesInited == false){
		flakesInited = true;
		var w = canvas.width;
		var h = canvas.height;
		for(i = 0; i < 2000; i++){
			snowFlakes.push(new flake(ran(1, w), ran(1, h), 0));
		}
	}
}

function flakeMove(i, w, h){
	snowFlakes[i].y += 1;
	if(snowFlakes[i].y > height) snowFlakes[i].y = 0;
	
	var mid = ran(1, 2);
	if(mid == 1 && snowFlakes[i].v < maxV){
		snowFlakes[i].v += 0.1; 
	}else if(mid == 2 && snowFlakes[i].v > -maxV){
		snowFlakes[i].v -= 0.1;
	}
	
	snowFlakes[i].x += snowFlakes[i].v;
	if(snowFlakes[i].x < 0){
		snowFlakes[i].x = width;
	}else if(snowFlakes[i].x > width){
		snowFlakes[i].x = 0;
	}
}

function snowDraw(){
	initFlakes();
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle="#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = '#FFFFFF';
	
	ctx.globalCompositeOperation='source-over';
	
	width = canvas.width;
	height = canvas.height;
	ctx.beginPath();
	for(i = 0; i < snowFlakes.length; i++){
		flakeMove(i, width, height);
	
		ctx.rect(snowFlakes[i].x, snowFlakes[i].y , 2, 2);
	}
	ctx.fill();
	ctx.closePath();
}
