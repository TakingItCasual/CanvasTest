function circlePart(radius, increment, multi) {
    if(radius < 0) radius = -radius;
    
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 9 * Math.PI / 8 + increment*multi, 15 * Math.PI / 8 + increment*multi);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 1 * Math.PI / 8 + increment*multi, 7 * Math.PI / 8 + increment*multi);
    ctx.stroke();
    ctx.closePath();
}

function drawRotatedRect(x, y, r, increment, multi){
    if(r < 0) r = -r;

    // first save the untranslated/unrotated context
    ctx.save();
    
    x -= r/2;
    y -= r/2;
    
    ctx.beginPath();
    // move the rotation point to the center of the rect
    ctx.translate(x+r/2, y+r/2);
    // rotate the rect
    ctx.rotate(increment*multi);

    // draw the rect on the transformed context
    // Note: after transforming [0,0] is visually [x,y]
    //       so the rect needs to be offset accordingly when drawn
    ctx.rect(-r/2, -r/2, r, r);

    ctx.fillStyle="black";
    ctx.fill();

    // restore the context to its untranslated/unrotated state
    ctx.restore();
}

function abstractDraw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 15;
    ctx.strokeStyle = '#000000';

    ctx.globalCompositeOperation='source-over';
    circlePart(150 * Math.sin(increment), increment, 1);
    circlePart(130 * Math.sin(increment-0.1), increment, -1);
    circlePart(110 * Math.sin(increment-0.2), increment, 1.333);
    circlePart(90 * Math.sin(increment-0.3), increment, -1.333);
    circlePart(70 * Math.sin(increment-0.4), increment, 1.667);
    circlePart(50 * Math.sin(increment-0.5), increment, -1.667);
    circlePart(30 * Math.sin(increment-0.6), increment, 2);
    circlePart(10 * Math.sin(increment-0.7), increment, -2);
    
    ctx.globalCompositeOperation='xor';
    drawRotatedRect(canvas.width/2, canvas.height/2, 310 * Math.sin(increment), increment, 1);
    drawRotatedRect(canvas.width/2, canvas.height/2, 270 * Math.sin(increment-0.1), increment, -1);
    drawRotatedRect(canvas.width/2, canvas.height/2, 230 * Math.sin(increment-0.2), increment, 1.333);
    drawRotatedRect(canvas.width/2, canvas.height/2, 190 * Math.sin(increment-0.3), increment, -1.333);
    drawRotatedRect(canvas.width/2, canvas.height/2, 150 * Math.sin(increment-0.4), increment, 1.667);
    drawRotatedRect(canvas.width/2, canvas.height/2, 110 * Math.sin(increment-0.5), increment, -1.667);
    drawRotatedRect(canvas.width/2, canvas.height/2, 70 * Math.sin(increment-0.6), increment, 2);
    drawRotatedRect(canvas.width/2, canvas.height/2, 30 * Math.sin(increment-0.7), increment, -2);
}