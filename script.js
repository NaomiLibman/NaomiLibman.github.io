window.onload = function () {
console.log("this works");    
 var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
    }
    // init function builds a node list of elements with the hidden class

    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;
            //checkPosition is used here to loop through the elements and calculate whether they are visible. If an element is visible, checkPosition removes the hidden element and adds the fade-in-class element

            if (positionFromTop > 0 && positionFromTop - windowHeight <= 0) {
                element.classList.add('fade-in-element');
                element.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
                element.classList.remove('fade-in-element');
            }
        }
    }
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
    init();
    checkPosition();
}();

//checkPosition is added as a scroll event listener, and init as a resize event listener

/* fade in js code found from dev tips and tricks https://www.dev-tips-and-tricks.com/animate-elements-scrolled-view-vanilla-js*/    

    
    
    
    
    
    
