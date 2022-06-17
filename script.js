let boxesParent = document.querySelectorAll(".main_box_wrapper"),
    boxes = document.querySelectorAll(".main_box")


function hideStyles(){
    boxes.forEach(item => {
        item.classList.remove("redborder")
        item.classList.remove("greenborder");
        item.classList.remove("blueborder");
        item.classList.add("fade");
    })   
}

hideStyles()

function showStyles(i = 0){
    if(i == 0){
        boxes[i].classList.remove("fade")
        boxes[i].classList.add("blueborder")
    }else if(i == 1){
        boxes[i].classList.add("redborder")
    }else if(i == 2){
        boxes[i].classList.add("greenborder")
    }
    boxes[i].classList.remove("fade")
}
showStyles()

boxesParent.forEach(item => {
    item.addEventListener("click" , (e) => {
    const target = e.target.closest(".main_box");
    if(target && target.matches(".main_box")){
        boxes.forEach((item,i) =>{
            if(target == item){
                hideStyles()
                showStyles(i)
            }
        })
    }
})
})