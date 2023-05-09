
// Priorités en CSS : id > classe > baliseHtml

const sidebar = document.querySelector("#side-bar")
const content = document.querySelector(".content")


btn.addEventListener("click", () => {
    sidebar.classList.toggle('active');  

})

content.addEventListener("click", () => {
    sidebar.classList.remove("active")
})