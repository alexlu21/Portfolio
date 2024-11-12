const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");
const github_url = "https://github.com/alexlu21"
const linkedin_url = "https://www.linkedin.com/in/alex-lugris-572a5b317/"
const ubi_url = "https://www.google.com/maps/place/A+Coru%C3%B1a,+La+Coru%C3%B1a/@43.3618723,-8.4332832,6425m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd2e7cfcf174574d:0x6a47350d095cdfee!8m2!3d43.3637626!4d-8.4103923!16zL20vMDJodmp5?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    nav.classList.toggle('active')
}
function github(){
    window.open(github_url, '_blank')
}
function linkedin(){
    window.open(linkedin_url, '_blank')
}
function ubi(){
    window.open(ubi_url,'_blank')
}
function redi(url){
    window.open(url,'_blank')
}