canvas=document.getElementById('myCanvas');
ctx= canvas.getContext("2d");

rover_widht=100;
rover_hight=90;
rover_x=10;
rover_y=10;

background_img="mars.jpg";
rover_img="rover.png";

function add (){
    background_imgTag = new Image() ;
    background_imgTag.onload = uploadBackground ;
    background_imgTag,src = background_img ;

    rover_imgTag = new Image() ;
    rover_imgTag.onload = uploadrover ;
    rover_imgTag,src = rover_img ;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0,canvas.widht, canvas.hight);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y,rover_widht, rover_hight); 
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    
}