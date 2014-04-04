var StartDrawing=function(ctx){
 ctx.beginPath();
   
    //Draw Main
    ctx.beginPath()
    ctx.strokeStyle="rgb(255,70,0)";
    for (var a = -20; a < 270; a += .1) {
        var x = Math.cos((Math.PI / (180)) * a) * a * .85;
        var y = Math.sin((Math.PI / (180)) * a * .85) * a;
        ctx.rect(400+x , 350+y,1+(a)*0.1,0)
    }
    ctx.stroke();
    ctx.closePath();

    //Tilak Lines
    ctx.beginPath();
    ctx.strokeStyle="rgb(255,70,0)";
    ctx.moveTo(390,170)
    ctx.lineTo(440,170);

    ctx.moveTo(360,180)
    ctx.lineTo(440,180);

    ctx.moveTo(360,190)
    ctx.lineTo(440,190);
    ctx.stroke();
    ctx.closePath()
    ctx.beginPath();
    ctx.arc(440,175,5,Math.PI/180*-90,Math.PI/180*90);
    ctx.arc(440,185,5,Math.PI/180*-90,Math.PI/180*90);
    ctx.stroke()
    ctx.closePath();

    //Tilak
    ctx.beginPath();
    ctx.strokeStyle="rgb(255,0,0)";
    ctx.fillStyle="rgb(255,0,0)";
    ctx.arc(410,180,7,0,2*Math.PI);
    ctx.fill()
    ctx.closePath();

    //Eye
    ctx.beginPath();
    ctx.strokeStyle="rgb(0,0,0)"
    ctx.lineWidth=2;
    ctx.arc(390,210,10,Math.PI/180*-120,Math.PI/180*30);
    ctx.stroke()    
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle="rgb(0,0,0)";
    ctx.arc(389,210,5,0,Math.PI*2);
    ctx.fill()
    ctx.closePath();

    //tooth
    ctx.beginPath();
    ctx.arc(270,410,100,Math.PI/180*0,Math.PI/180*60);
    ctx.arc(245,420,100,Math.PI/180*70,Math.PI/180*359,true);
    ctx.fillStyle="#999"
    ctx.fill()
    ctx.closePath();
};
(function(){
    var ctx=document.getElementById("can").getContext('2d');
    ctx.canvas.width=1300;
    ctx.canvas.height=650;
    
   
     ctx.fillStyle="#FED"
     ctx.translate(300,100)
    for(var i=-1000;i<1000;i++){
        var x=Math.sin(Math.PI/210*i)*900;
        var y=Math.cos(Math.PI/80*i)*500;
        ctx.lineTo(x,y);
    }
    ctx.fill()
    ctx.stroke()
    ctx.closePath();
    var drawImage=new StartDrawing(ctx);
})();