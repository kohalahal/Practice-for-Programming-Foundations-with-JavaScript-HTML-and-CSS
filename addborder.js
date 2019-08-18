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
