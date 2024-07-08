const openbtn = document.querySelector(".open-btn")
const closbtn = document.querySelector(".close-btn")
const modalcontainer = document.querySelector(".modal-container")

openbtn.addEventListener("click",()=>{
    modalcontainer.classList.add("show")
})

closbtn.addEventListener("click",()=>{
    modalcontainer.classList.remove("show")
})