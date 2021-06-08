var menuBtn=document.querySelector(".menu-icon");
var menu=document.querySelector(".navigation ul");

menuBtn.addEventListener("click",(e)=>{
    if(menu.classList.contains("show")){
        menu.classList.remove("show");
    } else {
        menu.classList.add('show');
    }
});