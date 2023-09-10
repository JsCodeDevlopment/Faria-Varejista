const header = document.querySelector("header")

function changeColor() {
    if (header.pageXOffset > 5) {
        header.style.backgroundColor("#fff")
    }
}



window.addEventListener("scroll", changeColor)
