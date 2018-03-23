// TODO: Pinna's illusory intertwining effect

function squareCircle(increment, radius, number){
    ctx.beginPath();
    ctx.moveTo(20,20);
    ctx.lineTo(300,150);
}

function illusionDraw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle="#808080";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 1;
    squareCircle(increment, 10, 18);
    ctx.stroke();
}