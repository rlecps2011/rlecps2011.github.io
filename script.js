const btn = document.querySelector('#alternar-links');
const angleIcon = btn.querySelector(".anglo-icon")
const links = document.querySelector("#links")

btn.addEventListener("click", function(event) {
    if(!links.classList.contains('active')) {
        links.classList.add('active')
        angleIcon.classList.remove('fa-angle-down')
        angleIcon.classList.add('fa-angle-up')
    } else {
        links.classList.remove('active')
        angleIcon.classList.add('fa-angle-down')
        angleIcon.classList.remove('fa-angle-up')
    }
})