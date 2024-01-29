var header = document.getElementById("header");
var navHeader = document.getElementById("nav_header");
var content = document.getElementById("content");
var showSidebar = false;
var email = document.getElementById('email');
var password = document.getElementById('password');
function toggleSidebar() {
        showSidebar = !showSidebar;
        console.log(showSidebar);
    if (showSidebar) {
        navHeader.style.marginLeft = "-10vw";
    } else {
        navHeader.style.marginLeft = "-100vw";
    }
}
email.addEventListener('focus',()=>{
    email.style.borderColor = '#e8ce0c'
})
email.addEventListener('blur',()=>{
    email.style.borderColor = '#1c1c1c'
})
password.addEventListener('focus',()=>{
    password.style.borderColor = '#e8ce0c'
})
password.addEventListener('blur',()=>{
    password.style.borderColor = '#1c1c1c'
})