var clickSound = new Audio('mouse-click-153941.mp3');
var lastClickTime = 0;
function display(value) {
    var currentTime = new Date().getTime();
    var timeDifference = currentTime - lastClickTime;
    if (timeDifference > 500) {
        playClickSound();
        lastClickTime = currentTime;
    }
    document.getElementById("display").value += value;

}

function clearDisplay() {
    playClickSound();
    document.getElementById("display").value = "";
}
function calculate() {
    try {
        playClickSound();
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
       
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
function playClickSound() {
    var clickSound = new Audio('mouse-click-153941.mp3'); 
    clickSound.play();
}
function erase(){
    var currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
    playClickSound();
}