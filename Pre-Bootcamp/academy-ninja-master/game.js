var leftValue = 696;
var topValue = 344;
var walkValue = 1;

var filled = Array(9).fill().map(() => Array(19).fill(0));

document.onkeydown = function(e){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    console.log(e);
    walkValue == 1 ?
    walkValue = 2 : 
    walkValue = 1

    if(e.key === "ArrowLeft" && leftValue > 0
        && ctx.getImageData(leftValue-10, topValue,1,1).data[3]==0){
        // Left
        //console.log(ctx.getImageData(leftValue+5, topValue,1,1).data)
        leftValue = leftValue - 10;
        document.getElementById("character").style.left = leftValue+"px";
        document.getElementById("character").style.backgroundImage = "url('img/left"+walkValue+".png')";
    }
    else if (e.key === "ArrowRight" && leftValue < 812
        && ctx.getImageData(leftValue+48, topValue,1,1).data[3]==0){
        // Right
        leftValue = leftValue + 10;
        document.getElementById("character").style.left = leftValue+"px";
        document.getElementById("character").style.backgroundImage = "url('img/right"+walkValue+".png')";
    }
    else if (e.key === "ArrowUp" && topValue > 0
        && ctx.getImageData(leftValue, topValue-10,1,1).data[3]==0){
        // Top
        topValue = topValue - 10;
        document.getElementById("character").style.top = topValue+"px";
        document.getElementById("character").style.backgroundImage = "url('img/top"+walkValue+".png')";
    }
    else if (e.key === "ArrowDown" && topValue < 688
        && ctx.getImageData(leftValue, topValue+86,1,1).data[3]==0){
        // Bottom
        topValue = topValue + 10;
        document.getElementById("character").style.top = topValue+"px";
        document.getElementById("character").style.backgroundImage = "url('img/down"+walkValue+".png')";
    }
}


const drawMap = (x, y) => {
    var rand = Math.random();
    if(x<0 || y<0 || x===9 || y===19 || filled[x][y]>0)
        return;
    else if(filled[x][y]==0 && rand < 0.7){
        filled[x][y]=1;
        drawMap(x+1,y);
        drawMap(x,y+1);
        drawMap(x-1,y);
        drawMap(x,y-1);
        if(rand<0.2)
            filled[x][y]=3;
    }
    else{
        filled[x][y]=2;
    }

    return;
}
var k = 0;
while(!filled.some(row => row.includes(1))&&k<10){
    k++;
    drawMap(4,12);
}

console.log(filled);

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#000000";

const drawSushi = (x, y) => {
    base_image = new Image();
    base_image.src = 'ninjaman/sushi.png';
    base_image.onload = function(){
        ctx.drawImage(base_image, x, y, 32, 32);
    }
}


for(var i = 0; i<9;i++)
{
    for(var j = 0; j<19; j++){
        if(filled[i][j] == 2)
            ctx.fillRect(j*58, i*86, 58, 86);
        if(filled[i][j] == 3)
            drawSushi(j*58, i*86);
    }
}



