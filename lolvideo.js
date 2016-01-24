module.exports = () => {
  var getUserMedia = require('getusermedia')
  var ui = {
    video: document.querySelector('video')
  }
  getUserMedia(function (err, stream) {
    if (err) console.error(err)
    ui.video.src = window.URL.createObjectURL(stream)
  })
}

