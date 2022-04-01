function next() {
    document.getElementById('login').style.display = "none";
    document.getElementById('registration').style.display = "block";
}
function prev() {
    document.getElementById('registration').style.display = "none";
    document.getElementById('login').style.display = "block";
}

document.getElementById('year').innerHTML = new Date.getFullYear();