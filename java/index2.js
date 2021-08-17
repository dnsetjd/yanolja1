$(function() {

    $('.in2').css({
        color:'red',
        fontsize:'60px',
        

    });
  
    var count0 =14999500;
    var size=58; 
    var in2=$(".in2");

    timeCounter();
  
    function timeCounter() {
  
      id0 = setInterval(count0Fn, 5);
  
      function count0Fn() {
        count0++;
        
        if (count0 ==15000001) {
          clearInterval(id0);
          size++;
          in2.css("font-size",size+"px");
          
        } else {
          $(".in2").eq(0).text(count0);
         
        }
  
      }
  

    } 
  });


  console.clear();

  const { gsap, Splitting } = window;
  
  Splitting();
  
  gsap.set('.cards__wrapper', { autoAlpha: 1 })
  
  gsap.timeline({
    defaults: {
      duration: 1.25,
      stagger: 0.125,
      ease: "expo.inOut",
    },
  })
    .fromTo(".card__image--wrapper", { yPercent: 110 }, { yPercent: 0 }, 0)
    .fromTo(".card__image--outer", { yPercent: -110 }, { yPercent: 0 }, 0)
    .set(".cards__wrapper, .card", { pointerEvents: "all" }, "-=1");