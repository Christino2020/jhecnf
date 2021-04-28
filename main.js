var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;
block_image_width = 30;
block_image_height = 30;
var player_object = ""; /*This var is storing the object of the player image*/
var block_image_object = ""; /*This var is storing the object of the block image*/ /*Function to add the player image*/
function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        /*Uploading the player image on canvas*/
        player_object = Img; /*Storing image in canvas*/
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object); /*Adding the image on canvas*/
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        /*Uploading the block image on canvas*/
        block_image_object = Img; /*Storing image in canvas*/
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object); /*Adding the image on canvas*/
    });
}
window.addEventListener("keydown", My_keydown)
function My_keydown(e){
keyPressed = e.keyCode;
console.log(keyPressed)
if (e.shiftKey == true && keyPressed == '80'){
console.log("Shift key and p pressed together");
block_image_width = block_image_width + 10;
block_image_height = block_image_height + 10;
document.getElementById("current_width").innerHTML = block_image_width
document.getElementById("current_height").innerHTML = block_image_height


}
if (e.shiftKey == true && keyPressed == '77'){
    console.log("Shift key and m pressed together")
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width
    document.getElementById("current_height").innerHTML = block_image_height
}
if (keyPressed == '38'){
    up ()
    console.log("Up is pressed")

}
if (keyPressed == '40'){
    Down ()
    console.log("Down is pressed")
    
}
if (keyPressed == '37'){
    Left ()
    console.log("Left is pressed")
    
}
if (keyPressed == '39'){
    Right ()
    console.log("Right is pressed")
    
}
if (keyPressed == '87'){
     new_image ("wall.jpg")
    console.log("w is pressed")
    
}
if (keyPressed == '71'){
    new_image ("ground.png")
   console.log("g is pressed")
   
}
if (keyPressed == '76'){
    new_image ("light_green.png")
   console.log("l is pressed")
   
}
if (keyPressed == '84'){
    new_image ("trunk.jpg")
   console.log("t is pressed")
   
}
if (keyPressed == '82'){
    new_image ("roof.jpg")
   console.log("r is pressed")
   
}
if (keyPressed == '89'){
    new_image ("yellow_wall.png")
   console.log("y is pressed")
   
}
if (keyPressed == '68'){
    new_image ("dark_green.png")
   console.log("d is pressed")
   
}
if (keyPressed == '85'){
    new_image ("unique.png")
   console.log("u is pressed")
   
}
if (keyPressed == '67'){
    new_image ("cloud.jpg")
   console.log("c is pressed")
   
}






}
function up(){
   if (player_y>=0) {
       player_y = player_y - block_image_height;
    console.log(block_image_height);
    console.log("x = " + player_x + "y = " + player_y)
    canvas.remove(player_object)
    player_update()
   }
}
function Down(){
    if (player_y<=500) {
        player_y = player_y + block_image_height;
     console.log(block_image_height);
     console.log("x = " + player_x + "y = " + player_y)
     canvas.remove(player_object)
     player_update()
    }
 }
 function Left(){
    if (player_x>=0) {
        player_x = player_x - block_image_width;
     console.log(block_image_width);
     console.log("x = " + player_x + "y = " + player_y)
     canvas.remove(player_object)
     player_update()
    }
 }
 function Right(){
    if (player_x<=850) {
        player_x = player_x + block_image_width;
     console.log(block_image_width);
     console.log("x = " + player_x + "y = " + player_y)
     canvas.remove(player_object)
     player_update()
    }
 }

