let clickone = document.querySelector(".menu")
let hideone = document.querySelector(".projectshide")
let cancel =document.querySelector(".cancel")
let creatediv =document.createElement("div")



clickone.addEventListener("click",function () {
    
    hideone.style.cssText="display:block";
   
})
cancel.addEventListener("click",function () {
    hideone.style.cssText="display:none";
})


