function openMobileMenu() {
  var x = document.getElementById("menuMobile");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

function animateFigureEight(element, index) {
  const amplitude = 90; // Adjust for the size of the figure-eight or this movement it does
  const frequency = 0.01; // Adjust to speed up or slow down the movement
  let angle = 0; // Start angle

  function animate() {
    // Calculate x and y positions for a "figure-eight path"
    const x = amplitude * Math.sin(angle * 1); // Horizontal movement
    const y = amplitude * Math.sin(angle * 3); // Vertical movement (double the frequency)

    // Apply the transform
    element.style.transform = `translate(${x}px, ${y}px)`;

    // Increment the angle for the next frame
    angle += frequency;

    // Request the next animation frame
    requestAnimationFrame(animate);
  }

  // Start the animation for each image
  animate();
}

function floatImages() {
  const floating = document.querySelectorAll(".floating");
  floating.forEach((floater, index) => {
    // Add a random delay to the start of each animation
    const randomDelay = Math.random() * 3000; // Delay in milliseconds (up to 2 seconds)
    setTimeout(() => {
      if (!prefersReducedMotion.matches) {
        animateFigureEight(floater, index);
      } else {
        // If user prefers reduced motion, set position to static
        floater.style.transform = "none";
      }
    }, randomDelay);
  });
}

window.onload = floatImages;
