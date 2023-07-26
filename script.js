function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/wesley.jpg")
  } else {
    img.setAttribute("src", "./assets/wesley4.jpg")
  }
}
