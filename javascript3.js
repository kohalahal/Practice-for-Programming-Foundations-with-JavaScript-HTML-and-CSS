// write your code here
function swapRedGreen (pixel) {
       var newR = pixel.getGreen();
       var newG = pixel.getRed();
       pixel.setGreen(newG);
       pixel.setRed(newR);
       return pixel;
}


var img = new SimpleImage("chapel.png")
print(img);

for (var pixel of img.values()) {
    var newR = pixel.getGreen();
    var newG = pixel.getRed();
    pixel.setGreen(newG);
    pixel.setRed(newR);
}
print(img);

for (var pixel of img.values()) {
    swapRedGreen(pixel);
}

print(img);

var dev = new SimpleImage("duke_blue_devil.png")
print(dev);

for (var pixel of dev.values()) {
    r = pixel.getRed();
    g = pixel.getGreen();
    b = pixel.getBlue();
    if ( r != 255) {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(0);
    }
}

print(dev);
