;(function () {

let mediaStartPrizeInfo =  "top 30%+=100px"
if(availableScreenWidth <=767){
    mediaStartPrizeInfo = "top 75%-=100px"
}

prize = gsap.timeline({
    scrollTrigger:{
        trigger: ".prize",
        start: "top 30%+=100px",
        end: "top 30%+=100px",
        toggleActions:PlayReverse,
    }
})
prize.from((".prize__price"),{
            scale:0,
            opacity:0,
            duration:1
        })
        .from((".prize__img"),{
            x:-150, 
            y:100,
            z:-30, 
            transformOrigin:"0% 100%",
            opacity:0,
            stagger:0.7
        })
        .to((".prize__img"),{
            scale:1.05,
            repeat:-1,
            duration:1.3,
            yoyo:true,
            ease: "power1.inOut",
        });

        prizeInfo = gsap.timeline({
            scrollTrigger:{
                trigger: ".prize__info",
                start: mediaStartPrizeInfo,
                end: mediaStartPrizeInfo,
                toggleActions:PlayReverse,
            }
        })
        prizeInfo.from(".prize__info",{
            scale:0,
            opacity:0,
            duration:0.5
        });
})();