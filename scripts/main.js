const testimonialsContainer = document.getElementById('testimonials-container');
testimonialsContainer.innerHTML += testimonialsContainer.innerHTML;
const testimonials = testimonialsContainer.querySelectorAll('.testimonial-card');
let animationCount = 0;

/**
 * Function to start/stop vertical animation 
 *
 * @param {string} eventType - which type of event you want to perform, here we have to pass "paused" or "running"
 */
function startStopKeyFrameAnimation(eventType) {
    testimonials.forEach(testimonial => {
        testimonial.style.animationPlayState = eventType; // Play or Pause keyframe animations for all as per the event type param
    });
}

// Function to start auto-scrolling
function startAutoScroll() {
    scrollInterval = setInterval(() => {
        testimonialsContainer.scrollBy({
            left: 1, // Scroll 1px to the right
            behavior: 'smooth'
        });

        // If reached the end, paused the scroll
        if (testimonialsContainer.scrollLeft + testimonialsContainer.clientWidth >= testimonialsContainer.scrollWidth) {
            startStopKeyFrameAnimation("paused")
        }

    }, 10);
}

// Function to stop auto-scrolling
function stopAutoScroll() {
    clearInterval(scrollInterval);
}

// Start auto-scroll on page load
startAutoScroll();

// Pause scrolling and animations on hover
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        stopAutoScroll();
        startStopKeyFrameAnimation("paused")
    });

    card.addEventListener('mouseleave', () => {
        startAutoScroll();
        startStopKeyFrameAnimation("running")
    });

});

// TODO
// document.querySelectorAll('.testimonial-card')[0].addEventListener('animationiteration', () => {
//     currentAnimationCount = 0
//     animationCount++; // Increment the count
//     console.log("animationCount", animationCount)

//     setTimeout(() => {
//         stopAutoScroll();
//         startStopKeyFrameAnimation("paused")
//     }, 1000); 
// });