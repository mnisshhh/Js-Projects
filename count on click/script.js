const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increasebtn.onclick = function() {
    count++;
    countLabel.innerHTML = count;
}

resetbtn.onclick = function() {
    count = 0;
    countLabel.innerHTML = count;
}

decreasebtn.onclick = function() {
    count--;
    countLabel.innerHTML = count;
}