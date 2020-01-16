
// write your code here

var img = new SimpleImage("dinos.png");
img.setSize(200,150);
print(img);

for (var pixel of img.values()) {
    
    var R = pixel.getRed();
    var G = pixel.getGreen();
    var B = pixel.getBlue();
    var A = (R+G+B)/3;
    
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);

    
}
print(img);

//works on dltp platfom
