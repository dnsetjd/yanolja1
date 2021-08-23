// $(document).ready(function(){
//     // let d_width =0;
//     // let d_height=0;

//     //     function tmp(){
//     //         let con_width= $(window).outerWidth() * $('.box').length;

//     //         $('.sec3').css({
//     //             width:con_width,
//     //             height:'100vh',
//     //             top:0,
//     //             left:0
//     //         });
//     //         $('.box').css({
//     //             width: con_width / $('.box').length,
//     //             height: '100vh',
//     //             float: 'left'
//     //         });

//     //         $('.view').css({
//     //             height:'100vh'
//     //         })


//     //         let w_width = $(window).width();
//     //         let w_height= $(window).height()

//     //         d_width=con_width - w_width;
//     //         d_height=$('sec3').height()-w_height
//     //     }
//     //     tmp();

//     //     let array = [];
//     //     for(let i=0; i<$('.box').length; i++) {
//     //         array[i] = $('.box').eq(i).offset().left
//     //     }



        

      
        



// })

//메인페이지 화살표 
const sec3=document.querySelector('.button3')
const sec3txt=document.querySelector('.button3 txt')
const sec3mask=document.querySelector('.button3 ico-mask')

sec3.addEventListener('mouseenter',function(){
   
    sec3.classList.add('active');
    sec3txt.style.color="white";
    sec3txt.style.transform="translateX(30px)";
    sec3mask.style.transition="0.5s";
 
     
 });
 sec3.addEventListener('mouseleave',function(){
    
     sec3.classList.remove('active')
     sec3txt.style.color="black";
     sec3txt.style.transform="translateX(0px)"
     sec3mask.style.transition="0.5s"
 
  });
 


  const sec2=document.querySelector('.button2')
  const sec2txt=document.querySelector('.button2 txt')
  const sec2mask=document.querySelector('.button2 ico-mask')

  sec2.addEventListener('mouseenter',function(){
   
    sec2.classList.add('active');
    sec2txt.style.color="white";
    sec2txt.style.transform="translateX(30px)";
    sec3mask.style.transition="0.5s";
 
     
 });
 sec2.addEventListener('mouseleave',function(){
    
     sec2.classList.remove('active')
     sec2txt.style.color="black";
     sec2txt.style.transform="translateX(0px)"
     sec2mask.style.transition="0.5s"
 
  });



