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



// let tophei=offsetTop;
// $('.topheader').ready(function(){
// $('.topheader').mousemove(function(e){
//     if( tophei <=100){
//         $('.menu li > a').css({
//             color:'black',
//         })
        
//     }else{
//         $('.menu li > a').css({
//             color:'white',
//             transition:'0.2s'
//         })

//     }
// })
// });

let scrollDefault,scrSenond,state;
let elSec3 = document.querySelector('.sec3');
let elSec4 = document.querySelector('.sec4');
let elSec3Top = elSec3.offsetTop ;
function scrollState(){
    scrSenond = window.scrollY;
    scrollDefault < scrSenond ?  state=true : state =false;
    scrollDefault = scrSenond;
    return state;
}
window.addEventListener("scroll",()=>{
    
    if(scrollState()){
        head1.classList.add('active');
        if(scrSenond > window.innerHeight) {
            head1.classList.add('white');
        }         
    }else{
        head1.classList.remove('active');
        if(scrSenond < window.innerHeight) {
            head1.classList.remove('white');
        }
    }
    slideFun();
});



function slideFun(){

    let elSec3 = document.querySelector('.sec3');
    let elSec31 = document.querySelector('.sec3-1');
    let elSec32 = document.querySelector('.sec3-2');
    let elSec3P = document.querySelector('.sec3-2 p');
    let elSec4 = document.querySelector('.sec4');
    let elSec3Top = elSec3.offsetTop ;

    //sec3 슬라이더
    elSec3.style = `height:${elSec3P.offsetWidth}px`;
    end = elSec4.offsetTop - window.innerHeight;

    if(elSec3Top < window.scrollY){
        if(end > window.scrollY){
            elSec31.style = `transform:translateY(${window.scrollY - elSec3Top}px)`;
            elSec32.style = `transform:translateY(${window.scrollY - elSec3Top}px)`;
            if(end * 0.88 > window.scrollY) elSec3P.style = `transform:translateX(-${window.scrollY - elSec3Top}px)`;
        }
    }
}




//헤더


head1.addEventListener('mouseenter',function(){
    head1.classList.add('white');
    bg1.classList.add('active');
});
head1.addEventListener('mouseleave',function(){
    bg1.classList.remove('active');
    if(window.scrollY < window.innerHeight) {
        head1.classList.remove('white');
    }
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


 //화살표

const maskdown= document.querySelector('.maskdown')
const sec=document.querySelector('.sec')
window.addEventListener('scroll',function(){

    if(window.innerHeight+400< window.scrollY){
        console.log('문서 하단')
        transimg1.style=`display:initial ;height:20px; margin-left:5px;margin-top:2px;`
        transimg.style=`animation:none; display:none; `
        maskdown.style='width:30px; height:30px; border-radius:100%; border:2px solid black; transition:0.5s;cursor: pointer;'
    }else{
        maskdown.style='width:50px; height:100px;transition:0.5s;botoom:-1000px;'
        transimg.style="animation: maskdown 1s infinite; "
        transimg1.style=`display:none;`
       
    }
})

arr.addEventListener('click',function(e){
e.preventDefault();
arr.style=`transition:0.5s`
window.scrollTo({top:0,behavior:'smooth'});
});


//메인페이지 야놀자 우주

document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    
    const x = (window.innerWidth - e.pageX * speed)/100;
    const y = (window.innerHeight - e.pageY * speed)/100;
    
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  })
}


// //index2 페이지 부분

// $(document).ready(function(){

 
//     $(".condetail1 .h2hiden").click(function(){
//       let condetailslide = $(this).next("ul");
//       // let h2hiden = $(this).find("h2");
     
//       if( condetailslide.is(":visible") ){
//         condetailslide.slideUp();
//         $("h2").text("PLATFORM BUSINESS ▼")
//     }else{
//       condetailslide.slideDown();
//       $("h2").text("PLATFORM BUSINESS ▲")
//     }
  
  
//     })
//   })
    
  
  
  
//   $(function(){
//     let count=3500;
  
//     time();
//     function time(){
//       id=setInterval(lastcount,10);
  
//       function lastcount(){
//         count ++;
//         if(count==4001){
//           clearInterval(id)
          
//         }else{
//           $(".last").eq(0).text(count+"만+");
//         }
//       }
//     }
//   })
    
    
    
    
//     // 2페이지 숫자 카운트
  
  
  
//   $(function() {
  
//       $('.in2').css({
//           color:'red',
//           fontsize:'60px',
          
  
//       });
    
//       var count0 =14999500;
//       var size=58; 
//       var in2=$(".in2");
  
//       timeCounter();
    
//       function timeCounter() {
    
//         id0 = setInterval(count0Fn, 12);
    
//         function count0Fn() {
//           count0++;
          
//           if (count0 ==15000001) {
//             clearInterval(id0);
//             size++;
//             in2.css("font-size",size+"px");
            
//           } else {
//             $(".in2").eq(0).text(count0+"만");
           
//           }
    
//         }
    
  
//       } 
//     });
  
//   //2페이지 호버 효과
  
//     const { gsap, Splitting } = window;
    
//     Splitting();
    
//     gsap.set('.cards__wrapper', { autoAlpha: 1 })
    
//     gsap.timeline({
//       defaults: {
//         duration: 1.25,
//         stagger: 0.125,
//         ease: "expo.inOut",
//       },
//     })
//       .fromTo(".card__image--wrapper", { yPercent: 110 }, { yPercent: 0 }, 0)
//       .fromTo(".card__image--outer", { yPercent: -110 }, { yPercent: 0 }, 0)
//       .set(".cards__wrapper, .card", { pointerEvents: "all" }, "-=1");
  
  
     
//   //index3페이지 부분

  
// //메인페이지 화살표 
// const sec3=document.querySelector('.button3')
// const sec3txt=document.querySelector('.button3 txt')
// const sec3mask=document.querySelector('.button3 ico-mask')

// sec3.addEventListener('mouseenter',function(){
   
//     sec3.classList.add('active');
//     sec3txt.style.color="white";
//     sec3txt.style.transform="translateX(30px)";
//     sec3mask.style.transition="0.5s";
 
     
//  });
//  sec3.addEventListener('mouseleave',function(){
    
//      sec3.classList.remove('active')
//      sec3txt.style.color="black";
//      sec3txt.style.transform="translateX(0px)"
//      sec3mask.style.transition="0.5s"
 
//   });
 


//   const sec2=document.querySelector('.button2')
//   const sec2txt=document.querySelector('.button2 txt')
//   const sec2mask=document.querySelector('.button2 ico-mask')

//   sec2.addEventListener('mouseenter',function(){
   
//     sec2.classList.add('active');
//     sec2txt.style.color="white";
//     sec2txt.style.transform="translateX(30px)";
//     sec3mask.style.transition="0.5s";
 
     
//  });
//  sec2.addEventListener('mouseleave',function(){
    
//      sec2.classList.remove('active')
//      sec2txt.style.color="black";
//      sec2txt.style.transform="translateX(0px)"
//      sec2mask.style.transition="0.5s"
 
//   });



