;(function () {
let mediaStartData = "top 35%+=100px"
if(availableScreenWidth <=767){
    mediaStartData = "top 5%+=100px"
}



date = gsap.timeline({
    scrollTrigger:{
        trigger: ".date",
        start: "top 30%+=100px",
        end: "top 30%+=100px",
        toggleActions:PlayReverse,
    }
})
        .from((".date__box"),{
            x:-150, 
            y:100,
            z:-30, 
            transformOrigin:"0% 100%",
            opacity:0,
            stagger:0.7
        })
        .to((".date__box"),{
            y:-30,
            x:30,
            z:-30,
            repeat:-1,
            duration:1.3,
            yoyo:true,
            ease: "power1.inOut",
        })

dateDesc = gsap.timeline({
            scrollTrigger:{
                trigger: ".date__desc",
                start: mediaStartData,
                end: mediaStartData,
                toggleActions:PlayReverse,
            }
        })
        dateDesc.from((".date__desc"),{
            scale:0,
            opacity:0,
            duration:1
        });
    })();