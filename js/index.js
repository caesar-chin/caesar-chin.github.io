var slideIndex = 0;
carousel();

function carousel() {
    console.log("nothing to see here!")
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 3 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel,3500); // Change image every 5 seconds
};

console.log("Nothing to see here!")