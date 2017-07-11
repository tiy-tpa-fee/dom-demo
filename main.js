const btn = document.querySelector("button.colorize")
const boop = document.querySelector("button.boop")
const boopList = document.querySelector("ul")

const colors = ["red", "orange", "yellow", "green"]
let color = 0

function randColor() {
  const fig = document.querySelector("figure")
  const randColor = colors[Math.round(Math.random() * 4)]
  fig.className = randColor

  const boops = boopList.querySelectorAll("li")
  for (let i = 0; i < boops.length; i++) {
    boops[i].style.color = randColor
  }
}

boop.addEventListener("click", function() {
  const li = document.createElement("li")
  li.textContent = "Boop " + new Date()
  boopList.appendChild(li)
})

function nextColor() {
  color++
  color %= colors.length
  const fig = document.querySelector("figure")
  fig.className = colors[color]
}

btn.addEventListener("click", randColor)
