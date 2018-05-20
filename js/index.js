$(function() {
    $('#expand-button').click(function() {
        $('#expanded').slideToggle();
        if (document.querySelector('#expand-button').className == "glyphicon glyphicon-collapse-down")
            document.getElementById("expand-button").className = "glyphicon glyphicon-collapse-up";
        else
            document.getElementById("expand-button").className = "glyphicon glyphicon-collapse-down";
    });
});
$(function() {
    $('#expand-button_2').click(function() {
        $('#expanded_1').slideToggle();
        if (document.querySelector('#expand-button_2').className == "glyphicon glyphicon-collapse-down")
            document.getElementById("expand-button_2").className = "glyphicon glyphicon-collapse-up";
        else
            document.getElementById("expand-button_2").className = "glyphicon glyphicon-collapse-down";
    });
});
$(function() {
    $('#expand-button_3').click(function() {
        $('#expanded_2').slideToggle();
        if (document.querySelector('#expand-button_3').className == "glyphicon glyphicon-collapse-down")
            document.getElementById("expand-button_3").className = "glyphicon glyphicon-collapse-up";
        else
            document.getElementById("expand-button_3").className = "glyphicon glyphicon-collapse-down";
    });
});
$(function() {
    $('#expand-button_4').click(function() {
        $('#expanded_3').slideToggle();
        if (document.querySelector('#expand-button_4').className == "glyphicon glyphicon-collapse-down")
            document.getElementById("expand-button_4").className = "glyphicon glyphicon-collapse-up";
        else
            document.getElementById("expand-button_4").className = "glyphicon glyphicon-collapse-down";
    });
});

// Get the modal
window.onload = function() {
    var modal_1 = document.getElementById('myModal_1');
    var modal_2 = document.getElementById('myModal_2');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img_1 = document.getElementById('gif_expandable_1');
    var modalImg_1 = document.getElementById("img01");
    var captionText_1 = document.getElementById("caption_1");

    var img_2 = document.getElementById('gif_expandable_2');
    var modalImg_2 = document.getElementById("img02");
    var captionText_2 = document.getElementById("caption_2");

    img_1.onclick = function() {
        modal_1.style.display = "block";
        modalImg_1.src = this.src;
        captionText_1.innerHTML = this.alt;
    }
    img_2.onclick = function() {
        modal_2.style.display = "block";
        modalImg_2.src = this.src;
        captionText_2.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span_1 = document.getElementsByClassName("close_1")[0];
    var span_2 = document.getElementsByClassName("close_2")[0];

    // When the user clicks on <span> (x), close the modal
    span_1.onclick = function() {
        modal_1.style.display = "none";
    }
    span_2.onclick = function() {
        modal_2.style.display = "none";
    }
}
$(document).keyup(function(e) {
    var modal_1 = document.getElementById('myModal_1');
    var modal_2 = document.getElementById('myModal_2');
    if (e.keyCode == 27) { // escape key maps to keycode `27`
        modal_1.style.display = "none";
        modal_2.style.display = "none";
    }
});