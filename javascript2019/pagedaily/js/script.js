function load() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var data = new Date()
    var hour = data.getHours()

    msg.innerHTML = `Now is ${hour} hours`

    if(hour >= 0 && hour < 12) {
        msg.innerHTML = `Now is Morning ${hour} hours`
        img.src = 'img/morning.jpg'
        document.body.style.background = 'orange'
    } else if(hour > 12 && hour < 18) {
        msg.innerHTML = `Now is afternoon ${hour} hours`
        img.src = 'img/afternoon.jpg'
        document.body.style.background = 'green'
    } else {
        msg.innerHTML = `Now is night ${hour} hours`
        img.src = 'img/night.jpg'
        document.body.style.background = 'pink'
    }

}
