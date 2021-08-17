const view=document.querySelector('.view')
const head1=document.querySelector('.topheader')

const bg1=document.querySelector('.bg')
const nav1=document.querySelector('.nav')
const suba=document.querySelectorAll('.menu li > a')


const sec1=document.querySelector('.sec1-1')
const sec1a=document.querySelector('.sec1-1a')
const sec1b=document.querySelector('.sec1-1b')
const sec1c=document.querySelector('.sec1-1c')
const sec1d=document.querySelector('.sec1 .sec1-1 .button')
const sec1txt=document.querySelector('.txt')

const sec1icomask=document.querySelector('ico-mask')
const sec1ico1=document.querySelector('.ico1 img')
const sec1ico2=document.querySelector('.ico2 img')
const winsec1=window.innerHeight;

let elSec1a;




$('topheader').ready(function(){
$('.topheader').mousemove(function(e){
    if( e.pageY <=100){
        $('.menu li > a').css({
            color:'black',
        })
        
    }else{
        $('.menu li > a').css({
            color:'white',
            transition:'0.2s'
        })

    }
})
});

let scrollDefault = scrollY;
window.addEventListener("scroll",()=>{
    let scrSenond=scrollY;
    if(scrollDefault<scrSenond){
        head1.classList.add('hide');
    }else{head1.classList.remove('hide');
}
scrollDefault=scrSenond;
});


head1.addEventListener('mouseenter',function(){
    bg1.classList.add('active');
});
head1.addEventListener('mouseleave',function(){
    bg1.classList.remove('active');
});








window.addEventListener('scroll',function(e){
    
    elSec1a=sec1.offsetTop;
    if(elSec1a -winsec1 <= this.window.scrollY){
        sec1a.classList.add('active')
        sec1b.classList.add('active')
        sec1c.classList.add('active')

    }
});

sec1d.addEventListener('mouseenter',function(){
   
   sec1d.classList.add('active');
   sec1txt.style.color="white";
   sec1txt.style.transform="translateX(30px)";
   sec1icomask.style.transition="0.5s";

    
});
sec1d.addEventListener('mouseleave',function(){
   
    sec1d.classList.remove('active')
    sec1txt.style.color="black";
    sec1txt.style.transform="translateX(0px)"
    sec1icomask.style.transition="0.5s"

 });






//메인 페이지 플랫 비지니스 

document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    
    const x = (window.innerWidth - e.pageX * speed)/100;
    const y = (window.innerHeight - e.pageY * speed)/100;
    
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  })
}


