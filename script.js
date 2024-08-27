window.onload = function() {
    var popup = document.getElementById("popup");
    var closePopup = document.getElementById("close-popup");
    var blinkingText = document.getElementById("blinking-text");
    var imageGallery = document.getElementById("image-gallery");

    // Display the popup when the page loads
    popup.style.display = "block";

    // Close the popup when the 'X' is clicked
    closePopup.onclick = function() {
        popup.style.display = "none";
    }

    // Display the image gallery when the blinking text is clicked
    blinkingText.onclick = function() {
        imageGallery.style.display = "flex";
        popup.style.display = "none";
    }

    // Hide the popup if the user clicks anywhere outside the popup content
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
}
