var dropdownMenu = function(index){


};


    document.getElementById('navElement-1').addEventListener('click', function(){
        var dropdown =document.getElementsByClassName('dropdown')[0];
        //checks if a dropdown exists for that NavlistItem
        if(dropdown !== undefined) {
            if (window.getComputedStyle(dropdown, null).getPropertyValue('display') === 'none'){
                    hideAllDropdowns();
                    dropdown.style.display = 'inline-block';
            } else {
                    dropdown.style.display = 'none';
            }//ends if/else block
        }//ends if
    });//ends addEventListener

    document.getElementById('navElement-2').addEventListener('click', function(){
        var dropdown =document.getElementsByClassName('dropdown')[1];
        //checks if a dropdown exists for that NavlistItem
        if(dropdown !== undefined) {
            if (window.getComputedStyle(dropdown, null).getPropertyValue('display') === 'none'){
                    hideAllDropdowns();
                    dropdown.style.display = 'inline-block';
            } else {
                    dropdown.style.display = 'none';
            }//ends if/else block
        }//ends if
    });//ends addEventListener

var hideAllDropdowns = function(){
    var allDropdowns = document.getElementsByClassName('dropdown');
    for(var i = 0; i < allDropdowns.length; i++){
        allDropdowns[i].style.display = 'none';
    }
};
