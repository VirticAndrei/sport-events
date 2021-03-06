/* When the user clicks on the button,
 toggle between hiding and showing the dropdown content */
function dropDownOptionsMenu() {
    document.getElementById("optionsDropDownList").classList.toggle("showOptions");
}

window.onclick = function (event) {
    if(!event.target.matches('.optionsButton')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for(i=0;i<dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('showOptions')){
                openDropdown.classList.remove('showOptions');
            }
        }
    }
}
