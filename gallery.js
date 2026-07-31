const gallery = document.querySelectorAll(".gallery img");

const lightbox = document.querySelector(".lightbox");

const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");

const prev = document.querySelector(".prev");

const next = document.querySelector(".next");

let current = 0;

gallery.forEach((img,index)=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

current=index;

});

});

closeBtn.onclick=()=>{

lightbox.style.display="none";

}

next.onclick=()=>{

current=(current+1)%gallery.length;

lightboxImg.src=gallery[current].src;

}

prev.onclick=()=>{

current=(current-1+gallery.length)%gallery.length;

lightboxImg.src=gallery[current].src;

}

lightbox.onclick=(e)=>{

if(e.target===lightbox)

lightbox.style.display="none";

}

document.addEventListener("keydown",(e)=>{

if(lightbox.style.display==="flex"){

if(e.key==="ArrowRight")

next.click();

if(e.key==="ArrowLeft")

prev.click();

if(e.key==="Escape")

closeBtn.click();

}

});