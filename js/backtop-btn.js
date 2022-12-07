const backTopBtn = document.querySelector("#backtop");

backTopBtn.style.opacity = 0;

document.addEventListener("scroll", function(){
    if(window.pageYOffset > 300){
        backTopBtn.style.opacity = 1;
    }else{
        backTopBtn.style.opacity = 0;
    }
})