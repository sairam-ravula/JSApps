function display(e){
    document.getElementById('screen').value += e;
};
function calculate(){
    let x = document.getElementById('screen').value;
    let y = eval(x);
    if (y == Infinity || y == -Infinity){
        document.getElementById('screen').value = "Invalid operation";
    }
    else{
        document.getElementById('screen').value = y;
    }
}
function clearScreen(){
    document.getElementById('screen').value = "";
}