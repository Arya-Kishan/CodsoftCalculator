let input = document.getElementById("input")
let buttons = document.getElementsByTagName("button")
let box = document.querySelectorAll(".box")
let arr = Array.from(buttons)
let string = "";
arr.forEach(button => {
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string)
            input.value = string
        }
        else if(e.target.innerHTML == "AC"){
            string = ""
            input.value = string
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0,(string.length-1))
            input.value = string;
        }
        else{
            string += e.target.innerHTML
            input.value = string
        }
    })
});

function handleInput(){
    input.value = eval(input.value)
}

box.forEach((e,i)=>{
    e.style.height = `${i+(i+5)}0px`
})

function GSAP(){
    gsap.to(".mainBox",{
        x:'100vw',
        duration:3,
        repeat:-1,
        yoyo:true,
    })
    
    let tl = gsap.timeline()
    tl.to("#box1",{
        height:'0px',
        duration:1,
        repeat:-1,
        yoyo:true,
        stagger:true,
    })
    tl.to("#box2",{
        height:'0px',
        duration:1.1,
        repeat:-1,
        yoyo:true,
        stagger:true,
    })
    tl.to("#box3",{
        height:'0px',
        duration:1,
        repeat:-1,
        yoyo:true,
        stagger:true,
    })
    tl.to("#box4",{
        height:'0px',
        duration:1.2,
        repeat:-1,
        yoyo:true,
        stagger:true,
    })
    tl.to("#box5",{
        height:'0px',
        duration:1,
        repeat:-1,
        yoyo:true,
        stagger:true,
    })
}
GSAP();


