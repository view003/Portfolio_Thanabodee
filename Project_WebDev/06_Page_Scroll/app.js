const progressEl = document.querySelector(".progress")
window.onscroll=()=>scrollprogress()

function scrollprogress(){
    const pagehegiht = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolltop = document.documentElement.scrollTop
    const scrollpercentage = (scrolltop/pagehegiht)*100
    progressEl.style.visivility="visible"
    progressEl.style.width = scrollpercentage+"%"
}