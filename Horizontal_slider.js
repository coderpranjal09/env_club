let slideIndex = 0;

    function showChild() {
        clearTimeout(timeout); // Clear the timeout to prevent hiding if hovering again within 2 seconds
        document.getElementById("next_B").style.display = "block";
        document.getElementById("prev_B").style.display = "block";

    }

    function hideChild() {
        timeout = setTimeout(function() {
            document.getElementById("next_B").style.display = "none";
            document.getElementById("prev_B").style.display = "none";

        },500); // Hide after 2 seconds
    }
    setInterval(nextSlide, 5000);

    function showSlide(n) {
      const slides = document.querySelectorAll('.slider img');
      if (n >= slides.length) {slideIndex = 0}
      if (n < 0) {slideIndex = slides.length - 1}
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex].style.display = "block";
    }

    function nextSlide() {
      showSlide(slideIndex += 1);
    }

    function prevSlide() {
      showSlide(slideIndex -= 1);
    }

    document.addEventListener("DOMContentLoaded", function() {
      showSlide(slideIndex);
    });