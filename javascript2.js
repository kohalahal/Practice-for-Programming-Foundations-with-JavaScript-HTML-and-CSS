var x = 3;
print("x");

var img = new SimpleImage("duvall.jpg");
print(img);
var width = img.getWidth();
print(img.getWidth());
print(width);
for (var pixel of img.values()) {
    if (pixel.getX() < img.getWidth()/3) {
        pixel.setRed(255);
    } else if (pixel.getX() < img.getWidth()*2/3) {
        pixel.setGreen(255);
    } else {pixel.setBlue(255);}
}
print(img);

//Part 2Write a JavaScript function named swapRedGreen with one parameter pixel (representing a single pixel). This function should swap the red and green values of the pixel. For example, if you have a pixel with red = 255, green = 100, blue = 150, after calling swapRedGreen on that pixel its new RGB values would be red = 100, green = 255, blue = 150.To test your function, you should choose an image and apply the swapRedGreen function to every pixel in the image. The choice of your image is important. For some images you may not notice any change. What would happen if you used a completely black image, or a completely white image? What about an image with lots of red and not a lot of green? Think about what type of image you should use for testing your function. After choosing an image and applying the swapRedGreen function to every pixel in the image, make sure you print the resulting image so you can see whether your function worked correctly.
//doesnt work
function swapRedGreen(pixel) {
    var newR = pixel.getGreen();
    var newG = pixel.getRed();
    pixel.setGreen(newG);
    pixel.setRed(newR);
    return pixel;
}


var usain = new SimpleImage("usain.jpg");
print(usain);
for (var pixel of usain.values()) {
    swapRedGreen(pixel);
}
print(usain);
var egg = new SimpleImage("eastereggs.jpg");
print(egg);
for (var pixel of egg.values()) {
    swapRedGreen(pixel);
}
print(egg);
var dd = new SimpleImage("drewRobert.png");
print(dd);
for (var pixel of dd.values()) {
    swapRedGreen(pixel);
}
print(dd);
