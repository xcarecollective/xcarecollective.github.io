function openMobileMenu() {
    var x = document.getElementById("menuMobile");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    }


    /*
        Accessibility
        
        Scaling/zooming animations are problematic for accessibility, as they are a common 
        trigger for certain types of migraine. If you need to include such animations on your 
        website, you should provide a control to allow users to turn off animations, preferably site-wide.

        Also, consider making use of the prefers-reduced-motion media feature — use it to write 
        a media query that will turn off animations if the user has reduced animation specified 
        in their system preferences.
    */

        function randomPosition(element) {

            //rework this so that it allows movement within a very tiny border of the image itself:
            /*
            const containerWidth = element.offsetWidth+50;
            const containerHeight = element.offsetHeight+50;
            */

            //const factor = 0.01; //very subtle
            //const factor = 0.015; // subtle
            //const factor = 0.02; //noticeable
            const factor = 0.05; //visible

            /*
            const container = document.getElementById('gallery');
            const containerWidth = container.offsetWidth;
            const containerHeight = container.offsetHeight;
            const factor = 0.005;
            */
    
            /*
            //moves suuuuper quickly
            const newLeft = Math.random() * (containerWidth - element.offsetWidth);
            const newTop = Math.random() * (containerHeight - element.offsetHeight);
            */

            //super subtle movement
            const newLeft = (Math.random()*factor) * element.offsetWidth;
            const newTop = (Math.random()*factor) * element.offsetHeight;
    
            /*
            //super subtle movement
            const newLeft = (Math.random()*factor) * (containerWidth - element.offsetWidth);
            const newTop = (Math.random()*factor) * (containerHeight - element.offsetHeight);
            */
    
            element.style.transform = `translate( ${newLeft}px, ${newTop}px )`;
        }
    
        function floatImages() {
            const interval = 300;
            const floating = document.querySelectorAll('.floating');
            floating.forEach(floater => {
                randomPosition(floater);
                setInterval(() => randomPosition(floater), interval);
            });
        }
    
        window.onload = floatImages;