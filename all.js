
window.addEventListener("load", function(event) {
    intro();
  });

    // 預設大家的 duration 都是 1 秒
    // 但還是可以在單個身上添加獨立的 duration，那就會以單個身上的為主，不吃 default
    // 要選偽元素要引入 gsap 的 plugin 才能選
const timeline = gsap.timeline({ defaults: { duration:1 } });
const before = CSSRulePlugin.getRule(".slot-machine::before"); // 必須與 CSS 檔案中的選擇器一致
const menu = document.querySelector(".menu");

function intro(){

    // 文字由下往上淡入
    // revelaer 由右往左長出寬度後＋再往右撤退
    timeline
    .from(".revealer",{
        width: "0",
        ease: "Power4.easeInOut",
    })
    .from(".loader-logo",{
        y: "25",
        opacity: "0",
        ease: "power3.inOut",
    },0.2)
    .to(".revealer", {
        left: "100%",
        display: "none",
        ease: "Power4.easeInOut",
    }, "<1.75")
    .to(".loader-logo", {
        y: "25",
        opacity: "0",
        display: "none",
        ease: "power3.inOut",
    }, 1.75)
    .from(".slogan-block",{
        width: "0",
        ease: "Power4.easeInOut",
        stagger: 0.25,
    },2.25)
    .from(".slot-machine-block",{
        width: "0",
        ease: "Power4.easeInOut",
    }, "<0.75")
    .from(before,{
        left: "-50px",
        ease: "Power4.easeInOut",
    }, 2.5)
}

// function sloganAnimation(){
//     timeline    
//     .from(".slogan-block",{
//         width: "0",
//         ease: "Power4.easeInOut",
//         stagger: 0.25,
//     },2.25)
//     .from(".slot-machine-block",{
//         width: "0",
//         ease: "Power4.easeInOut",
//     }, "<0.75")
//     .from(before,{
//         left: "-50px",
//         ease: "Power4.easeInOut",
//     }, 2.5)
// }

    // "<0.5" 代表「相對延遲」，是相對於於前一個動畫，延遲 delay 0.5秒
    // 要注意 "<0.5" 引號內左右兩側，不可以有多餘空白，否則會失效。
    // 如果沒有雙引號直接寫數字，代表「絕對延遲」，是相對於第一個動畫開始往後算延遲。


menu.addEventListener("click", function(e){
    if(e.target.tagName !== "UL"){
        
        gsap.from(".slogan-block",{
            duration: 1.25,
            width: "0",
            stagger: 0.25,
            ease: "Power4.easeInOut",
        })
        
        gsap.from(".slot-machine-block",
        {
            width: "0",
            ease: "Power4.easeInOut",
            delay: 1.25
        })

        gsap.from(before,{
            left: "-25px",
            ease: "Power4.easeInOut",
            delay: 1
        })
        
        console.log("點擊到選單項目");
    }
});


