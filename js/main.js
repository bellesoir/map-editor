//toggles the dropdownMenu for a NavElement, ensures only one dropdownMenu is displayed at a time
var dropdownMenu = function(index){
    var dropdown =document.getElementsByClassName('dropdown')[index];
    //checks if a dropdown exists for that NavlistItem
    if(dropdown !== undefined) {
        if (window.getComputedStyle(dropdown, null).getPropertyValue('display') === 'none'){
                hideAllDropdowns();
                dropdown.style.display = 'inline-block';
        } else {
                dropdown.style.display = 'none';
        }
    }
};

//hides all dropdownMenus
var hideAllDropdowns = function(){
    var allDropdowns = document.getElementsByClassName('dropdown');
    for(var i = 0; i < allDropdowns.length; i++){
        allDropdowns[i].style.display = 'none';
    }
};

//shows NavElement that is selected
var isSelected = function(element){
    var allNavElements = document.getElementsByClassName('nav');
    if(element.style.backgroundColor === '') {
        for(var i = 0; i < allNavElements.length; i++){
            allNavElements[i].style.backgroundColor = '';
        }
        element.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    } else {
        element.style.backgroundColor = '';
    }

};


//Toggles the clicked NavElement's dropdownMenu. *only 1 dropdownMenu will display at a time*
document.getElementById('navElement-1').addEventListener('click', function(){
    dropdownMenu(0);
    isSelected(this);
});

document.getElementById('navElement-2').addEventListener('click', function(){
    dropdownMenu(1);
    isSelected(this);
});

//Displays layers when parent element (map or parent layer) is clicked
var showSublayers = function(element){
    $(element).siblings('ul').slideDown();
};

var hideOtherSublayers = function(){
    var inputs = $("input");
    for(var i = 0; i< inputs.length; i++){
        if (inputs.eq(i).prop("checked") === false) {
            inputs.eq(i).siblings('ul').hide();
        }
    }
};

//unchecks inputs that are not visible
var checkNotVisible = function(){
    for(var i = 0; i< $("input").length; i++){
        if ($("input").eq(i).is(':visible') === false) {
            $("input").eq(i).prop('checked', false);
        }
    }
};

$("input").on( "click", function(){
    showSublayers(this);
    hideOtherSublayers();
    checkNotVisible();

    if ($( "#map-1" ).prop('checked')) {
        $('#japan').show();
    } else {$('#japan').hide();}

    if ($("#bottles").prop('checked')) {
        $( ".is-green" ).show();
    } else {
        $( ".is-green" ).hide();
    }
    if ($("#bottles-upgrade").prop('checked')) {
        $( ".need-upgrade" ).show();
    } else {
        $( ".need-upgrade" ).hide();
    }
    if ($("#masks").prop('checked')) {
        $( ".is-blue" ).show();
    } else {
        $( ".is-blue" ).hide();
    }
    if ($("#treasures").prop('checked')) {
        $( ".is-yellow" ).show();
    } else {
        $( ".is-yellow" ).hide();
    }

});



/*
//toggles layer's display
$('input').on( "click", function(){
    if ($("#bottles").prop('checked')) {
        $( ".is-green" ).show();
    } else {
        $( ".is-green" ).hide();
    }
});

$("#masks").on( "click", function(){
    if ($("#masks").prop('checked')) {
        $( ".is-blue" ).show();
    } else {
        $( ".is-blue" ).hide();
    }
});

$("#treasures").on( "click", function(){
    if ($("#treasures").prop('checked')) {
        $( ".is-yellow" ).show();
    } else {
        $( ".is-yellow" ).hide();
    }
});
*/

//displays markers discription on hover
$('.marker').on('mouseenter', function(){
    $(this).siblings('.description').css('display', 'inline-block');
});

$('.marker').on('mouseleave', function(){
    $(this).siblings('.description').css('display', 'none');
});

//displays outline for markers when clicked, indicates found
$('.marker').on('click', function(){
    $(this).css({
        'background-color': 'red'
    });

});

/* //Code for making the editor interactive.
//Add marker(on click): Disply marker-editor
document.getElementById('add-marker').addEventListener('click', function(){
    document.getElementById('marker-editor').style.display = 'block';
});

//Makes Markers undraggable
document.getElementById('btn-set-marker').addEventListener('click', function(){
    var draggableElements = $('.draggable');
    draggableElements.draggable({disabled: true});
    document.getElementById('marker-editor').style.display = 'none';
});
*/

//Makes Markers Draggable
$('#draggable').draggable({
    stop: function(event, ui) {
        var pos = ui.helper.position(); // just get pos.top and pos.left
        $($('#marker-assisstant span')[0]).text(pos.top);
        $($('#marker-assisstant span')[1]).text(pos.left);
    }
});
