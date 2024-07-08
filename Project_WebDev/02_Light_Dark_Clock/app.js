const timeEl = document.querySelector(".time")
const btnToggle = document.querySelector(".toggle")
function setTime(){
    const time = new Date()
    const hours = time.getHours()
    const mins = time.getMinutes()
    const secs = time.getSeconds()
    timeEl.innerHTML=
    `${hours < 10 ? `0${hours}`: hours}:
    ${mins < 10 ? `0${mins}`: mins}:
    ${secs < 10 ? `0${secs}` : secs}`
}

btnToggle.addEventListener("click",(e)=>{
    const html = document.querySelector(`html`)
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML="Dark Mode"
    }else{
        html.classList.add("dark")
        e.target.innerHTML="Light Mode"
    }
})
setTime()
setInterval(setTime,1000)