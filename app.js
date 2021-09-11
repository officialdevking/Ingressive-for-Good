document.getElementById('hamburger').onclick = ()=>{
    document.getElementById('sliding_menu').style.display = "block"
    document.querySelector('body').classList.add("slide_open")
}
document.getElementById('cancel').onclick = ()=>{
    document.getElementById('sliding_menu').style.display = ""
    document.querySelector('body').classList.remove("slide_open")

}