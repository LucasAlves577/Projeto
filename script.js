function toggleMode() {
 const html = document.documentElement
 html.classList.toggle("light")

 const img = document.querySelector("#profile img")

 if (html.classlits.contains("light")) {
  img.setAttribute("scr", "./assets/avatar-light.png")
 } else {
  img.setAttribute("scr", "./assets/avatar.png")
 }
}