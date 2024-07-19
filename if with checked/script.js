const mycheckbox = document.getElementById("mycheckbox");
const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const rupay = document.getElementById("rupay");
const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");
const mySubmit = document.getElementById("mySubmit");

mySubmit.onclick = function() {
    if(mycheckbox.checked && visa.checked){
        para1.innerHTML = `You are Subscribed!`
        para2.innerHTML = `You are paying with Visa Card.`
    } else if(!mycheckbox.checked && visa.checked) {
        para1.innerHTML = `Please Subscribe before paying`
        para2.innerHTML = "";
    } else if (mycheckbox.checked && mastercard.checked){
        para1.innerHTML = `You are Subscribed!`
        para2.innerHTML = `You are paying with masterCard.`
    } else if (mycheckbox.checked && rupay.checked){
        para1.innerHTML = `You are Subscribed!`
        para2.innerHTML = `You are paying with rupay card.`
    } else {
        para1.innerHTML = "Please subscribe first then perform other actions, Thanks!"
    }
}