const openWindow = require('./openWindow.js')
require('./lolvideo')()
const wins = []

document.addEventListener('click', openWindow(wins))
document.addEventListener('keydown', openWindow(wins))
document.addEventListener('keyup', openWindow(wins))
document.addEventListener('keypress', openWindow(wins))

