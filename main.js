//function to change background color linked to an onclick button function
function changeBackgroundColour(color){
    document.querySelector(`*`).style.backgroundColor = color;
}

//function tells user if they are already in dark or light mode with an alert pop up
function alertLight() {
    alert("You are already in Light Mode!");
}
function alertDark() {
    alert("You are already in Dark Mode!");
}

