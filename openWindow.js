module.exports = wins => () => {
  const win = window.open('', '', 'width=200,height=200,left=0,top=0')
  wins.push(win)
  const html = `
    <html>
      <style>
        video {
          width: 300px;
          height: 500px;
        }
      </style>
      <body>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/kfVsfOSbJY0?autoplay=1" frameborder="0" allowfullscreen></iframe>
      <video autoplay></video>
      <script>
        window.resizeTo(
          window.screen.availWidth,
          window.screen.availHeight
        )
        document.addEventListener('mousemove', function (e) {
          x = e.screenX - 100
          y = e.screenY - 200
          // window.resizeTo(200, 200)
          // window.moveTo(x, y)
          window.resizeTo(
            randomInt(200, 1000),
            randomInt(200, 1000)
          )
          window.moveTo(randomInt(0, 1000), randomInt(0, 1000))
        })

        setInterval(function () {
          window.requestAnimationFrame(function () {
            window.resizeTo(
              randomInt(200, 1000),
              randomInt(200, 1000)
            )
            window.moveTo(randomInt(0, 1000), randomInt(0, 1000))
          })
        }, 1)

        function randomInt(min, max) {
          return Math.floor(Math.random()*(max-min+1)+min)
        }
        </script>
      </body>
    </html>
  `
  win.document.write(html)
  wins.forEach(win => win.focus())
}
