document.querySelectorAll('a[href^="#"]').forEach(link=>{
link.addEventListener("click",function(e){
e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});
});

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}
});
});

cards.forEach(card=>{
card.style.opacity="0";
card.style.transform="translateY(50px)";
card.style.transition="all .6s";
observer.observe(card);
});

console.log("Saruchi Meals Website Loaded Successfully");
