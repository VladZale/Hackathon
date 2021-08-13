;(function () {
// let availableScreenWidth = window.screen.availWidth;

let mediaStartInfo = "top 30%+=100px"
let mediaStartTriger =  ".info__inner"
let mediaStartDesc =  "top 40%+=100px"
if(availableScreenWidth <=767){
    mediaStartInfo = "top 80%-=100px"
    mediaStartTriger = ".info__item-end"
}

infoEnd = gsap.timeline({
    scrollTrigger:{
        trigger: mediaStartTriger,
        start: mediaStartDesc,
        end: mediaStartDesc,
        toggleActions:PlayReverse,
    }
})
infoEnd.from((".info__desc"),{
    x:-100, 
    y:100,
    z:-20, 
    transformOrigin:"0% 100%",
    opacity:0,
})
    .from((".info__btn"),{
        delay:0.4,
        scale:0,
    });

    
    document.querySelectorAll(".info__box").forEach((item) => {
        infoBox = gsap.timeline({
            scrollTrigger:{
                trigger: item,
                start: mediaStartInfo,
                end: mediaStartInfo,
                toggleActions:PlayReverse,   
            }
        })
                infoBox.from((item),{
                    x:-150, 
                    y:100,
                    z:-30, 
                    transformOrigin:"0% 100%",
                    opacity:0,
                    stagger:0.7
                })
                .to((item),{
                    y:-30,
                    x:30,
                    z:-30,
                    repeat:-1,
                    duration:1.3,
                    yoyo:true,
                    ease: "power1.inOut",
                })
    })
})();