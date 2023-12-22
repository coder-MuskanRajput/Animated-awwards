var cursor=document.querySelector(".cursor")
var cursorBlur=document.querySelector(".cursor-blur")

document.addEventListener("mousemove",function(dets){
      cursor.style.left= dets.x + "px";
      cursor.style.top=dets.y +"px";
      cursorBlur.style.left= dets.x -200+ "px";
      cursorBlur.style.top=dets.y-200 +"px";
})

gsap.to(".nav",{
    height:"90px",
    backgroundColor:"black",
    duration:".5",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -80%",
        scrub:2
    }
})