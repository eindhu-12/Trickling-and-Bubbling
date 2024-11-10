document.querySelector("#g").addEventListener("click",()=>{
    console.log("grand parent")

    
},true);
document.querySelector("#p").addEventListener("click",()=>{
    console.log("parent")
},false)
document.querySelector("#c").addEventListener("click",(e)=>{
    console.log("child")
    e.stopPropagation()
},true)