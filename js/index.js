var slideIndex = 0;
carousel();
imagesize();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 5 seconds
};

function imagesize(){
    var size;
    size = screen.width;
    document.getElementById("homepic").style = "max-width: " + size + ";";
    document.getElementById("homepic").style = "min-width: " + size + ";";
    document.getElementById("aboutme").style = "font-size: 600px;";
    console.log("nothing to see here!");
    console.log(size);
};