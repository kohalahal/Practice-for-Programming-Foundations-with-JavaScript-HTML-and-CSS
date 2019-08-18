// write your code here
var drew = new SimpleImage("drewgreen.png");
var back = new SimpleImage("palm-and-beach.png")
var result = new SimpleImage(204, 404);
drew.setSize(204, 404);
print(drew);


//green screen algorithm
for (var pixel of drew.values()) {

    var R = pixel.getRed();
    var G = pixel.getGreen();
    var B = pixel.getBlue();
    var x = pixel.getX();
    var y = pixel.getY();

    
    if (G>R+B) { 

        var bpx = back.getPixel(x, y);
        result.setPixel(x, y, bpx);
    }
    else { 
       
        result.setPixel(x, y, pixel);}
}

print(result);
