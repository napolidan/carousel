// carousel logic

// prevents selecting elements that doesn't load yet
window.onload = function() {

    // starting image index
    var selectedIndex = 0;

    // array of images and number of images
    var allimages = document.querySelectorAll(".carouselimg");
    var maxindex = allimages.length-1;
    
    // image after and before
    var after = selectedIndex+1 > maxindex ? 0 : selectedIndex+1;
    var before = selectedIndex-1 < 0 ? maxindex : selectedIndex-1;

    // class assigning
    allimages[selectedIndex].classList.add("selectedimg");
    allimages[after].classList.add("afterimg");
    allimages[before].classList.add("beforeimg");

    // class assigning for hiden images
    for ( var i = 0 ; i <= maxindex ; i++ ) {
        if( i!=selectedIndex && i!=before && i!=after) {
            allimages[i].classList.add('hideimg');
        }
    }
    
    // adding functionality to image after and before
    var beforeimg = document.querySelector(".beforeimg");
    var afterimg = document.querySelector(".afterimg");
    afterimg.addEventListener("click" , selectAfter);
    beforeimg.addEventListener("click" , selectBefore);


    // function to scroll to next image
    function selectAfter(event) { 

        event.preventDefault();
        selectedIndex = selectedIndex+1 > maxindex ? 0 : selectedIndex+1;
        changeSelected();

    }

    // function to scroll to previous image
    function selectBefore(event) {

        event.preventDefault();
        selectedIndex = selectedIndex-1 >= 0 ? selectedIndex-1 : maxindex;
        changeSelected();

    }

    // function to recalculate before image, selected image and after image
    function changeSelected() {

        // removing functionality
        afterimg.removeEventListener("click" , selectAfter);
        beforeimg.removeEventListener("click" , selectBefore);

        // recalculating before and after indexes
        after = selectedIndex+1 > maxindex ? 0 : selectedIndex+1;
        before = selectedIndex-1 < 0 ? maxindex : selectedIndex-1;

        // cleaning tags
        for ( var i = 0 ; i <= maxindex ; i++ ) {

            allimages[i].classList.remove('hideimg');
            allimages[i].classList.remove('selectedimg');
            allimages[i].classList.remove('afterimg');
            allimages[i].classList.remove('beforeimg');
            if( i!=selectedIndex && i!=before && i!=after) {
                allimages[i].classList.add('hideimg');
            }
        }

        // adding tags
        allimages[selectedIndex].classList.add('selectedimg');
        allimages[after].classList.add('afterimg');
        allimages[before].classList.add('beforeimg');

        // adding functionality to image after and before
        beforeimg = document.querySelector(".beforeimg");
        afterimg = document.querySelector(".afterimg");
        afterimg.addEventListener("click" , selectAfter);
        beforeimg.addEventListener("click" , selectBefore);
    }

}
