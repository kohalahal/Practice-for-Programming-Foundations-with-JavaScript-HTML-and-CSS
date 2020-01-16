var img = new SimpleImage("dinos.png");
img.setSize(200,150);
print(img);
var result = new SimpleImage(200,150);

for (var pixel of img.values()) {
    
    var R = pixel.getRed();
    var G = pixel.getGreen();
    var B = pixel.getBlue();
    var x = pixel.getX();
    var y = pixel.getY();
    var A = (R+G+B)/3;
    
    var avg = (R+G+B)/3;

result.setPixel(x, y, avg);

    
}
//does not work T.T check the Forum
