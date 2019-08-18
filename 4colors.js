var img = new SimpleImage(200, 200);
for (var pixel of img.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    
    if (x <= 100 && y <=100) {
        pixel.setRed(255);
    } else if (100 < x && y <= 100) {
        pixel.setGreen(255);
    }
    else if ( x <= 100 && 100 < y) {
        pixel.setBlue(255);
        pixel.setRed(255);
    }
    else  {
        pixel.setBlue(255);
    }
}
print(img);




/// or




var img = new SimpleImage(200,200);
for (var px of img.values()){
    
  var x = px.getX();
  var y = px.getY();
  
  if (x < img.getWidth()/2){
    px.setRed(255);
  }
   if (y>img.getHeight()/2){
    px.setBlue(255);
  }
  if (x >= img.getWidth()/2 && y <= img.getHeight()/2 ) {
    px.setGreen(255);
  }
}
print (img);
