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
        element.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
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
    $(element).siblings('ul').css('height', 'auto');
};

var hideOtherSublayers = function(){
    var inputs = $("input");
    for(var i = 0; i< inputs.length; i++){
        if (inputs.eq(i).prop("checked") === false) {
            inputs.eq(i).siblings('ul').animate({
                height: 0
            });
        }
    }
};

$("input[type=radio]").on( "click", function(){
    showSublayers(this);
    hideOtherSublayers();
});

$( "input[type=checkbox]" ).on( "click", function(){
    showSublayers(this);
    hideOtherSublayers();
});
