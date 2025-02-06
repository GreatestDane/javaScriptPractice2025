let world = "world";

console.log(`hello ${world}`);

console.log(`Is this saving?`);

$(document).ready(function() {
    // Open the modal when the button is clicked
    $('#openModal').click(function() {
        $('#myModal').fadeIn(); // This will show the modal
    });

    // Close the modal when the close button is clicked
    $('#closeModal').click(function() {
        $('#myModal').fadeOut(); // This will hide the modal
    });

    // Close the modal if the user clicks anywhere outside the modal content
    $(window).click(function(event) {
        if ($(event.target).is('#myModal')) {
            $('#myModal').fadeOut(); // This will hide the modal if clicked outside
        }
    });
});