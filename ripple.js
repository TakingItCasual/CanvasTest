function rippleCircle(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
}

var ripples = new Array(0);

function addRipple(x, y){
    ripples.push(new rippleCircle(x, y, 0));
}
function delRipple(){
    for(var i = 0; i < ripples.length; i++){
        if(ripples[i].r >= 255){
            ripples.shift();
        }else{
            break;
        }
    }
}

var ripplesInited = false;
function initRipples(){
    if(ripplesInited == false){
        ripplesInited = true;

        canvas.addEventListener('click', function(e) {
            addRipple(mousePos.x, mousePos.y);
        }, false);
    }
}

function rippleDraw(mX, mY){
    initRipples();
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';
    
    ctx.globalCompositeOperation='source-over';
    

    for(i = 0; i < ripples.length; i++){
        ctx.beginPath();
        ctx.strokeStyle = 'rgb('+ripples[i].r+','+ripples[i].r+','+ripples[i].r+')';
        ctx.arc(ripples[i].x, ripples[i].y, ripples[i].r, 0, 2 * Math.PI);
        ripples[i].r += 1;
        ctx.stroke();
        ctx.closePath();
    }
    delRipple();
}
