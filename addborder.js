function setBlack(pixel) {
    
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
    return pixel;
}


function addBorder(img) {
    for(var pixel of img.values()) {
    
    var t = 50;    
    var x = pixel.getX();
    var y = pixel.getY();
    var w = img.getWidth();
    var h = img.getHeight();
    
    if (x <= t) {
        setBlack(pixel);
    }
    if (y <= t) {
        setBlack(pixel);
    }
    if (w-t <= x) {
        setBlack(pixel);
    }
    if (h-t <= y ) {
        setBlack(pixel);
    }
    

    
    }
    return img;
}

var ing = new SimpleImage("rodger.png");
ing = addBorder(ing);
print(ing);



/*  혹은
1.

function addBorder(image, thickness){
  for (var px of image.values()){
    var x = px.getX();
    var y = px.getY();
    if (x < thickness){
      px = setBlack(px);
    }
    if (x >= image.getWidth()-thickness){
      px = setBlack(px);
    }
    if (y < thickness){
      px = setBlack(px);
    }
    if (y >= image.getHeight()-thickness){
      px = setBlack(px);
    }
  }
  return image;
}

2.
function addBorder(image, thickness){
    for (var pixel of image.values()){
        if (pixel.getX() < thickness){
            pixel = setBlack(pixel);
        }
        if (pixel.getX() >= image.getWidth()-thickness){
            pixel = setBlack(pixel);
        }
        if (pixel.getY() < thickness){
            pixel = setBlack(pixel);
        }
        if (pixel.getY() >= image.getHeight()-thickness){
            pixel = setBlack(pixel);
        }
    }
    return image;
}

3.
function pixelOnEdge(image,pixel,horizontalThick, verticalThick){
    var x = pixel.getX();
    var y = pixel.getY();
    if (x < verticalThick || x > image.getWidth() - verticalThick){
        return true;
    }
    if (y < horizontalThick || y > image.getHeight() - horizontalThick){
        return true;
    }
    return false;
}

function addBorders(image,horizontalThick, verticalThick){
    for (var px of image.values()){
        if (pixelOnEdge(image,px,horizontalThick,verticalThick)){
            px = setBlack(px);
        }
    }
    return image;
}

var img = new SimpleImage("skyline.png");
img = addBorders(img,40,20);
print(img);

*/
