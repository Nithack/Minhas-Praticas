let divPrincipal = document.getElementsByClassName(".div1")
console.log(divPrincipal)
divPrincipal.addEventListener("click", (e) => {
    if (direction == "column") {
        e.style.flexDirection = "row";
    }
    e.style.flexDirection = "column";
});
